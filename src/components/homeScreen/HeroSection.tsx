import React from "react";

interface HeroSectionProps {
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/homeIcons/heroImg.jpg")' }}
    >
      {children}
    </div>
  );
};

export default HeroSection;
