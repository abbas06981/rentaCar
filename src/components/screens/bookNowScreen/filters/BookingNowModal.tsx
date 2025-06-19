import React from "react";
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
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle} className="bg-white p-4 sm:p-6 relative shadow-lg">
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
              whiteSpace: "nowrap",
            }}
          >
            <CloseIcon />
          </Button>
        </div>

        <Image
          src={info.carImage}
          alt={info.carName}
          width={500}
          height={300}
          className="h-56 sm:h-64 object-contain w-full mb-4"
        />

        <h2 className="text-xl font-semibold text-[#043d71]">{info.carName}</h2>
        <p className="text-sm text-gray-600 mb-4">
          • {info.people} seats • {info.fuelType} • Class: {info.carClass}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 border-t-2 border-t-[#d37a2e] pt-2 mt-2 text-[#004d99] font-bold text-sm mb-4">
          <span className="flex items-center gap-1">
            <AccountTreeIcon sx={{ fontSize: "17px" }} /> {info.carClass}
          </span>
          <span className="flex items-center gap-1">
            <LocalGasStationIcon sx={{ fontSize: "17px" }} /> {info.fuelType}
          </span>
          <span className="flex items-center gap-1">
            <AirlineSeatReclineExtraIcon sx={{ fontSize: "17px" }} />{" "}
            {info.doors}
          </span>
          <span className="flex items-center gap-1">
            <PeopleIcon sx={{ fontSize: "17px" }} /> {info.people}
          </span>
          <span className="flex items-center gap-1">
            <CasesIcon sx={{ fontSize: "17px" }} /> {info.bags}
          </span>
          <span>{info.isAC ? "AC" : "No AC"}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium">Start Date</label>
            <input
              type="datetime-local"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              defaultValue="2024-05-24T10:00"
            />
          </div>
          <div>
            <label className="text-sm font-medium">End Date</label>
            <input
              type="datetime-local"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              defaultValue="2024-05-26T10:00"
            />
          </div>
        </div>

        <h3 className="font-semibold mb-2">Driver Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="License Number"
            className="p-2 border border-gray-300 rounded"
          />
        </div>

        <h3 className="font-semibold mb-2">Extras (Optional)</h3>
        <div className="flex flex-col gap-2 mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Child Seat
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Full Insurance
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" /> Additional Driver
          </label>
        </div>

        <h3 className="font-semibold mb-2">Payment Method</h3>
        <div className="flex flex-col gap-2 mb-6">
          <label className="inline-flex items-center">
            <input type="radio" name="payment" className="mr-2" /> Credit /
            Debit Card
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="payment" className="mr-2" /> Cash on
            Pickup
          </label>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              width: "80%",
              borderRadius: "999px",
              px: 8,
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
              whiteSpace: "nowrap",
            }}
            onClick={handleClose}
          >
            Confirm Booking
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
