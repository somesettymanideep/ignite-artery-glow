import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ScrollToTop } from "@/components/home/ScrollToTop";
import { FloatingEmergency } from "@/components/home/FloatingEmergency";
import { FloatingSocials } from "@/components/home/FloatingSocials";
import { BookingModal } from "@/components/booking/BookingModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ignite Vascular Center | Vascular Surgery in Vijayawada" },
      {
        name: "description",
        content:
          "Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists.",
      },
      { name: "author", content: "Ignite Vascular Center" },
      { property: "og:title", content: "Ignite Vascular Center | Vascular Surgery in Vijayawada" },
      {
        property: "og:description",
        content:
          "Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ignite Vascular Center | Vascular Surgery in Vijayawada" },
      { name: "twitter:description", content: "Advanced vascular surgery & endovascular care in Kasturibai Peta, Vijayawada. Varicose veins, PAD, diabetic foot care & dialysis access by expert specialists." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa92a985-c3c0-4cb7-bcb3-5e314d0457c6/id-preview-af5d4c56--d45358fe-d96c-4335-a82c-94158683e95d.lovable.app-1783680897226.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aa92a985-c3c0-4cb7-bcb3-5e314d0457c6/id-preview-af5d4c56--d45358fe-d96c-4335-a82c-94158683e95d.lovable.app-1783680897226.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    let raf = 0;
    let active = false;
    let stopAt = 0;
    const forceTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    const loop = () => {
      forceTop();
      if (performance.now() < stopAt) {
        raf = requestAnimationFrame(loop);
      } else {
        active = false;
      }
    };
    const start = () => {
      stopAt = performance.now() + 400;
      if (!active) {
        active = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const unsub = router.subscribe("onResolved", ({ toLocation, fromLocation }) => {
      if (toLocation.hash) return;
      if (fromLocation && fromLocation.pathname === toLocation.pathname && !fromLocation.hash) return;
      start();
    });
    return () => {
      unsub();
      cancelAnimationFrame(raf);
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <ScrollToTop />
      <FloatingEmergency />
      <FloatingSocials />
      <BookingModal />
    </QueryClientProvider>
  );
}
