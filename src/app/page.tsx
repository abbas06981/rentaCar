import { HeroSection, SearchSection } from "@/components/screens/homeScreen";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HeroSection>
        <SearchSection />
      </HeroSection>
    </div>
  );
}
