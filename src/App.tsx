import { useEffect, useState } from "react";
import { SectionEnum } from "./enum";
import { AboutScreen } from "./screens/about-screen";
import { Navbar } from "./screens/navbar";
import { PortfolioScreen } from "./screens/portfolio-screen";
import { ServiceScreen } from "./screens/service-screen";
import { Footer } from "./screens/footer";

export default function App() {
  const [selectedSection, setSelectedSection] = useState<SectionEnum>(
    SectionEnum.ABOUTME
  );
  const [isInTopScreen, setIsInTopScreen] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsInTopScreen(true);
        setSelectedSection(SectionEnum.ABOUTME);
      }
      if (window.scrollY !== 0) setIsInTopScreen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isInTopScreen={isInTopScreen}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <AboutScreen setSelectedSection={setSelectedSection} />
      <PortfolioScreen setSelectedSection={setSelectedSection} />
      <ServiceScreen setSelectedSection={setSelectedSection} />
      <Footer />
    </>
  );
}
