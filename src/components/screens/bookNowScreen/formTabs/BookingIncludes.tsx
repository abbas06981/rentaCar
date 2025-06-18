import React from "react";
import { Box } from "@mui/material";

const BookingIncludes: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        p: 2,
        backgroundColor: "#1c398e",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    ></Box>
  );
};

export default BookingIncludes;
