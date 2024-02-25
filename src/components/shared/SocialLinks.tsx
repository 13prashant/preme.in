import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { INSTAGRAM_URL, FACEBOOK_URL, TWITTER_URL } from "@/lib/constants";

interface Props {
  size?: number;
}

export default function SocialLinks({ size = 30 }: Props) {
  return (
    <div className="flex gap-4">
      <Link href={INSTAGRAM_URL} target="_blank">
        <BsInstagram
          className="hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
          size={size}
        />
      </Link>
      <Link href={FACEBOOK_URL} target="_blank">
        <BsFacebook
          className="hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
          size={size}
        />
      </Link>
      <Link href={TWITTER_URL} target="_blank">
        <BsTwitter
          className="hover:text-yellow-400 dark:hover:text-yellow-700 duration-300"
          size={size}
        />
      </Link>
    </div>
  );
}
