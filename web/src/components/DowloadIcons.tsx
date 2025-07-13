import { BlurFade } from "@/components/magicui/blur-fade";
import { FaChrome, FaFirefoxBrowser, FaEdge } from "react-icons/fa";

export function DownloadIcons() {
  return (
    <div className="flex flex-row justify-between mt-8 w-full sm:w-[80%] md:w-[60%] lg:w-[40%]">
      <BlurFade direction="up">
        <a className="text-5xl hover:cursor-pointer hover:scale-105 hover:text-gray-200 transition-all ease-in-out" href="#" target="_blank">
          <FaChrome />
        </a>
      </BlurFade>
      <BlurFade direction="up" delay={0.3}>
        <a className="text-5xl hover:cursor-pointer hover:scale-105 hover:text-gray-200 transition-all ease-in-out" href="#" target="_blank">
          <FaFirefoxBrowser />
        </a>
      </BlurFade>
      <BlurFade direction="up" delay={0.6}>
        <a className="text-5xl hover:cursor-pointer hover:scale-105 hover:text-gray-200 transition-all ease-in-out" href="#" target="_blank">
          <FaEdge />
        </a>
      </BlurFade>
    </div>
  )
}
