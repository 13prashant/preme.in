"use client";

import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";
import LaaloSongsCarousel from "./LaaloSongsCarousel";
import { LaaloSongsMarquee } from "./LaaloSongsMarquee";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RecentNews() {
  const { windowSize } = useWindowSize();

  return (
    <section className="relative bg-gray-100 dark:bg-zinc-950 md:border-none border-y border-y-gray-500">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={windowSize.width}
        height={windowSize.height}
      />
      <div className="hidden md:block absolute inset-0 overflow-hidden z-40">
        <LaaloSongsMarquee />
      </div>

      <div className="preme-container md:pb-36 md:pt-16 flex flex-col gap-10 items-center justify-center duration-300 z-50 relative">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="dark:text-white text-center text-2xl">
            Hear from the Songwriter of the
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold -mb-4 text-gray-500">
            Divine Blockbuster
          </h3>
          <h3 className="dark:text-white text-3xl md:text-5xl font-semibold tracking-tighter">
            Laalo – Krishna Sada Sahaayate
          </h3>

          {/* Listen Hindi Versions Button */}
          <Link
            href="https://www.youtube.com/watch?v=2C3A_YtRuE4" // Hindi Versions
            target="_blank"
            className="group relative"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-2 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 text-black font-bold text-sm rounded-xl overflow-hidden shadow-lg shadow-yellow-600/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-500"
            >
              {/* Gold Biscuit Base Layer - Multiple gradients for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/50 via-transparent to-yellow-600/30" />

              {/* Metallic Sheen - Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-yellow-200/40 to-transparent" />

              {/* Subtle Shining Animation - Gold biscuit gleam */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                style={{
                  width: "50%",
                }}
              />

              {/* Subtle Pulse Effect */}
              <motion.div
                className="absolute inset-0 bg-yellow-200/0"
                animate={{
                  opacity: [0, 0.15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                Listen Hindi Versions
              </span>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-yellow-200/0 group-hover:bg-yellow-200/30 transition-colors duration-500 rounded-xl" />
            </motion.button>
          </Link>
        </div>

        <div className="relative h-60 md:h-[600px] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/DR1SP84k918?si=CLtLI3665y2OL0ub" // Podcast
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="w-full sticky bottom-0 z-[60] bg-black/30 backdrop-blur-sm py-2">
        <LaaloSongsCarousel />
      </div>
    </section>
  );
}
