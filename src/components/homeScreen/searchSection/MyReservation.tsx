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

const MyReservation: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    pickupLocation: "",
    pickupDateTime: null,
    dropoffDateTime: null,
    differentDropOff: false,
    dropoffLocation: "",
    discountCode: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});

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

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formData.pickupLocation)
      newErrors.pickupLocation = "Pickup location is required";
    if (!formData.pickupDateTime)
      newErrors.pickupDateTime = "Pickup date/time is required";
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
      // Submit logic here
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 0,
        backgroundColor: "#fff",
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
        <Box flex={1}>
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

      <Box display="flex" alignItems="center">
        <FormControlLabel
          value="true"
          control={<Radio checked={formData.differentDropOff} size="small" />}
          label={
            <Typography fontWeight="bold" color="primary">
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

        {/* Discount Code Column */}
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
              backgroundColor: "#004B9C",
              "&:hover": { backgroundColor: "#0086ff",
                color:"white",scale:"1.1",transition:"all",animationDelay:"1.5s" },
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

export default MyReservation;
