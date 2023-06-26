import { youtubeVideos } from "@/utils/constants";

export default function MusicSection() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-3 py-20 duration-300">
        <h2 className="mb-12 text-center text-2xl font-extralight">
          Melodic tales penned by me
        </h2>
        <div className="grid place-items-center grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {youtubeVideos.map((link, idx) => (
            <div key={idx} className="w-full h-64 hover:scale-105 duration-500">
              <iframe
                className="shadow-[10px_10px_0px_0px_rgba(250,204,21,0.7)] items-center"
                width="100%"
                height="100%"
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
