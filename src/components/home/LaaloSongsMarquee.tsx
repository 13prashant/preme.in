"use client";

import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function LaaloSongsMarquee() {
  const getYoutubeThumbnail = (id: string) => {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  const images = [
    getYoutubeThumbnail("cgDf9PV-Moo"),
    getYoutubeThumbnail("8KAZDi0bREw"),
    getYoutubeThumbnail("lzs8PQuwXcI"),
    getYoutubeThumbnail("3Y4-VQsBYSw"),
    getYoutubeThumbnail("EC4lexrR5YQ"),
    getYoutubeThumbnail("8KAZDi0bREw"),
    getYoutubeThumbnail("cgDf9PV-Moo"),
    getYoutubeThumbnail("3Y4-VQsBYSw"),
    getYoutubeThumbnail("lzs8PQuwXcI"),
    getYoutubeThumbnail("EC4lexrR5YQ"),
    getYoutubeThumbnail("cgDf9PV-Moo"),
    getYoutubeThumbnail("8KAZDi0bREw"),
    getYoutubeThumbnail("lzs8PQuwXcI"),
    getYoutubeThumbnail("3Y4-VQsBYSw"),
    getYoutubeThumbnail("EC4lexrR5YQ"),
    getYoutubeThumbnail("cgDf9PV-Moo"),
    getYoutubeThumbnail("8KAZDi0bREw"),
    getYoutubeThumbnail("3Y4-VQsBYSw"),
    getYoutubeThumbnail("EC4lexrR5YQ"),
    getYoutubeThumbnail("lzs8PQuwXcI"),
  ];

  return (
    <div className="mx-auto max-w-full h-full">
      <div className="absolute inset-0 z-10 h-full w-full bg-gray-100/80 dark:bg-zinc-950/90" />
      <ThreeDMarquee
        images={[...images, ...images, ...images, ...images, ...images]}
      />
    </div>
  );
}
