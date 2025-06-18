"use client";

import React from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const Header = () => {
  const [language, setLanguage] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="w-full flex justify-end bg-white text-black px-8 py-3 items-center shadow-md">
      <div className="flex gap-4 justify-start items-center ">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={language}
            onChange={handleChange}
            sx={{ color: "black" }}
          >
            <MenuItem value="10">Eng</MenuItem>
            <MenuItem value="20">Italian</MenuItem>
          </Select>
        </FormControl>

        <Button>
          <MenuSharpIcon sx={{ color: "#F58220", fontSize: 35 }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
