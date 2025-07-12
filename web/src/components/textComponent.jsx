"use client";

import { TextAnimate } from "@/components/magicui/text-animate";

export function TextComponent() {
  return (
    <TextAnimate animation="blurIn" as="h1">
      Blur in text
    </TextAnimate>
  );
}
