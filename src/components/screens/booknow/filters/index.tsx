import { Button } from "@mui/material";
import React from "react";
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
const FilterSection = () => {
  return <div className="w-full pt-8">
<div className=" flex justify-between items-center">
<Button
            type="submit"
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "999px",
              px: 5,
              py: 1,
              borderWidth:"2px",
              fontWeight: "bold",
              textTransform: "none",
              
              whiteSpace: "nowrap",
            }}
            startIcon={<FilterListAltIcon />}
          >
       FILTERS
          </Button>
</div>

    </div>;
};

export default FilterSection;
