import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import PeopleIcon from "@mui/icons-material/People";
import CasesIcon from "@mui/icons-material/Cases";
import { Button } from "@mui/material";
import BookingModal from "./BookingNowModal";

interface CarCardProps {
  carName: string;
  carImage: string | StaticImageData; // If using imported images, change this to StaticImageData
  carClass: string;
  fuelType: string;
  doors: number;
  people: number;
  bags: number;
  isAC: boolean;
  priceDesk: number;
  priceOnline: number;
}

const CarCards: React.FC<{ item: CarCardProps }> = ({ item }) => {
  const {
    carName,
    carImage,
    carClass,
    fuelType,
    doors,
    people,
    bags,
    isAC,
    priceDesk,
    priceOnline,
  } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  return (
    <>
      <div
        className=" border-[#F58220] border-2 rounded-xl 
    text-[#043d71] p-8 w-full shadow hover:shadow-lg transition-all"
      >
        {/* Header */}
        <div className="  font-bold text-[20px]">{carName}</div>
        <div className="flex items-center justify-between text-xs  font-semibold pt-5">
          <span className=" text-[#308ae4] font-semibold text-[14px]">
            or similar (Available)
          </span>
          <span className="   font-semibold text-[14px]">
            GROUP {carClass} - MBMR
          </span>
        </div>
        {/* Features */}
        <div
          className="flex items-center justify-between border-t-2
       border-t-[#F58220] pt-1  mt-2 text-[#004d99] font-bold text-sm"
        >
          {" "}
          <span className="flex items-center gap-0.5 ">
            {" "}
            <AccountTreeIcon
              sx={{
                fontSize: "17px",
              }}
            />{" "}
            A
          </span>
          <span className="flex items-center gap-0.5 ">
            <LocalGasStationIcon
              sx={{
                fontSize: "17px",
              }}
            />
            {fuelType}
          </span>
          <span className="flex items-center gap-0.5 ">
            <AirlineSeatReclineExtraIcon
              sx={{
                fontSize: "17px",
              }}
            />
            {doors}
          </span>
          <span className="flex items-center gap-0.5 ">
            <PeopleIcon
              sx={{
                fontSize: "17px",
              }}
            />
            {people}
          </span>
          <span className="flex items-center gap-0.5 ">
            <CasesIcon
              sx={{
                fontSize: "17px",
              }}
            />
            {bags}
          </span>
          <span>{isAC ? "AC" : "No AC"}</span>
        </div>

        {/* Image */}
        <Image
          src={carImage}
          alt={carName}
          width={500} // 48 x 4 = 192px
          height={500} // 28 x 4 = 112px
          className="h-64 object-contain w-full"
        />
        {/* Prices */}
        <div
          className="text-center text-sm  border-b-2
       border-b-[#F58220]  font-bold text-[20px] pb-2"
        >
          Total Price for 1 Day
        </div>
        <div className="flex justify-between mt-1  font-bold text-[24px] ">
          <div className="text-center">
            <div>{priceDesk}€</div>
            <div className=" text-[#308ae4] text-[18px]">
              {priceDesk} € / Daily
            </div>
          </div>
          <div className="text-center">
            <div className="">{priceOnline}€</div>
            <div className="text-[#308ae4] text-[18px] ">
              {priceOnline} € / Daily
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-4 font-semibold text-[14px]">
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
              backgroundColor: "#F58220",
              "&:hover": {
                backgroundColor: "#F58220",
                color: "white",
                scale: "1.1",
                transition: "all 0.3s ease",
              },
              whiteSpace: "nowrap",
            }}
            onClick={handleOpen}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
      <BookingModal open={isModalOpen} handleClose={handleClose} info={item} />
    </>
  );
};

export default CarCards;
