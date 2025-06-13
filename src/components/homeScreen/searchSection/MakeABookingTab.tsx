"use client";

import React from "react";
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
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SubmitHandler } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

type FormValues = {
  pickupLocation: string;
  pickupDateTime: Date | null;
  dropoffDateTime: Date | null;
  differentDropOff: boolean;
  dropoffLocation?: string;
  discountCode: string;
};

const schema = yup.object().shape({
  pickupLocation: yup.string().required("Pickup location is required"),
  pickupDateTime: yup
    .date()
    .required("Pickup date/time is required")
    .typeError("Please enter a valid date/time"),
  dropoffDateTime: yup
    .date()
    .required("Drop-off date/time is required")
    .typeError("Please enter a valid date/time")
    .min(yup.ref("pickupDateTime"), "Drop-off must be after pickup time"),
  differentDropOff: yup.boolean(),
  dropoffLocation: yup.string().when("differentDropOff", {
    is: true,
    then: (schema) => schema.required("Drop-off location is required"),
  }),
  discountCode: yup.string(),
});

const locationOptions = [
  { label: "Athens International Airport", value: "athens" },
  { label: "Thessaloniki Airport", value: "thessaloniki" },
  { label: "Heraklion Airport", value: "heraklion" },
];

const MakeABookingTab = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      pickupLocation: "",
      pickupDateTime: null,
      dropoffDateTime: null,
      differentDropOff: false,
      dropoffLocation: "",
      discountCode: "",
    },
    resolver: yupResolver(schema),
  });

  const differentDropOff = watch("differentDropOff");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ p: 0, backgroundColor: "#fff", borderRadius: 2 }}
    >
      <Grid container spacing={4}>
        {/* Pickup Location */}
        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Pickup Location:
          </Typography>
          <Controller
            name="pickupLocation"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                variant="standard"
                fullWidth
                error={!!errors.pickupLocation}
                helperText={errors.pickupLocation?.message}
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
            )}
          />
        </Grid>

        {/* Pickup Date | Time */}
        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Pickup Date | Time:
          </Typography>
          <Controller
            name="pickupDateTime"
            control={control}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                slotProps={{
                  textField: {
                    id: "pickup-dtp",
                    variant: "standard",
                    fullWidth: true,
                    error: !!errors.pickupDateTime,
                    helperText: errors.pickupDateTime?.message,
                    InputProps: (params) => ({
                      ...params.InputProps,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              document.getElementById("pickup-dtp")?.focus()
                            }
                          >
                            <CalendarTodayIcon color="primary" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }),
                  },
                }}
              />
            )}
          />
        </Grid>

        {/* Drop-off Date | Time */}
        <Grid item xs={12} md={4}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Drop-off Date | Time:
          </Typography>
          <Controller
            name="dropoffDateTime"
            control={control}
            render={({ field }) => (
              <DateTimePicker
                {...field}
                minDateTime={watch("pickupDateTime")}
                slotProps={{
                  textField: {
                    id: "dropoff-dtp",
                    variant: "standard",
                    fullWidth: true,
                    error: !!errors.dropoffDateTime,
                    helperText: errors.dropoffDateTime?.message,
                    InputProps: (params) => ({
                      ...params.InputProps,
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              document.getElementById("dropoff-dtp")?.focus()
                            }
                          >
                            <CalendarTodayIcon color="primary" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }),
                  },
                }}
              />
            )}
          />
        </Grid>

        {/* Different Drop-Off */}
        <Grid item xs={12}>
          <Controller
            name="differentDropOff"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Different Drop-Off Location"
                />
              </RadioGroup>
            )}
          />
        </Grid>

        {/* Drop-off Location (conditionally shown) */}
        {differentDropOff && (
          <Grid item xs={12} md={4}>
            <Typography fontWeight="bold" color="primary" gutterBottom>
              Drop-off Location:
            </Typography>
            <Controller
              name="dropoffLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  variant="standard"
                  fullWidth
                  error={!!errors.dropoffLocation}
                  helperText={errors.dropoffLocation?.message}
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
              )}
            />
          </Grid>
        )}

        {/* Discount Code */}
        <Grid item xs={12} md={differentDropOff ? 4 : 8}>
          <Typography fontWeight="bold" color="primary" gutterBottom>
            Discount Code:
          </Typography>
          <Controller
            name="discountCode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                fullWidth
                placeholder="Enter discount code"
                error={!!errors.discountCode}
                helperText={errors.discountCode?.message}
              />
            )}
          />
        </Grid>

        {/* Submit Button */}
        <Grid
          item
          xs={12}
          md={differentDropOff ? 4 : 12}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
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
            {isSubmitting ? "Processing..." : "BOOK NOW"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeABookingTab;
