import { Button } from "@mui/material";
import React from "react";
import FilterListAltIcon from "@mui/icons-material/FilterListAlt";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CarCards from "./CarCards";
const FilterSection = () => {

  const [age, setAge] = React.useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div className="w-full pt-8">
      <div className=" flex justify-between items-center">
        <Button
          type="submit"
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
          <Select value={age} onChange={handleChange}>

            <MenuItem value={10}>SORT BY LATEST</MenuItem>
            <MenuItem value={20}>SORT BY LATEST</MenuItem>
            <MenuItem value={30}>SORT BY PRICE LOW TO HIGH</MenuItem>
            <MenuItem value={30}>SORT BY PRICE HIGH TO LOW</MenuItem>

          </Select>
        </FormControl>
      </div>

      <div className="w-full pt-6
       grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
       lg:grid-cols-3 
       xl:grid-cols-3
       2xl:grid-cols-4
       3xl:grid-cols-5
        gap-4">
     {
      [1,2,3,4,5].map((item)=>{
        return <CarCards key={item}/>
      })
     }
      </div>
    </div>
  );

};

export default FilterSection;
