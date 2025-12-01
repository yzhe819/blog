import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import { getThoughts } from "@/data/thought";
import { ReturnButton } from "@/components/return-button";

export const metadata = {
  title: "Thoughts",
  description: "Short thoughts, ideas, like tweets, with optional images.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function ThoughtsPage() {
  const thoughts = await getThoughts();
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex justify-start items-baseline gap-4 mb-8">
          <h1 className="font-medium text-2xl tracking-tighter">thoughts</h1>
          <span className="text-base text-muted-foreground">
            ({thoughts.length})
          </span>
        </div>
      </BlurFade>
      {thoughts
        .sort((a, b) =>
          new Date(a.metadata.createdAt) > new Date(b.metadata.createdAt)
            ? -1
            : 1
        )
        .map((thought, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={id}>
            <div className="w-full flex flex-col">
              <p className="tracking-tight whitespace-pre-line">
                {thought.metadata.summary}
              </p>
              <p className="h-6 text-xs text-muted-foreground">
                {thought.metadata.createdAt}
              </p>
            </div>
          </BlurFade>
        ))}
      <BlurFade delay={BLUR_FADE_DELAY * 2 + thoughts.length * 0.05}>
        <div className="mt-10">
          <ReturnButton />
        </div>
      </BlurFade>
    </section>
  );
}
