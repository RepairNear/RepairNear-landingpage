// Shared between the FAQ accordion (components/sections/faq.tsx) and the
// FAQPage JSON-LD structured data on the home page (app/page.tsx).
export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How do I book a repair?",
    answer:
      "Open the RepairNear app, tell us your device and what's wrong, then compare verified technicians near you by distance and rating. Pick a time, confirm your booking, and follow your repair with live status — from drop-off to pickup.",
  },
  {
    question: "What is RepairNear Protection?",
    answer:
      "Protection is an optional add-on for any booking. It covers dispute resolution, mediator support, and a 72-hour technician response guarantee — so you're never left stranded if a repair doesn't go to plan.",
  },
  {
    question: "How do I find a trusted technician?",
    answer:
      "Every shop on RepairNear is vetted and rated by real customers. Filter by device, distance, and rating, then check verified badges and honest reviews so you know exactly who you're booking before you commit.",
  },
  {
    question: "How do technicians get verified?",
    answer:
      "We review each technician's ID, business details, and repair skills before they go live. Verified shops carry a badge and are continuously scored on completed jobs — so the rating you see reflects real, recent work.",
  },
  {
    question: "What if I'm not satisfied with the repair?",
    answer:
      "Reach out through the app within your guarantee window. With Protection, our mediators step in to resolve the issue — including arranging a re-repair or a fair resolution, so a bad experience never has to be the end of it.",
  },
];
