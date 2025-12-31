import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function LaaloSongsCarousel() {
  return (
    <Carousel
      className="w-full mt-10"
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
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  );
}
