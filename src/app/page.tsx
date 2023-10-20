import {
  Featured,
  HeroSection,
  InstagramFeed,
  MusicSection,
} from "@/components/home";

export default function Home() {
  return (
    <main>
      <Featured />
      <HeroSection />
      <MusicSection />
      <InstagramFeed />
    </main>
  );
}
