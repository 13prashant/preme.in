"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { youtubeVideos } from "./helpers";

export default function MusicVideosCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  const updateMedia = () => {
    setIsMobileScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia, { passive: true });
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleNextItem = () => {
    if (carouselIndex > 2) {
      setCarouselIndex(1);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const handlePrevItem = () => {
    if (carouselIndex < 2) {
      setCarouselIndex(3);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };

  return (
    <div className="z-20 flex items-center">
      <IoIosArrowBack
        onClick={() => handlePrevItem()}
        className="hidden md:block cursor-pointer"
        size={100}
      />

      <Carousel
        selectedItem={carouselIndex}
        centerMode
        centerSlidePercentage={isMobileScreen ? 60 : 33.3}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        className="w-full"
      >
        {youtubeVideos.map(({ id, link, alt, image }) => (
          <Link key={id} href={link} target="_blank">
            <div className="p-1 md:p-2 hover:scale-105 duration-300">
              <div className="relative h-44 w-full md:h-56 duration-300">
                <Image
                  style={{ objectFit: "contain" }}
                  src={image}
                  fill
                  alt={alt}
                />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <IoIosArrowForward
        onClick={() => handleNextItem()}
        className="hidden md:block cursor-pointer"
        size={100}
      />
    </div>
  );
}
