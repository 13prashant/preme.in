import MusicVideosCarousel from "./MusicVideosCarousel";

export default function MusicSection() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-3 py-10 md:py-20 duration-300">
        <h2 className="mb-5 text-center text-2xl font-extralight">
          Melodic tales penned by me
        </h2>
        <MusicVideosCarousel />
      </div>
    </section>
  );
}