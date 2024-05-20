import {
  Featured,
  FeaturedPopup,
  HeroSection,
  InstagramFeed,
  MusicSection,
  RecentNews,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <FeaturedPopup />
      <RecentNews />
      <HeroSection />
      <Featured />
      <MusicSection />
      <InstagramFeed />
    </main>
  );
}
