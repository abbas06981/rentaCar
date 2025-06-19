"use client";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#2d2d2d] text-white pt-6 pb-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 px-6 pb-4">
        <Image
          src="/homeIcons/logo3.jpg"
          alt="logo"
          width={250}
          height={230}
          className="rounded-2xl mb-4 md:mb-0"
        />
        <div className="flex gap-2 mt-4 md:mt-0">
          <a
            href="#"
            className="bg-yellow-500 hover:opacity-90 text-white w-10 h-10 flex items-center justify-center rounded"
            aria-label="RSS"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6.18 17.82a2 2 0 11-2.83-2.83 2 2 0 012.83 2.83zM4 10a12 12 0 0112 12h-2a10 10 0 00-10-10V10zm0-4a16 16 0 0116 16h-2a14 14 0 00-14-14V6z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            className="bg-[#3b5998] hover:opacity-90 text-white w-10 h-10 flex items-center justify-center rounded"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com"
            className="bg-[#1da1f2] hover:opacity-90 text-white w-10 h-10 flex items-center justify-center rounded"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 001.88-2.37 8.5 8.5 0 01-2.71 1.03A4.25 4.25 0 0016.5 4c-2.35 0-4.26 1.91-4.26 4.26 0 .33.04.65.1.96-3.54-.18-6.68-1.87-8.77-4.45a4.27 4.27 0 001.32 5.7 4.22 4.22 0 01-1.93-.53v.05c0 2.01 1.43 3.69 3.32 4.07a4.3 4.3 0 01-1.92.07c.54 1.67 2.09 2.89 3.93 2.93a8.57 8.57 0 01-6.29 1.76c1.93 1.24 4.22 1.96 6.68 1.96 8.02 0 12.41-6.64 12.41-12.41 0-.19 0-.39-.01-.58A8.92 8.92 0 0024 4.59a8.7 8.7 0 01-2.54.7z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            className="bg-[#FF0000] hover:opacity-90 text-white w-10 h-10 flex items-center justify-center rounded"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.6 3.2H4.4A1.4 1.4 0 003 4.6v14.8a1.4 1.4 0 001.4 1.4h15.2a1.4 1.4 0 001.4-1.4V4.6a1.4 1.4 0 00-1.4-1.4zM10 16V8l6 4-6 4z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            className="bg-[#0077b5] hover:opacity-90 text-white w-10 h-10 flex items-center justify-center rounded"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://instagram.com"
            className="bg-[#e1306c] hover:opacity-90 text-white w-10 h-10 flex items-center justify-center rounded"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 py-3 px-4">
        Copyright © 2015-2025 rentmenow.com. All Rights Reserved. Designed by{" "}
        <span className="text-yellow-500 hover:underline cursor-pointer">
          rentmenow.com
        </span>
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded w-8 h-8 flex items-center justify-center shadow-lg"
        aria-label="Scroll to top"
      >
        <KeyboardArrowUpIcon />
      </button>
    </div>
  );
};

export default Footer;
