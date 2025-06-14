"use client";

import Link from "next/link";
import React from "react";
import BookingSteps from "./BookingSteps";
import FormTabs from "./FormTabs";

const BookNow = () => {
  return (
    <div className="w-full px-10 py-6">
      <div className="w-full flex text-[18px] font-medium ">
        <Link href="/" className="pr-1 text-[#85c0ff] hover:text-[#f9b916]">
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
    </div>
  );
};

export default BookNow;
