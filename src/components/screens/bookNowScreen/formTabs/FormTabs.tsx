import { Box } from "@mui/material";
import React from "react";
import BookingForm from "./BookingForm";

const FormTabs = () => {
  return (
    <Box sx={{ width: "100%", pt: 2 }}>
      {/* Tab Content */}
      <BookingForm />
    </Box>
  );
};

export default FormTabs;
