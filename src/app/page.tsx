import {HeroSection,SearchSection} from "@/components/homeScreen"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer/Index";

export default function Home() {
  return (
<div className="w-full h-full">
  <Header/>
<HeroSection>
  <SearchSection/>
</HeroSection>
<Footer/>
</div>
  );
}
