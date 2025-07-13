import { TypingAnimation } from "@/components/magicui/typing-animation";

export function HeroText() {
  return (
    <div className="flex select-none">
      <TypingAnimation>Because sometimes you&nbsp;</TypingAnimation>
      <TypingAnimation className="bg-gradient-to-tl from-blue-800 to-red-500 text-transparent bg-clip-text" delay={3000}>don't&nbsp;</TypingAnimation>
      <TypingAnimation delay={1200}>want AI search results&nbsp;</TypingAnimation>
      <TypingAnimation delay={4000}>:/</TypingAnimation>
    </div>
  );
}
