import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import BookingForm from "./BookingForm";
import BookingIncludes from "./BookingIncludes";

const FormTabs = () => {
  const [value, setValue] = React.useState("Booking Information");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", pt: 2 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
        textColor="inherit"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        {/* Tab 1: Booking Information */}
        <Tab
          label="Booking Information"
          value="Booking Information"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px 8px 0 0",

            color: value === "Booking Information" ? "white" : "#004d99",
            backgroundColor:
              value === "Booking Information" ? "#004d99" : "#e0f0ff",
            "&:hover": {
              backgroundColor:
                value === "Booking Information" ? "#003366" : "#d0e8ff",
            },
          }}
        />

        {/* Tab 2: Booking Includes */}
        <Tab
          label="Booking Includes"
          value="Booking Includes"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: "8px 8px 0 0",

            color: value === "Booking Includes" ? "white" : "#004d99",
            backgroundColor:
              value === "Booking Includes" ? "#429ddf" : "#d0e8ff",
            "&:hover": {
              backgroundColor:
                value === "Booking Includes" ? "#429ddf" : "#d0e8ff",
            },
          }}
        />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{}}>
        {value === "Booking Information" && <BookingForm />}
        {value === "Booking Includes" && <BookingIncludes />}
      </Box>
    </Box>
  );
};

export default FormTabs;
