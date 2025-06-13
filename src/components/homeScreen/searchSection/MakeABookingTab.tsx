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
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface FormValues {
  pickupLocation: string;
  pickupDateTime: Date | null;
  dropoffDateTime: Date | null;
  differentDropOff: boolean;
  dropoffLocation: string;
  discountCode: string;
}

const locationOptions = [
  { label: "Athens International Airport", value: "athens" },
  { label: "Thessaloniki Airport", value: "thessaloniki" },
  { label: "Heraklion Airport", value: "heraklion" },
];

const MakeABookingTab = () => {
  const [formData, setFormData] = useState<FormValues>({
    pickupLocation: "",
    pickupDateTime: null,
    dropoffDateTime: null,
    differentDropOff: false,
    dropoffLocation: "",
    discountCode: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const handleDateChange = (name: keyof FormValues, value: Date | null) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};

    if (!formData.pickupLocation) {
      newErrors.pickupLocation = "Pickup location is required";
    }

    if (!formData.pickupDateTime) {
      newErrors.pickupDateTime = "Pickup date/time is required";
    }

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      // Submit your form data here
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 0, backgroundColor: "#fff", borderRadius: 2 }}
      >
        <Grid container spacing={4}>
          {/* Pickup Location */}
          <Grid item xs={12} md={4}>
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
          </Grid>

          {/* Pickup Date | Time */}
          <Grid item xs={12} md={4}>
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
          </Grid>

          {/* Drop-off Date | Time */}
          <Grid item xs={12} md={4}>
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
          </Grid>

          {/* Different Drop-Off */}
          <Grid item xs={12}>
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
          </Grid>

          {/* Drop-off Location (conditionally shown) */}
          {formData.differentDropOff && (
            <Grid item xs={12} md={4}>
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
            </Grid>
          )}

          {/* Discount Code */}
          <Grid item xs={12} md={formData.differentDropOff ? 4 : 8}>
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
          </Grid>

          {/* Submit Button */}
          <Grid
            item
            xs={12}
            md={formData.differentDropOff ? 4 : 12}
            display="flex"
            justifyContent="flex-end"
          >
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
              }}
              endIcon={<ArrowForwardIcon />}
            >
              BOOK NOW
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default MakeABookingTab;