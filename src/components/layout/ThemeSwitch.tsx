"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <RiCheckboxBlankCircleFill className="relative z-20 text-xl text-gray-700 cursor-pointer" />
    );

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="relative z-20 text-xl text-gray-700 cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-700 duration-300"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="relative z-20 text-xl text-gray-700 cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-700 duration-300"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
