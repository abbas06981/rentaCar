import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const FormTabs = () => {
  const [value, setValue] = React.useState("Booking Information");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="bg-white pt-5">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label="Booking Information"
            value="Booking Information"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              color:
                value === "Booking Information" ? "primary.main" : "grey.600",
              "&.Mui-selected": {
                color: "primary.main",
              },
            }}
          />
          <Tab
            label="Booking Includes"
            value="Booking Includes"
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              color: value === "Booking Includes" ? "primary.main" : "grey.600",
              "&.Mui-selected": {
                color: "primary.main",
              },
            }}
          />
        </Tabs>
        <Box sx={{ p: 2 }}></Box>
      </Box>
    </div>
  );
};

export default FormTabs;
