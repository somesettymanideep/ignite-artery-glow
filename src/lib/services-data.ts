import {
  Waves, HeartPulse, Syringe, Activity, Footprints, ShieldPlus,
} from "lucide-react";
import varicoseImg from "@/assets/service-varicose.jpg";
import padImg from "@/assets/service-pad.jpg";
import endoImg from "@/assets/service-endo.jpg";
import dvtImg from "@/assets/service-dvt.jpg";
import diabeticImg from "@/assets/service-diabetic.jpg";
import limbImg from "@/assets/service-limb.jpg";

export type ServiceCategory = "treatments" | "diagnostics" | "surgeries" | "care";

export type ServiceFAQ = { q: string; a: string };
export type ServiceQuickFacts = {
  duration: string;
  anesthesia: string;
  hospitalStay: string;
  recoveryTime: string;
  suitability: string;
  whatToExpect: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: typeof Waves;
  image: string;
  cat: ServiceCategory;
  overview: string;
  symptoms: string[];
  procedure: string[];
  benefits: string[];
  recovery: string;
  quickFacts: ServiceQuickFacts;
  faqs: ServiceFAQ[];
};

export const SERVICES: Service[] = [
  {
    slug: "varicose-veins-treatment",
    title: "Varicose Veins Treatment",
    short: "Advanced laser & radiofrequency techniques for lasting relief.",
    icon: Waves,
    image: varicoseImg,
    cat: "treatments",
    overview:
      "Varicose veins are swollen, twisted veins visible under the skin, typically in the legs. Our advanced endovenous laser ablation (EVLA) and radiofrequency ablation (RFA) offer a walk-in walk-out solution with minimal downtime and excellent cosmetic outcomes.",
    symptoms: [
      "Bulging, rope-like veins in the legs",
      "Leg heaviness, aching or throbbing",
      "Swelling around the ankles",
      "Skin discoloration or itching",
      "Night cramps and restless legs",
    ],
    procedure: [
      "Detailed duplex ultrasound mapping",
      "Local anesthesia with tumescent technique",
      "Endovenous laser / RF ablation of faulty veins",
      "Foam sclerotherapy for tributaries",
      "Same-day discharge with compression stockings",
    ],
    benefits: [
      "No surgical cuts or scars",
      "Same-day discharge",
      "Immediate return to daily activities",
      "Long-lasting relief with < 5% recurrence",
    ],
    recovery: "Most patients resume work within 24–48 hours. Compression stockings for 2 weeks and follow-up at 1 month.",
  },
  {
    slug: "peripheral-arterial-disease",
    title: "Peripheral Arterial Disease (PAD)",
    short: "Effective solutions for blocked arteries and poor circulation.",
    icon: HeartPulse,
    image: padImg,
    cat: "treatments",
    overview:
      "PAD occurs when narrowed arteries reduce blood flow to the limbs. Left untreated it can cause severe pain, ulcers and even limb loss. We offer angioplasty, stenting and bypass options tailored to each patient.",
    symptoms: [
      "Leg pain while walking (claudication)",
      "Cold or numb feet",
      "Non-healing wounds on toes or feet",
      "Weak or absent pulses",
      "Colour changes in the skin",
    ],
    procedure: [
      "Arterial doppler and CT angiogram",
      "Balloon angioplasty of the blocked segment",
      "Drug-eluting stent placement if required",
      "Bypass surgery for long occlusions",
      "Risk factor optimization (diabetes, BP, lipids)",
    ],
    benefits: [
      "Restored blood flow and pain relief",
      "Wound healing and limb salvage",
      "Improved walking distance",
      "Reduced cardiovascular events",
    ],
    recovery: "Angioplasty patients go home the next day; walking typically improves within a week.",
  },
  {
    slug: "endovascular-procedures",
    title: "Endovascular Procedures",
    short: "Stent placement, angioplasty & minimally invasive care.",
    icon: Syringe,
    image: endoImg,
    cat: "surgeries",
    overview:
      "Endovascular procedures treat vascular disease from inside the blood vessel using catheters guided by imaging. They replace many traditional open surgeries with pinhole access, less pain and quicker recovery.",
    symptoms: [
      "Diagnosed arterial or venous blockage",
      "Aortic or peripheral aneurysm",
      "Recurrent DVT / venous stenosis",
      "Failing dialysis access",
      "Vascular malformations",
    ],
    procedure: [
      "High-resolution imaging with C-arm / DSA",
      "Micro-puncture arterial or venous access",
      "Angioplasty, stenting or embolization",
      "EVAR / TEVAR for aneurysms",
      "Closure device — no stitches",
    ],
    benefits: [
      "Pinhole access instead of large incisions",
      "Shorter hospital stay (1–2 days)",
      "Reduced blood loss and complications",
      "Faster return to normal life",
    ],
    recovery: "Overnight observation is usually sufficient. Normal activity resumes within 3–5 days.",
  },
  {
    slug: "deep-vein-thrombosis",
    title: "Deep Vein Thrombosis (DVT)",
    short: "Diagnosis, treatment & follow-up care.",
    icon: Activity,
    image: dvtImg,
    cat: "diagnostics",
    overview:
      "DVT is a blood clot in the deep veins of the leg that can travel to the lungs (pulmonary embolism). Prompt diagnosis with duplex ultrasound and modern catheter-directed treatment prevents long-term damage.",
    symptoms: [
      "Sudden leg swelling, usually one side",
      "Calf pain or tenderness",
      "Warmth and redness over the leg",
      "Bluish or discoloured skin",
      "Breathlessness (if PE develops)",
    ],
    procedure: [
      "Duplex ultrasound & D-dimer",
      "Anticoagulation therapy",
      "Catheter-directed thrombolysis for extensive clots",
      "Mechanical thrombectomy",
      "IVC filter in selected cases",
    ],
    benefits: [
      "Prevents pulmonary embolism",
      "Reduces post-thrombotic syndrome",
      "Preserves valve function in veins",
      "Structured long-term follow-up",
    ],
    recovery: "Most patients recover fully within weeks with continued anticoagulation for 3–6 months.",
  },
  {
    slug: "diabetic-foot-care",
    title: "Diabetic Foot Care",
    short: "Wound care, infection control & prevention.",
    icon: Footprints,
    image: diabeticImg,
    cat: "care",
    overview:
      "Diabetes affects blood flow and nerves in the feet, leading to ulcers and infections. Our multi-disciplinary programme combines revascularization, wound care and offloading to save feet and restore mobility.",
    symptoms: [
      "Non-healing foot ulcer",
      "Numbness or tingling in the feet",
      "Foot deformity or callus",
      "Infection, pus or foul smell",
      "Colour or temperature changes",
    ],
    procedure: [
      "Arterial assessment and revascularization",
      "Debridement of dead tissue",
      "Advanced dressings & VAC therapy",
      "Targeted antibiotics for infection",
      "Custom footwear and offloading",
    ],
    benefits: [
      "Wound healing without amputation",
      "Preserved mobility and independence",
      "Lower risk of recurrence",
      "Improved quality of life",
    ],
    recovery: "Wounds usually heal in 4–12 weeks depending on severity, with lifelong foot-care follow-up.",
  },
  {
    slug: "limb-salvage-procedures",
    title: "Limb Salvage Procedures",
    short: "Advanced revascularization to save limbs.",
    icon: ShieldPlus,
    image: limbImg,
    cat: "surgeries",
    overview:
      "For patients facing amputation due to critical limb ischemia, our limb salvage team combines endovascular and open bypass techniques to restore circulation and save the limb whenever possible.",
    symptoms: [
      "Rest pain in the foot or toes",
      "Gangrene or blackening of the toes",
      "Ulcers that don't heal",
      "Threat of amputation",
      "Prior failed vascular treatment",
    ],
    procedure: [
      "Detailed CT/MR angiography",
      "Hybrid endovascular + open bypass",
      "Distal target bypass surgery",
      "Wound reconstruction & plastic input",
      "Rehabilitation and gait training",
    ],
    benefits: [
      "Limb preserved and mobility restored",
      "Pain relief and wound healing",
      "Reduced dependence on caregivers",
      "Better long-term survival",
    ],
    recovery: "Hospital stay 3–7 days; wound healing and walking rehab over 6–12 weeks.",
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
