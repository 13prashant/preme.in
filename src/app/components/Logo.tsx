import React from "react";

interface Props {
  className?: string;
  size?: "sm";
}
export default function Logo({ className, size }: Props) {
  return (
    <div className={`${className} relative ${size === "sm" ? "w-28" : "w-56"}`}>
      <h1 className={`font-zeyada ${size === "sm" ? "text-3xl" : "text-6xl"}`}>
        Prem Dave
      </h1>
      <div className="absolute bottom-2 bg-yellow-400 h-1/3  w-full -rotate-3 -z-10" />
    </div>
  );
}
