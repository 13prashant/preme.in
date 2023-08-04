import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { DEVELOPER_WEBSITE_URL } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="container mx-auto px-3 py-7">
      <div className="flex flex-col gap-2">
        <Logo size="sm" />
        <SocialLinks size={20} />
      </div>
      <hr className="my-3" />
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-end text-gray-500 text-sm">
        <div className="">
          <p className="mb-1">
            Copyright © {new Date().getFullYear()} Prem Dave. All rights
            reserved.
          </p>
          <Link className="hover:text-yellow-400 duration-300" href="/">
            Terms of Use
          </Link>
          <span> | </span>
          <Link className="hover:text-yellow-400 duration-300" href="/">
            Privacy Policy
          </Link>
        </div>
        <p className="">
          Made with <span className="text-yellow-400">&hearts;</span> by{" "}
          <Link
            className="underline hover:text-yellow-400 duration-300"
            href={DEVELOPER_WEBSITE_URL}
            target="_blank"
          >
            Prashant
          </Link>
        </p>
      </div>
    </footer>
  );
}
