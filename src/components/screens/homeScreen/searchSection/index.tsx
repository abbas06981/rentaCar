"use client";

import React from "react";
import MakeABooking from "./MakeABookingTab";

import Box from "@mui/material/Box";

const Index = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-[#d37a2e] sm:w-[80%]   w-[95%] mt-32 rounded-xl p-1">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ p: 2 }}>
            <MakeABooking />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Index;
