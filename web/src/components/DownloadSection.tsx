"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function DownloadSection() {
  return (
    <BlurFade direction="up" delay={5}>
      <button className="mt-24 mb-20 text-3xl font-bold hover:cursor-pointer hover:scale-105 transition-all ease-in-out">
        <a href="/install">Install</a>
      </button>
    </BlurFade>
  );
}
