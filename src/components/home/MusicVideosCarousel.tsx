"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

export default function MusicVideosCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {[
          "Ik7fVUwSCjw",
          "vXCz8Ovv7Ok",
          "VOVVl6nfSgg",
          "VWpjf1NhFr0",
          "AYpbrNpGA24",
          "3PpCs8Uznow",
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
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  );
}
