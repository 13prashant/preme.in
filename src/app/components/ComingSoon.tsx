import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "@/utils/constants";

export default function ComingSoon() {
  return (
    <div className="h-screen flex items-center ml-8 md:ml-0 md:justify-center">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold text-gray-700">Prem Dave</h3>
        <div className="flex gap-4">
          <Link href={INSTAGRAM_URL}>
            <BsInstagram size={20} />
          </Link>
          <Link href={FACEBOOK_URL}>
            <BsFacebook size={20} />
          </Link>
          <Link href={TWITTER_URL}>
            <BsTwitter size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
