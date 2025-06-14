import React from "react";

interface HeroSectionProps {
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat pb-10"
      style={{ backgroundImage: 'url("/homeIcons/heroImg.jpg")' }}
    >
      {children}
    </div>
  );
};

export default HeroSection;
