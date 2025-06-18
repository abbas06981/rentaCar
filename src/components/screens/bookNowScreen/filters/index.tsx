"use client";

import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import CarCards from "./CarCards";
import { carFilterConfig } from "./config";
import type { StaticImageData } from "next/image";

export interface CarCardProps {
  carName: string;
  carImage: string | StaticImageData;
  carClass: string;
  fuelType: string;
  doors: number;
  people: number;
  bags: number;
  isAC: boolean;
  priceDesk: number;
  priceOnline: number;
}

const FilterSection: React.FC = () => {
  const [sortOption, setSortOption] = React.useState<string>("latest");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSortOption(event.target.value);
  };

  const sortedCars = React.useMemo(() => {
    const sorted = [...carFilterConfig];
    switch (sortOption) {
      case "priceLow":
        return sorted.sort(
          (a, b) => a.bookingPrice.online - b.bookingPrice.online
        );
      case "priceHigh":
        return sorted.sort(
          (a, b) => b.bookingPrice.online - a.bookingPrice.online
        );
      case "latest":
      default:
        return sorted.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }
  }, [sortOption]);

  return (
    <div className="w-full pt-8">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <FormControl
          variant="outlined"
          size="small"
          sx={{
            width: {
              xs: "180px",
              sm: "230px",
              md: "300px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              "& fieldset": {
                borderColor: "#F58220",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#F58220",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#F58220",
              },
            },
            "& .MuiSelect-outlined": {
              color: "#004d99",
            },
          }}
        >
          <Select value={sortOption} onChange={handleChange}>
            <MenuItem value="latest">SORT BY LATEST</MenuItem>
            <MenuItem value="priceLow">SORT BY PRICE LOW TO HIGH</MenuItem>
            <MenuItem value="priceHigh">SORT BY PRICE HIGH TO LOW</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Card Grid */}
      <div
        className="w-full pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-3 xl:grid-cols-3 gap-8"
      >
        {sortedCars.map((item, index: number) => {
          const mappedItem: CarCardProps = {
            carName: item.carName,
            carImage: item.carImage,
            carClass: item.carClass,
            fuelType: item.fuelType,
            doors: item.doors,
            people: item.personCary,
            bags: item.bagCary,
            isAC: item.IsAc,
            priceDesk: item.bookingPrice.onDesk,
            priceOnline: item.bookingPrice.online,
          };
          return (
            <div key={index} className="w-full">
              <CarCards item={mappedItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSection;
