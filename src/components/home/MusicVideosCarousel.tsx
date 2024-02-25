import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { youtubeVideos } from "./helpers";

export default function MusicVideosCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {youtubeVideos.map(({ id, link, alt, image }) => (
          <CarouselItem
            key={id}
            className="basis-10/12 xs:basis-1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link href={link} target="_blank">
              <div className="relative h-44 w-full md:h-56 hover:scale-105 duration-300">
                <Image className="object-contain" src={image} fill alt={alt} />
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  );
}
