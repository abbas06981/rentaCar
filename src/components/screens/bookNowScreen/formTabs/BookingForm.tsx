import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

interface LocationOption {
  label: string;
  value: string;
}

interface FormValues {
  pickupLocation: string;
  pickupDateTime: Date | null;
  dropoffDateTime: Date | null;
  differentDropOff: boolean;
  dropoffLocation: string;
  discountCode: string;
}

const locationOptions: LocationOption[] = [
  { label: "Athens International Airport", value: "athens" },
  { label: "Thessaloniki Airport", value: "thessaloniki" },
  { label: "Heraklion Airport", value: "heraklion" },
];

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    pickupLocation: "",
    pickupDateTime: null,
    dropoffDateTime: null,
    differentDropOff: false,
    dropoffLocation: "",
    discountCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "differentDropOff") {
      setFormData((prev) => ({
        ...prev,
        differentDropOff: !prev.differentDropOff,
        dropoffLocation: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (name: keyof FormValues, value: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        backgroundColor: "#FF6B00",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Pickup Location, Pickup Date, Drop-off Date */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
        {/* Pickup Location */}
        <Box flex={1}>
          <Typography fontWeight="bold" color="white" gutterBottom>
            Pickup Location:
          </Typography>
          <TextField
            select
            name="pickupLocation"
            variant="standard"
            fullWidth
            value={formData.pickupLocation}
            onChange={handleChange}
            InputProps={{
              style: { color: "white" },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            SelectProps={{
              sx: {
                color: "white",
              },
            }}
          >
            {locationOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        {/* Pickup DateTime */}
        <Box flex={1}>
          <Typography fontWeight="bold" color="white" gutterBottom>
            Pickup Date | Time:
          </Typography>
          <DateTimePicker
            value={formData.pickupDateTime}
            onChange={(date) => handleDateChange("pickupDateTime", date)}
            slotProps={{
              textField: {
                variant: "standard",
                fullWidth: true,
                InputProps: {
                  style: { color: "white" },
                },
                InputLabelProps: {
                  style: { color: "white" },
                },
              },
            }}
          />
        </Box>

        {/* Drop-off DateTime */}
        <Box flex={1}>
          <Typography fontWeight="bold" color="white" gutterBottom>
            Drop-off Date | Time:
          </Typography>
          <DateTimePicker
            value={formData.dropoffDateTime}
            onChange={(date) => handleDateChange("dropoffDateTime", date)}
            minDateTime={formData.pickupDateTime || undefined}
            slotProps={{
              textField: {
                variant: "standard",
                fullWidth: true,
                InputProps: {
                  style: { color: "white" },
                },
                InputLabelProps: {
                  style: { color: "white" },
                },
              },
            }}
          />
        </Box>
      </Box>

      {/* Different Drop-Off Option */}
      <Box display="flex" alignItems="center" mt={2}>
        <FormControlLabel
          value="true"
          control={
            <Radio
              checked={formData.differentDropOff}
              size="small"
              sx={{ color: "white" }}
            />
          }
          label={
            <Typography fontWeight="bold" color="white">
              Different Drop-Off Location
            </Typography>
          }
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              differentDropOff: !prev.differentDropOff,
              dropoffLocation: "",
            }))
          }
          sx={{ m: 0 }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 2,
        }}
      >
        {/* Drop-off Location */}
        {formData.differentDropOff && (
          <Box flex={1}>
            <Typography fontWeight="bold" color="white" gutterBottom>
              Drop-off Location:
            </Typography>
            <TextField
              select
              name="dropoffLocation"
              variant="standard"
              fullWidth
              value={formData.dropoffLocation}
              onChange={handleChange}
              InputProps={{
                style: { color: "white" },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              SelectProps={{
                sx: {
                  color: "white",
                },
              }}
            >
              {locationOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}

        {/* Discount Code */}
        <Box flex={1}>
          <Typography fontWeight="bold" color="white" gutterBottom>
            Discount Code:
          </Typography>
          <TextField
            name="discountCode"
            variant="standard"
            fullWidth
            placeholder="Enter discount code"
            value={formData.discountCode}
            onChange={handleChange}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />
        </Box>

        {/* Button */}
        <Box
          flex={1}
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              borderRadius: "999px",
              px: 8,
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#004B9C",
              "&:hover": {
                backgroundColor: "#0086ff",
                color: "white",
                scale: "1.1",
                transition: "all 0.3s ease",
              },
              whiteSpace: "nowrap",
            }}
          >
            UPDATE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingForm;
