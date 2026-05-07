import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { StudioPractice } from "@/components/sections/StudioPractice";
import { SelectedArchives } from "@/components/sections/SelectedArchives";
import { LivingArchive } from "@/components/sections/LivingArchive";
import { Marquee } from "@/components/sections/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhavi Dahiwal — Devotional Studio Practice" },
      { name: "description", content: "Devotional drawings, portraits and studies — a slow, hand-made practice from Pune, India." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <StudioPractice />
      <Marquee text="Reverence · Patience · प्राण प्रतिष्ठा · Form" />
      <SelectedArchives />
      <LivingArchive />
    </main>
  );
}
