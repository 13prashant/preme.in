import Link from "next/link";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { INSTAGRAM_URL, FACEBOOK_URL, TWITTER_URL } from "@/utils/constants";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-3 py-7 duration-300">
      <div className="flex flex-col gap-5 md:flex-row-reverse md:items-center md:max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="flex gap-3">
            <div className="relative h-24 w-1/2 md:h-44">
              <Image
                style={{ objectFit: "cover" }}
                src="https://images.pexels.com/photos/7322031/pexels-photo-7322031.jpeg"
                alt="Prem Dave"
                fill
              />
            </div>
            <div className="relative h-24 w-1/2 md:h-44">
              <Image
                style={{ objectFit: "cover" }}
                src="https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg"
                alt="Prem Dave"
                fill
              />
            </div>
          </div>
          <div className="relative h-56 w-full md:h-80">
            <Image
              style={{ objectFit: "cover" }}
              src="https://images.pexels.com/photos/3091193/pexels-photo-3091193.jpeg"
              alt="Prem Dave"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end md:w-1/2">
          <div className="relative">
            <h1 className="relative font-zeyada text-6xl hidden md:block">
              Prem Dave
            </h1>
            <div className="absolute top-7 bg-yellow-400 h-1/3  w-full -rotate-3 -z-10" />
          </div>
          <p className="text-gray-500 md:text-right">
            Blending the power of words, the art of law, and the magic of
            melodies. Explore captivating stories, insightful legal articles,
            and soul-stirring music. <br />
            Step into a world where creativity meets expertise, and discover the
            captivating journey of a multifaceted artist.
          </p>
          <div className="flex gap-4">
            <Link href={INSTAGRAM_URL}>
              <BsInstagram size={30} />
            </Link>
            <Link href={FACEBOOK_URL}>
              <BsFacebook size={30} />
            </Link>
            <Link href={TWITTER_URL}>
              <BsTwitter size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
