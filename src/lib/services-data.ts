import {
  Waves, HeartPulse, Syringe, Activity, Footprints, ShieldPlus, Siren, Droplets,
} from "lucide-react";
import { resolveAssetUrl } from "@/lib/asset-url";
import avFistulaAsset from "@/assets/service-avfistula.png";
import varicoseAsset from "@/assets/service-varicose.png.asset.json";
import padAsset from "@/assets/service-pad.png.asset.json";
import endoAsset from "@/assets/service-endo.webp.asset.json";
import dvtAsset from "@/assets/service-dvt.png.asset.json";
import diabeticAsset from "@/assets/service-diabetic.png.asset.json";
import limbAsset from "@/assets/service-limb.png.asset.json";

const varicoseImg = resolveAssetUrl(varicoseAsset.url);
const padImg = resolveAssetUrl(padAsset.url);
const endoImg = resolveAssetUrl(endoAsset.url);
const dvtImg = resolveAssetUrl(dvtAsset.url);
const diabeticImg = resolveAssetUrl(diabeticAsset.url);
const limbImg = resolveAssetUrl(limbAsset.url);

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
    quickFacts: {
      duration: "45–90 minutes per leg",
      anesthesia: "Local with tumescent",
      hospitalStay: "Day-care (walk-in / walk-out)",
      recoveryTime: "24–48 hours to routine activity",
      suitability: "Adults with symptomatic varicose veins, venous reflux on duplex, or skin changes",
      whatToExpect: "Ultrasound mapping, gentle numbing, laser/RF ablation through a pinhole, and same-day discharge with compression stockings.",
    },
    faqs: [
      { q: "Is laser treatment painful?", a: "The procedure is done under local anaesthesia; most patients only feel mild pressure. Post-procedure soreness is minimal and controlled with paracetamol." },
      { q: "Will the veins come back?", a: "Recurrence with modern EVLA / RFA is under 5% at 5 years, significantly lower than with older stripping surgery." },
      { q: "How soon can I go back to work?", a: "Most patients return to office work the next day and to full activity within 3–5 days." },
      { q: "Do I need to wear stockings after treatment?", a: "Yes, medical-grade compression stockings for about 2 weeks help healing and improve comfort." },
      { q: "Is the treatment covered by insurance?", a: "Symptomatic varicose vein treatment is covered by most health insurance policies. Our team helps with pre-authorisation." },
    ],
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
    quickFacts: {
      duration: "1–2 hours (angioplasty)",
      anesthesia: "Local sedation; general for bypass",
      hospitalStay: "1 night (endovascular) / 3–5 days (bypass)",
      recoveryTime: "1–2 weeks for endovascular",
      suitability: "Adults with claudication, rest pain, non-healing wounds, or diagnosed arterial blockage",
      whatToExpect: "Doppler and angiogram, catheter access through the groin, balloon and/or stent to reopen the artery, and next-day discharge.",
    },
    faqs: [
      { q: "How do I know if I have PAD?", a: "Pain while walking that goes away with rest, cold feet, or non-healing wounds are classic clues. A simple ankle-brachial index test confirms it." },
      { q: "Is angioplasty a permanent fix?", a: "Modern drug-eluting stents and balloons have excellent long-term patency, but controlling diabetes, BP and cholesterol is essential." },
      { q: "Will I need a stent?", a: "Not always. Balloon angioplasty alone works in many cases; stents are used only when needed for optimal results." },
      { q: "Can PAD lead to amputation?", a: "Untreated advanced PAD can cause gangrene and limb loss, which is why early diagnosis and revascularisation are critical." },
      { q: "How long is the recovery?", a: "Most endovascular patients walk the same evening and go home the next morning; bypass patients recover over 4–6 weeks." },
    ],
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
    quickFacts: {
      duration: "1–3 hours (varies by procedure)",
      anesthesia: "Local + sedation",
      hospitalStay: "1–2 nights",
      recoveryTime: "3–5 days to routine activity",
      suitability: "Patients needing aneurysm repair, blockage treatment, malformation embolisation, or failing dialysis access",
      whatToExpect: "Pinhole catheter access under imaging, targeted stent/angioplasty/embolisation, and closure without stitches.",
    },
    faqs: [
      { q: "How is this different from open surgery?", a: "Endovascular procedures use tiny catheter access instead of large cuts, meaning less pain, lower blood loss and a much faster recovery." },
      { q: "Am I awake during the procedure?", a: "Most cases are done under local anaesthesia with light sedation; you're comfortable but not asleep unless required." },
      { q: "Are the results as durable as open surgery?", a: "For most vascular problems today, endovascular results match or exceed open surgery when performed by an experienced team." },
      { q: "Is there radiation exposure?", a: "Modern C-arm systems deliver a very low, ALARA-optimised dose. The clinical benefit far outweighs the minimal exposure." },
      { q: "When can I fly or travel?", a: "Short-haul travel is usually safe after 1 week; long-haul flights after 2–4 weeks depending on the procedure." },
    ],
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
    quickFacts: {
      duration: "30–120 minutes (imaging + intervention)",
      anesthesia: "Local, sedation if thrombolysis",
      hospitalStay: "1–3 nights",
      recoveryTime: "1–2 weeks; anticoagulants for 3–6 months",
      suitability: "Sudden leg swelling, calf pain, post-surgery / long-immobility patients, or confirmed DVT on ultrasound",
      whatToExpect: "Fast-track duplex scan, blood-thinner start, and — for extensive clots — catheter-directed clot removal in the cath-lab.",
    },
    faqs: [
      { q: "Is DVT life-threatening?", a: "Untreated DVT can cause a pulmonary embolism which is potentially fatal. Prompt treatment nearly eliminates this risk." },
      { q: "How long will I need blood thinners?", a: "Typically 3–6 months; longer if the clot recurs or an underlying risk factor persists." },
      { q: "Can I fly with DVT?", a: "Avoid flights until treatment is established and your doctor clears you, usually after 2–4 weeks of stable anticoagulation." },
      { q: "Will the swelling go away?", a: "Most swelling settles within weeks. Compression stockings and staying active help prevent post-thrombotic syndrome." },
      { q: "Can DVT come back?", a: "Recurrence risk exists, especially with genetic clotting disorders. Regular follow-up and lifestyle changes reduce it significantly." },
    ],
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
    quickFacts: {
      duration: "Ongoing programme (weekly reviews)",
      anesthesia: "As required for debridement / revascularisation",
      hospitalStay: "OPD-based; admission if severe infection",
      recoveryTime: "4–12 weeks to full wound healing",
      suitability: "Diabetic patients with foot ulcers, infections, numbness, or previous amputation risk",
      whatToExpect: "Circulation check, wound cleaning and dressings, targeted antibiotics, offloading footwear, and structured follow-up.",
    },
    faqs: [
      { q: "Can amputation always be avoided?", a: "Early treatment saves the vast majority of feet. Success depends on how early you present and control of blood sugar." },
      { q: "How often should I visit for dressings?", a: "In the active phase, weekly reviews are common. As the wound heals, visits reduce to fortnightly or monthly." },
      { q: "Do I need special footwear?", a: "Yes, customised offloading footwear protects the wound and prevents recurrence — it is a key part of the treatment." },
      { q: "Will insurance cover diabetic foot care?", a: "Most policies cover admissions for infection, debridement and revascularisation. Our team assists with claims." },
      { q: "How do I prevent future ulcers?", a: "Daily foot inspection, well-fitting shoes, tight glucose control and periodic vascular review are the four pillars of prevention." },
    ],
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
    quickFacts: {
      duration: "2–5 hours (hybrid procedure)",
      anesthesia: "General or regional",
      hospitalStay: "3–7 nights",
      recoveryTime: "6–12 weeks with rehabilitation",
      suitability: "Critical limb ischemia, gangrene, non-healing ulcers, or failed prior vascular treatment",
      whatToExpect: "Detailed angiography, combined endovascular + open bypass to restore flow, wound reconstruction and structured rehab.",
    },
    faqs: [
      { q: "What is the success rate of limb salvage?", a: "In experienced centres, limb salvage rates exceed 85% at 1 year for critical limb ischemia patients presenting in time." },
      { q: "Will I be able to walk normally again?", a: "With successful revascularisation, wound healing and rehab, most patients regain independent walking within 3 months." },
      { q: "Is bypass surgery risky?", a: "Modern bypass surgery is very safe in specialised centres. Risks are individualised and discussed thoroughly before consent." },
      { q: "How long is the hospital stay?", a: "Typically 3–7 days, depending on wound status, infection control and mobilisation." },
      { q: "What happens if the bypass blocks later?", a: "Regular duplex surveillance detects narrowing early so angioplasty or a redo can maintain the graft long-term." },
    ],
  },
  {
    slug: "trauma-and-emergency-procedures",
    title: "Trauma & Emergency Procedures",
    short: "24/7 rapid response for vascular trauma and life-threatening emergencies.",
    icon: Siren,
    image: limbImg,
    cat: "surgeries",
    overview:
      "Vascular trauma and emergencies — from road accidents to ruptured aneurysms and acute limb ischemia — need immediate expert intervention. Our team offers round-the-clock rapid response with hybrid endovascular and open surgical capabilities to save lives and limbs.",
    symptoms: [
      "Severe bleeding from an injury",
      "Sudden cold, pale or painful limb",
      "Pulsatile swelling after trauma",
      "Penetrating neck, chest or limb injury",
      "Suspected ruptured aneurysm (severe back/abdominal pain, collapse)",
    ],
    procedure: [
      "Rapid triage and imaging (CT angiogram / doppler)",
      "Damage control resuscitation",
      "Emergency embolization for active bleeding",
      "Open vascular repair or interposition graft",
      "Endovascular stent-graft for ruptured aneurysms",
      "Fasciotomy for compartment syndrome when needed",
    ],
    benefits: [
      "Rapid bleeding control and hemodynamic stabilization",
      "Higher limb salvage rates after trauma",
      "Reduced mortality in ruptured aneurysms",
      "Hybrid theatre — endovascular + open in one setting",
    ],
    recovery: "ICU stay of 1–3 days is common; overall hospital stay depends on injury severity. Rehab and follow-up are structured after discharge.",
    quickFacts: {
      duration: "1–4 hours (emergency setting)",
      anesthesia: "General or regional",
      hospitalStay: "3–10 nights depending on severity",
      recoveryTime: "2–8 weeks with rehabilitation",
      suitability: "Vascular trauma, active bleeding, acute limb ischemia, ruptured aneurysms, iatrogenic vessel injury",
      whatToExpect: "Immediate assessment, urgent imaging, and emergency endovascular or open repair to stop bleeding and restore blood flow.",
    },
    faqs: [
      { q: "Do you offer 24/7 emergency vascular care?", a: "Yes. Our vascular team is available round-the-clock for trauma, acute limb ischemia and ruptured aneurysm emergencies." },
      { q: "What should I do if there is severe bleeding after an injury?", a: "Apply firm direct pressure with a clean cloth, elevate the limb if possible, and call emergency services immediately. Do not remove any impaled objects." },
      { q: "Can a ruptured aneurysm be treated without open surgery?", a: "In many cases yes — an emergency endovascular stent-graft (EVAR/TEVAR) can seal the rupture with much lower risk than open repair." },
      { q: "How is acute limb ischemia treated?", a: "Time is critical. Depending on the cause we perform urgent thrombectomy, thrombolysis, embolectomy or bypass to restore flow within hours." },
      { q: "What is compartment syndrome and why does it need surgery?", a: "Swelling inside a limb after trauma or reperfusion can cut off circulation. A fasciotomy releases the pressure and prevents permanent muscle and nerve damage." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
