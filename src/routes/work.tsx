import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SelectedArchives } from "@/components/sections/SelectedArchives";
import { LivingArchive } from "@/components/sections/LivingArchive";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Vaibhavi Dahiwal" },
      { name: "description", content: "Selected archives and the living archive of works by Vaibhavi Dahiwal." },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <main>
      <PageHero kicker="कार्य" title="The Work" subtitle="A curated selection of drawings, paintings and devotional studies — each piece a meditation in slow, deliberate making." />
      <SelectedArchives />
      <LivingArchive />
    </main>
  );
}