import Image from "next/image";
import { Logo, SocialLinks } from "@/components/shared";

export default function HeroSection() {
  return (
    <section className="preme-container">
      <div className="flex flex-col gap-5 md:flex-row-reverse md:items-center md:max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 md:w-1/2">
          <div className="flex gap-3">
            <div className="relative h-24 w-1/2 md:h-44">
              <Image
                className="object-cover"
                src="/assets/prem-dave-writer.jpg"
                alt="Prem Dave"
                fill
              />
            </div>
            <div className="relative h-24 w-1/2 md:h-44">
              <Image
                className="object-cover object-top"
                src="/assets/prem-dave-lawyer.jpg"
                alt="Prem Dave"
                fill
              />
            </div>
          </div>
          <div className="relative h-56 w-full md:h-80">
            <Image
              className="object-cover"
              src="/assets/prem-dave-music.jpg"
              alt="Prem Dave"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end md:w-1/2">
          <Logo text="Prem D Dave" className="hidden md:block" />
          <p className="text-gray-500 md:text-right">
            Blending the power of words, the art of law, and the magic of
            melodies. Explore captivating stories, insightful legal articles,
            and soul-stirring music. <br />
            Step into a world where creativity meets expertise, and discover the
            captivating journey of a multifaceted artist.
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
