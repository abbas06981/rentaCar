"use client";

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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRouter } from "next/navigation";
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

const MakeABookingTab: React.FC = () => {
  const router = useRouter();
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

    router.push("/bookNow");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 0,
        backgroundColor: "#d37a2e",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
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
            // error={!!errors.pickupLocation}
            // helperText={errors.pickupLocation}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          >
            {locationOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

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
                // error: !!errors.pickupDateTime,
                // helperText: errors.pickupDateTime,
              },
            }}
          />
        </Box>

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
                // error: !!errors.dropoffDateTime,
                // helperText: errors.dropoffDateTime,
              },
            }}
          />
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <FormControlLabel
          value="true"
          control={<Radio checked={formData.differentDropOff} size="small" />}
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
        }}
      >
        {/* Drop-off Location Column */}
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
              // error={!!errors.dropoffLocation}
              // helperText={errors.dropoffLocation}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
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

        {/* Discount Code Column */}
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
            // error={!!errors.discountCode}
            // helperText={errors.discountCode}
          />
        </Box>

        {/* Book Now Button Column */}
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
              px: 5,
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#000000",
              "&:hover": {
                backgroundColor: "#000000",
                color: "white",
                scale: "1.1",
                transition: "all",
                animationDelay: "1.5s",
              },
              whiteSpace: "nowrap",
            }}
            endIcon={<ArrowForwardIcon />}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MakeABookingTab;
