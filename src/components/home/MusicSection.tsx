import MusicVideosCarousel from "./MusicVideosCarousel";

export default function MusicSection() {
  return (
    <section className="dark:bg-black">
      <div className="preme-container">
        <h2 className="mb-5 text-center text-2xl font-extralight">
          Melodic tales penned by me
        </h2>
        <MusicVideosCarousel />
      </div>
    </section>
  );
}
