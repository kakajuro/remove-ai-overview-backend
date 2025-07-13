"use client";

import { BlurFade } from "@/components/magicui/blur-fade";

export function DownloadSection() {
  return (
    <BlurFade direction="up" delay={5}>
      <h2 className="mt-24 mb-20 text-3xl font-bold hover:cursor-pointer">Install</h2>
    </BlurFade>
  );
}
