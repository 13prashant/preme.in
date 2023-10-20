"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillCloseSquare } from "react-icons/ai";
import { SITE_VISIT_COUNT } from "@/utils/constants";

export default function Featured() {
  const [showPopup, setShowPopup] = useState(true);

  // useEffect(() => {
  //   const siteVisitCount = Number(localStorage.getItem(SITE_VISIT_COUNT));

  //   if (!siteVisitCount) {
  //     setShowPopup(true);

  //     localStorage.setItem(SITE_VISIT_COUNT, "1");
  //   } else {
  //     if (siteVisitCount >= 1) {
  //       setShowPopup(false);
  //     } else {
  //       setShowPopup(true);
  //     }

  //     localStorage.setItem(SITE_VISIT_COUNT, (siteVisitCount + 1).toString());
  //   }
  // }, []);

  return (
    <div
      className={`${
        showPopup ? "" : "hidden"
      } fixed z-10 w-full h-80 md:w-[35rem] md:h-80 bg-yellow-100 text-center m-2 md:m-0 p-5 shadow-xl`}
    >
      <AiFillCloseSquare
        className="text-3xl absolute top-5 right-5 cursor-pointer hover:scale-x-105 duration-300"
        onClick={() => setShowPopup(false)}
      />
      <div className="mt-8 mb-2">
        <h4 className="font-bold">Best Lyricist - Independent</h4>
        <h6 className="text-md">Top Music Awards, Season 2</h6>
      </div>
      <div className="relative w-full h-44">
        <Image
          className="object-cover"
          src="/assets/best-lyricist.png"
          alt="Best lyricist"
          fill
        />
      </div>
    </div>
  );
}
