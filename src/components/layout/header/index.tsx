"use client";

import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Header = () => {
  const [language, setLanguage] = React.useState("en");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="w-full flex justify-end bg-black text-white px-8 py-3 items-center shadow-md">
      <div className="flex gap-4 justify-start items-center">
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            minWidth: 120,
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }}
        >
          <Select
            value={language}
            onChange={handleChange}
            disableUnderline
            sx={{
              color: "white",
              backgroundColor: "#d37a2e",
              px: 2,
              py: 0.5,
              minWidth: {
                xs: "150px",
                sm: "200px",
                md: "200px",
              },
              borderRadius: "10px",
              boxShadow: "none",
              outline: "none",
              border: "none",
              "&:hover": {
                border: "none",
                outline: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="en">ENG </MenuItem>
            <MenuItem value="it">GRE </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Header;
