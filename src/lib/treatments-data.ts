import { HeartPulse, Droplets, Stethoscope, Syringe } from "lucide-react";

export type ServiceItem = {
  slug: string;
  name: string;
  summary: string;
  overview: string;
  symptoms: string[];
  approach: string[];
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: typeof HeartPulse;
  short: string;
  items: ServiceItem[];
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const mk = (name: string, summary: string): ServiceItem => ({
  slug: slugify(name),
  name,
  summary,
  overview: `${name} is treated at Ignite Vascular Center using the latest minimally invasive techniques, guided by advanced imaging and personalized to each patient's condition.`,
  symptoms: [
    "Pain, swelling or discomfort in the affected area",
    "Skin changes, discoloration or non-healing wounds",
    "Reduced mobility or function",
    "Sudden onset of symptoms requiring urgent evaluation",
  ],
  approach: [
    "Detailed clinical evaluation & vascular imaging",
    "Personalized minimally invasive treatment plan",
    "Same-day discharge for most procedures",
    "Structured follow-up and long-term care",
  ],
});

export const CATEGORIES: ServiceCategory[] = [
  {
    id: "arterial",
    title: "Arterial diseases",
    icon: HeartPulse,
    short: "Care for blocked, narrowed or diseased arteries.",
    items: [
      "Acute limb ischemia", "Chronic limb ischemia", "Gangrene", "Non healing ulcer",
      "Diabetic foot ulcers", "Thrombolysis", "Thrombectomy", "Hybrid procedures",
      "Angioplasty and stenting", "Vasculitis", "Aneurysms", "Pseudo aneurysms",
      "Ruptured pseudo aneurysms",
    ].map((n) => mk(n, "Advanced arterial care for improved circulation and limb preservation.")),
  },
  {
    id: "venous",
    title: "Venous diseases",
    icon: Droplets,
    short: "Minimally invasive solutions for veins, clots and ulcers.",
    items: [
      "Varicose veins", "Venous ulcers", "DVT", "Catheter directed thrombolysis",
      "Venous thrombectomy", "Post thrombotic syndrome", "Venoplasty and stenting",
      "May thurner syndrome", "IVC filter", "Venous aneurysms",
    ].map((n) => mk(n, "Modern venous care with laser, RFA and endovascular techniques.")),
  },
  {
    id: "av-access",
    title: "AV access & dialysis",
    icon: Stethoscope,
    short: "Creation, maintenance and salvage of dialysis access.",
    items: [
      "Radio cephalic fistula", "Brachio cephalic fistula", "Brachio basilic fistula",
      "Upper limb AV graft", "Chest loop AV graft", "Lower limb AV graft",
      "Complicated AV access", "Fistula salvage", "Fistuloplasty",
      "Central vein stenosis", "Fistula ligation", "Ruptured fistula",
    ].map((n) => mk(n, "Reliable dialysis access designed for longevity and comfort.")),
  },
  {
    id: "central-line",
    title: "Central line access",
    icon: Syringe,
    short: "Safe central venous catheters and ports for therapy.",
    items: [
      "Hickman line", "PICC line", "Chemoport insertion",
    ].map((n) => mk(n, "Precision-placed central access for chemotherapy and long-term therapy.")),
  },
];

export const ALL_SERVICES: (ServiceItem & { categoryId: string; categoryTitle: string })[] =
  CATEGORIES.flatMap((c) =>
    c.items.map((it) => ({ ...it, categoryId: c.id, categoryTitle: c.title }))
  );

export function findService(slug: string) {
  return ALL_SERVICES.find((s) => s.slug === slug);
}
