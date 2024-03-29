import Link from "next/link";
import { Logo, SocialLinks } from "@/components/shared";
import { DEVELOPER_WEBSITE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="dark:bg-black">
      <div className="preme-container">
        <div className="flex flex-col gap-2">
          <Logo text="Prem D Dave" size="sm" />
          <SocialLinks size={20} />
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-end text-gray-500 text-sm">
          <div className="">
            <p className="mb-1">
              Copyright © {new Date().getFullYear()} Prem Dave. All rights
              reserved.
            </p>
            <Link
              className="hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
              href="/"
            >
              Terms of Use
            </Link>
            <span> | </span>
            <Link
              className="hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
              href="/"
            >
              Privacy Policy
            </Link>
          </div>
          <p>
            Made with{" "}
            <span className="text-yellow-400 dark:text-yellow-700">
              &hearts;
            </span>{" "}
            by{" "}
            <Link
              className="underline hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
              href={DEVELOPER_WEBSITE_URL}
              target="_blank"
            >
              Prashant
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
