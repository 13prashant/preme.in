import { INSTAGRAM_URL, FACEBOOK_URL, TWITTER_URL } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

interface Props {
  size?: number;
}

export default function SocialLinks({ size = 30 }: Props) {
  return (
    <div className="flex gap-4">
      <Link href={INSTAGRAM_URL}>
        <BsInstagram
          className="hover:text-yellow-400 duration-300"
          size={size}
        />
      </Link>
      <Link href={FACEBOOK_URL}>
        <BsFacebook
          className="hover:text-yellow-400 duration-300"
          size={size}
        />
      </Link>
      <Link href={TWITTER_URL}>
        <BsTwitter className="hover:text-yellow-400 duration-300" size={size} />
      </Link>
    </div>
  );
}
