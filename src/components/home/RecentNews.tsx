"use client";

import Confetti from "react-confetti";

export default function RecentNews() {
  return (
    <section className="bg-gray-100 dark:bg-zinc-950 border-y border-y-gray-500">
      <Confetti
        className="w-full h-full"
        recycle={false}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div className="preme-container md:py-36 flex flex-col md:flex-row gap-10 items-center justify-center duration-300">
        <div className="relative h-60 md:h-96 w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Ik7fVUwSCjw?si=5a_iYer8PH6Aa1yW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div>
          <h1 className="text-7xl font-extrabold font-zeyada">Kasturi</h1>
          <h3 className="text-4xl font-semibold">Out now</h3>
          <p className="text-gray-500">
            I poured my soul into the lyrics, aiming to capture the essence of a
            true Gujju romance. <br /> Every word is a piece of my heart, and I
            can’t wait for you to experience it.
          </p>
        </div>
      </div>
    </section>
  );
}
