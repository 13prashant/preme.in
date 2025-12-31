"use client";

import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";
import LaaloSongsCarousel from "./LaaloSongsCarousel";

export default function RecentNews() {
  const { windowSize } = useWindowSize();

  return (
    <section className="bg-gray-100 dark:bg-zinc-950 border-y border-y-gray-500 overflow-x-auto">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={windowSize.width}
        height={windowSize.height}
      />

      <div className="preme-container md:pb-36 md:pt-16 flex flex-col gap-10 items-center justify-center duration-300">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-center text-2xl font-extralight">
            Hear from the Songwriter of the
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold -mb-4 text-gray-500">
            Divine Blockbuster
          </h3>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">
            Laalo – Krishna Sada Sahaayate
          </h3>
        </div>

        <div className="relative h-60 md:h-[600px] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/DR1SP84k918?si=CLtLI3665y2OL0ub"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* <div className="flex flex-col md:flex-row md:gap-10 items-center">
          <div className="relative h-80 w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/MwGX-VY27go"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <LaaloSongsCarousel />
        </div> */}
        <LaaloSongsCarousel />
      </div>
    </section>
  );
}
