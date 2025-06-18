"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  //  Avatar,
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
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
     bg-white text-black px-8 py-3  items-center"
    >
      <Link href="/">
        <Image
          src="/homeIcons/logo3.jpg"
          alt="logo"
          width={200}
          height={200}
          className="rounded-2xl"
        />
      </Link>{" "}
      <div className="flex gap-4 justify-start items-center">
        {/* <Link
          href="/#"
          className="font-medium hover:text-[#f9b916] text-[16px]"
        >
          Manage Reservation
        </Link> */}

        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, color: "black" }}
          className=""
        >
          <Select sx={{ color: "" }} value={language} onChange={handleChange}>
            <MenuItem value="10">Eng</MenuItem>
            <MenuItem value="20">Italian</MenuItem>
          </Select>
        </FormControl>

        {/* <Avatar sx={{ bgcolor: "transparent", cursor: "pointer" }}>
          <AccountCircleIcon sx={{ color: "white", fontSize: 30 }} />
        </Avatar> */}
        <Button>
          <MenuSharpIcon sx={{ color: "white", fontSize: 35 }} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
