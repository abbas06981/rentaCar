"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar, Button, FormControl, MenuItem, Select } from "@mui/material";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import type { SelectChangeEvent } from "@mui/material/Select";

const Header = () => {
  const [language, setLanguage] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div
      className="w-full flex justify-between
     bg-blue-900 text-white px-8 h-[80px] items-center"
    >
      <Image src="/log2.svg" alt="logo" width={150} height={100} />
      <div className="flex gap-4 justify-start items-center">
        <Link
          href="/#"
          className="font-medium hover:text-[#f9b916] text-[16px]"
        >
          Manage Reservation
        </Link>

        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120 }}
          className="text-white"
        >
          <Select
            sx={{ color: "white" }}
            value={language}
            onChange={handleChange}
          >
            <MenuItem value="10">Eng</MenuItem>
            <MenuItem value="20">Urdu</MenuItem>
          </Select>
        </FormControl>

        <Avatar sx={{ bgcolor: "transparent", cursor: "pointer" }}>
          <AccountCircleIcon sx={{ color: "white", fontSize: 30 }} />
        </Avatar>
        <Button>
          <MenuSharpIcon sx={{ color: "white", fontSize: 35 }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
