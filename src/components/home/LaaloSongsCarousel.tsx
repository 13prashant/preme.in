"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function LaaloSongsCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {[
          "cgDf9PV-Moo",
          "8KAZDi0bREw",
          "lzs8PQuwXcI",
          "3Y4-VQsBYSw",
          "EC4lexrR5YQ",
        ].map((id) => (
          <CarouselItem
            key={id}
            className="basis-10/12 xs:basis-1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              className="relative block aspect-video w-full rounded-xl overflow-hidden group select-none cursor-grab active:cursor-grabbing"
              onDragStart={(e) => e.preventDefault()}
              draggable={false}
            >
              <Image
                src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                alt="Song Thumbnail"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
                onMouseDown={(e) => e.preventDefault()} // Prevents ghost drag issues
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-yellow-400/50 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 md:w-8 md:h-8 fill-yellow-400 text-yellow-400 ml-1" />
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
