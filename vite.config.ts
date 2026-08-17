import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    prerender: {
      routes: [
        "/",
        "/about",
        "/contact",
        "/treatments",
        "/gallery",
        "/case-studies",
        "/second-opinion",
        "/admin",
        "/home-2",
        "/home-3",
        "/services/varicose-veins-treatment",
        "/services/simple-and-complex-av-fistula",
        "/services/peripheral-arterial-disease",
        "/services/endovascular-procedures",
        "/services/deep-vein-thrombosis",
        "/services/diabetic-foot-care",
        "/services/limb-salvage-procedures",
        "/services/trauma-and-emergency-procedures",
      ],
      crawlLinks: true,
      ignore: ["/api"],
    },
  },
});