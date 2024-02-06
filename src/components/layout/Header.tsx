"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared";

const menus = [
  // {
  //   id: 0,
  //   name: "About",
  //   href: "/",
  // },
  {
    id: 1,
    name: "Blog / Article / Story / Poem",
    href: "/blogs",
  },
  // {
  //   id: 2,
  //   name: "Music",
  //   href: "/",
  // },
];

export default function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <header className="dark:bg-black">
      <div className="preme-container flex flex-col gap-1 justify-between md:flex-row md:items-center">
        <div>
          <Logo className={`${isHomePage ? "md:hidden" : ""}`} />
        </div>
        <div className="flex items-center">
          <span className="md:hidden">/</span>
          <nav className="flex gap-3 md:gap-7">
            {menus.map((item) => (
              <Link
                className="font-bold text-gray-700 hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
                key={item.id}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
