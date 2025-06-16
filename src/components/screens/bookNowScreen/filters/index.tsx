import React from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";
import CarCards from "./CarCards";
import { carFilterConfig } from "./config";

const FilterSection = () => {
  const [sortOption, setSortOption] = React.useState("latest");

  const handleChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="w-full pt-8">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: "999px",
            px: 5,
            py: 1,
            borderWidth: "2px",
            fontWeight: "bold",
            color: "#004d99",
            borderColor: "#004d99",
            textTransform: "none",
            whiteSpace: "nowrap",
          }}
          startIcon={<FilterListAltIcon />}
        >
          FILTERS
        </Button>

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
                borderColor: "#004d99",
                borderWidth: "2px",
              },
              "&:hover fieldset": {
                borderColor: "#003366",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#002244",
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
        lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4"
      >
        {carFilterConfig.map((item, index: number) => (
          <div key={index}>
            <CarCards items={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
