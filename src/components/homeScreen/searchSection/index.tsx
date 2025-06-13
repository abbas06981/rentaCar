"use client";

import React from "react";
import MakeABooking from "./MakeABookingTab";
import MyReservation from "./MyReservation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Index = () => {
  const [value, setValue] = React.useState("MakeABooking");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-white w-[80%] mt-32 rounded-xl p-2">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // textColor="secondary"
            // indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="Make A Booking" value="MakeABooking" />
            <Tab label="My Reservation" value="MyReservation" />
          </Tabs>
          <Box sx={{ p: 2 }}>
            {value === "MakeABooking" && <MakeABooking />}
            {value === "MyReservation" && <MyReservation />}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Index;
