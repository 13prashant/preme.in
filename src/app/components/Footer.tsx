import Link from "next/link";
import { PRASHANT_WEBSITE_URL } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="container mx-auto px-3 py-7">
      <hr />
      <p className="mt-3 text-gray-500">
        Made with <span className="text-yellow-400">&hearts;</span> by{" "}
        <Link
          className="underline hover:text-yellow-400 duration-300"
          href={PRASHANT_WEBSITE_URL}
          target="_blank"
        >
          Prashant
        </Link>
      </p>
    </footer>
  );
}
