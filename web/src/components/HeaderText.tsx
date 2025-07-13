import { BlurFade } from "@/components/magicui/blur-fade";

export function HeaderText() {
  return (
    <BlurFade className="pt-6 pb-2 select-none" direction="up">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-jost">Remove AI Overview</h1>
    </BlurFade>
  );
}
