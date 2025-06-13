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
  RadioGroup,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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

const MakeABookingTab: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    pickupLocation: "",
    pickupDateTime: null,
    dropoffDateTime: null,
    differentDropOff: false,
    dropoffLocation: "",
    discountCode: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "differentDropOff") {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "true",
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

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formData.pickupLocation) newErrors.pickupLocation = "Pickup location is required";
    if (!formData.pickupDateTime) newErrors.pickupDateTime = "Pickup date/time is required";
    if (!formData.dropoffDateTime) {
      newErrors.dropoffDateTime = "Drop-off date/time is required";
    } else if (
      formData.pickupDateTime &&
      formData.dropoffDateTime <= formData.pickupDateTime
    ) {
      newErrors.dropoffDateTime = "Drop-off must be after pickup time";
    }

    if (formData.differentDropOff && !formData.dropoffLocation) {
      newErrors.dropoffLocation = "Drop-off location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      // Handle submission logic here
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        backgroundColor: "#fff",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Pickup Location */}
      <Box>
        <Typography fontWeight="bold" color="primary" gutterBottom>
          Pickup Location:
        </Typography>
        <TextField
          select
          name="pickupLocation"
          variant="standard"
          fullWidth
          value={formData.pickupLocation}
          onChange={handleChange}
          error={!!errors.pickupLocation}
          helperText={errors.pickupLocation}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
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

      {/* Date and Time Pickers */}
      <Box
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}
      >
        {/* Pickup DateTime */}
        <Box flex={1}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Pickup Date | Time:
          </Typography>
          <DateTimePicker
            value={formData.pickupDateTime}
            onChange={(date) => handleDateChange("pickupDateTime", date)}
            slotProps={{
              textField: {
                variant: "standard",
                fullWidth: true,
                error: !!errors.pickupDateTime,
                helperText: errors.pickupDateTime,
              },
            }}
          />
        </Box>

        {/* Dropoff DateTime */}
        <Box flex={1}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
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
                error: !!errors.dropoffDateTime,
                helperText: errors.dropoffDateTime,
              },
            }}
          />
        </Box>
      </Box>

      {/* Drop-Off Toggle */}
      <RadioGroup
        name="differentDropOff"
        value={formData.differentDropOff}
        onChange={handleChange}
      >
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Different Drop-Off Location"
        />
      </RadioGroup>

      {/* Drop-off Location (Conditional) */}
      {formData.differentDropOff && (
        <Box>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Drop-off Location:
          </Typography>
          <TextField
            select
            name="dropoffLocation"
            variant="standard"
            fullWidth
            value={formData.dropoffLocation}
            onChange={handleChange}
            error={!!errors.dropoffLocation}
            helperText={errors.dropoffLocation}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
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

      {/* Discount Code and Submit */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-end",
        }}
      >
        <Box flex={1}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Discount Code:
          </Typography>
          <TextField
            name="discountCode"
            variant="standard"
            fullWidth
            placeholder="Enter discount code"
            value={formData.discountCode}
            onChange={handleChange}
            error={!!errors.discountCode}
            helperText={errors.discountCode}
          />
        </Box>

        <Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: "999px",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "#004B9C",
              "&:hover": { backgroundColor: "#003a75" },
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
