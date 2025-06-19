import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-6 min-h-[80px] items-center">
      <div className="w-full flex justify-between border-b-2 border-[#d37a2e] pb-5 px-8">
        <Image
          src="/homeIcons/logo3.jpg"
          alt="logo"
          width={250}
          height={230}
          objectFit="contain"
          priority
          quality={100}
          className="rounded-2xl"
        />

        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              sx={{
                fontSize: "35px",
                color: "#fff",
                "&:hover": {
                  scale: "1.1",
                  transition: "all 0.3s ease",
                },
              }}
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{
                fontSize: "35px",
                color: "#fff",
                "&:hover": {
                  scale: "1.1",
                  transition: "all 0.3s ease",
                },
              }}
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              sx={{
                fontSize: "35px",
                color: "#fff",

                "&:hover": {
                  scale: "1.1",
                  transition: "all 0.3s ease",
                },
              }}
            />
          </a>
        </div>
      </div>
      <p className="px-8 pt-5 text-center">
        Copyright © 2025 Rent.Me.Now. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
