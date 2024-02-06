import {
  Featured,
  FeaturedPopup,
  HeroSection,
  InstagramFeed,
  MusicSection,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <FeaturedPopup />
      <HeroSection />
      <Featured />
      <MusicSection />
      <InstagramFeed />
    </main>
  );
}
