"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Modal, Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import PeopleIcon from "@mui/icons-material/People";
import CasesIcon from "@mui/icons-material/Cases";

interface CarCardProps {
  carName: string;
  carImage: string | StaticImageData;
  carClass: string;
  fuelType: string;
  doors: number;
  people: number;
  bags: number;
  isAC: boolean;
  priceDesk: number;
  priceOnline: number;
}

interface BookingModalProps {
  info: CarCardProps;
  open: boolean;
  handleClose: () => void;
}

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "800px",
  maxHeight: "90vh",
  overflowY: "auto",
  outline: "none",
  borderRadius: "12px",
};

export default function BookingModal({
  info,
  open,
  handleClose,
}: Readonly<BookingModalProps>) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    landline: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    license: "",
    landline: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      license: "",
      landline: "",
    };

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits)";
      valid = false;
    }

    if (!form.license.trim()) {
      newErrors.license = "License number is required";
      valid = false;
    }

    // ✅ Fixed Landline Validation
    if (!form.landline.trim()) {
      newErrors.landline = "Landline is required";
      valid = false;
    } else if (!/^\d{6,15}$/.test(form.landline)) {
      newErrors.landline = "Landline must be 6 to 15 digits";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", form);
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle} className="bg-white p-4 sm:p-6 relative shadow-lg">
        <div className="p-4 sm:p-2 flex flex-col bg-white sticky top-0 z-10">
          <div className="flex justify-end">
            <Button
              onClick={handleClose}
              variant="contained"
              size="small"
              sx={{
                borderRadius: "10px",
                px: 2,
                py: 1,
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#d37a2e",
                "&:hover": {
                  backgroundColor: "#d37a2e",
                  color: "white",
                  scale: "1.1",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="overflow-y-auto px-4 sm:px-6  pt-3 flex-1 bg-white">
            <Image
              src={info.carImage}
              alt={info.carName}
              width={500}
              height={300}
              className="h-56 sm:h-64 object-contain w-full mb-4"
            />

            <div className="  font-bold text-[20px] text-[#d37a2e]">
              {info.carName}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 border-t-2 border-t-[#d37a2e] pt-2 mt-2 text-[#004d99] font-bold text-sm mb-4">
              <span className="flex items-center gap-1 text-[#959a9f]">
                <AccountTreeIcon sx={{ fontSize: "17px" }} /> {info.carClass}
              </span>
              <span className="flex items-center gap-1 text-[#959a9f]">
                <LocalGasStationIcon
                  sx={{ fontSize: "17px", color: "#d37a2e" }}
                />{" "}
                {info.fuelType}
              </span>
              <span className="flex items-center gap-1 text-[#959a9f]">
                <AirlineSeatReclineExtraIcon
                  sx={{ fontSize: "17px", color: "#d37a2e" }}
                />{" "}
                {info.doors}
              </span>
              <span className="flex items-center gap-1 text-[#959a9f]">
                <PeopleIcon sx={{ fontSize: "17px", color: "#d37a2e" }} />{" "}
                {info.people}
              </span>
              <span className="flex items-center gap-1 text-[#959a9f]">
                <CasesIcon sx={{ fontSize: "17px", color: "#d37a2e" }} />{" "}
                {info.bags}
              </span>
              <span className="text-[#959a9f]">
                {info.isAC ? "AC" : "No AC"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-[#d37a2e]">
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full mt-1 p-2 border border-gray-300 rounded text-[#959a9f]"
                  defaultValue="2024-05-24T10:00"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#d37a2e]">
                  End Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full mt-1 p-2 border border-gray-300 rounded text-[#959a9f]"
                  defaultValue="2024-05-26T10:00"
                />
              </div>
            </div>

            <h3 className="font-bold mb-2 text-[#d37a2e]">Driver Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.fullName && (
                  <p className="text-red-700 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.email && (
                  <p className="text-red-700 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.phone && (
                  <p className="text-red-700 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="license"
                  placeholder="License Number"
                  value={form.license}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
                {errors.license && (
                  <p className="text-red-700 text-sm">{errors.license}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <input
                  type="tel"
                  name="landline"
                  placeholder="Phone or Landline Number"
                  value={form.landline}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full text-[#959a9f]"
                />
                {errors.landline && (
                  <p className="text-red-700 text-sm">{errors.landline}</p>
                )}
              </div>
            </div>

            <h3 className="font-bold mb-2 text-[#d37a2e]">Extras (Optional)</h3>
            <div className="flex flex-col gap-2 mb-4">
              <label className="inline-flex items-center text-[#959a9f]">
                <input type="checkbox" className="mr-2 w-4 h-4" /> Child Seat
              </label>
              <label className="inline-flex items-center text-[#959a9f] text-lg">
                <input type="checkbox" className="mr-2 w-4 h-4" /> Full
                Insurance
              </label>
              <label className="inline-flex items-center text-[#959a9f]">
                <input type="checkbox" className="mr-2 w-4 h-4" /> Additional
                Driver
              </label>
            </div>

            <div className="flex justify-center w-full">
              <Button
                type="button"
                variant="contained"
                size="small"
                sx={{
                  width: "80%",
                  borderRadius: "999px",
                  px: 8,
                  py: 1,
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#d37a2e",
                  "&:hover": {
                    backgroundColor: "#d37a2e",
                    color: "white",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  },
                  whiteSpace: "nowrap",
                }}
                onClick={handleSubmit}
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
