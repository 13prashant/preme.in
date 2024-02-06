import { BottomBorder } from "../ui";

export default function Featured() {
  return (
    <section className="bg-gray-100 dark:bg-zinc-950">
      <div className="preme-container flex flex-col gap-5 md:flex-row justify-center items-center duration-300">
        <div className="">
          <video width="500" controls autoPlay muted preload="none">
            <source src="/assets/top-music-awards.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <div className="relative w-fit">
            <h1 className="relative text-xl md:text-2xl font-semibold z-10 duration-300">
              Best Independent Lyricist
            </h1>
            <BottomBorder className="-mt-2" />
          </div>
          <h6 className="relative text-gray-700 md:text-xl z-10 duration-300">
            at Top Music Awards, Season 2
          </h6>
        </div>
      </div>
    </section>
  );
}
