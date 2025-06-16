import React from "react";

const FilterSection = () => {
<<<<<<< Updated upstream
  return <div className="w-full">FilterSection</div>;
=======
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
            width: 300,
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
    </div>
  );
>>>>>>> Stashed changes
};

export default FilterSection;
