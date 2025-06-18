"use client";

import Link from "next/link";
import React from "react";
import BookingSteps from "./bookingSteps";
import FormTabs from "./formTabs";
import FilterSection from "./filters";

const Index = () => {
  return (
    <div className="w-full  px-2 xs:px-2 sm:px-8 py-6">
      <div className="w-full flex text-[18px] font-medium ">
        <Link href="/" className="pr-1 text-[#F58220] hover:text-[#f9b916]">
          Home
        </Link>
        <span className="pr-1 text-[#16385c]">/</span>
        <span className="pr-1 text-[#16385c] ">Explore Vehicles</span>
      </div>
      <h1 className=" py-5 font-bold text-2xl text-[#004d99]">
        Explore Vehicles
      </h1>
      <BookingSteps />
      <FormTabs />
      <FilterSection />
    </div>
  );
};

export default Index;
