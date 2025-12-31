import {
  Featured,
  HeroSection,
  InstagramFeed,
  MusicSection,
  RecentNews,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <RecentNews />
      <HeroSection />
      <Featured />
      <MusicSection />
      <InstagramFeed />
    </main>
  );
}
