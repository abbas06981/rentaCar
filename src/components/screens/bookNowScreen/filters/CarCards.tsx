import Image from "next/image";
import React from "react";

interface CarCardProps {
  carName: string;
  carImage: string; // If using imported images, change this to StaticImageData
  carClass: string;
  fuelType: string;
  doors: number;
  people: number;
  bags: number;
  isAC: boolean;
  priceDesk: number;
  priceOnline: number;
}

const CarCard = ({ items }: { items: CarCardProps }) => {
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
  } = items;

  return (
    <div className="border border-blue-300 rounded-xl p-4 w-full max-w-sm mx-auto shadow hover:shadow-lg transition">
      {/* Header */}
      <div className="text-blue-800 font-bold text-lg">{carName}</div>
      <div className="text-xs text-gray-600">or similar (Available)</div>
      <div className="text-xs text-right font-semibold text-blue-800">
        GROUP {carClass} - MBMR
      </div>

      {/* Features */}
      <div className="flex items-center justify-between text-xs text-gray-600 border-b pb-2 mt-2">
        <span>M</span>
        <span>{fuelType}</span>
        <span>{doors} 🚪</span>
        <span>{people} 👤</span>
        <span>{bags} 🧳</span>
        <span>{isAC ? "AC" : "No AC"}</span>
      </div>

      {/* Image */}
      <div className="flex justify-center my-3">
        <Image
          src={carImage}
          alt={carName}
          width={192} // 48 x 4 = 192px
          height={112} // 28 x 4 = 112px
          className="w-48 h-28 object-contain"
        />
      </div>

      {/* Prices */}
      <div className="text-center text-sm font-semibold text-gray-700 border-t pt-2">
        Total Price for 1 Day
      </div>
      <div className="flex justify-between mt-1 text-sm font-bold text-gray-800">
        <div className="text-center">
          <div>{priceDesk?.toFixed(2)}€</div>
          <div className="text-xs font-normal">
            {priceDesk?.toFixed(2)} € / Daily
          </div>
        </div>
        <div className="text-center">
          <div>{priceOnline?.toFixed(2)}€</div>
          <div className="text-xs font-normal">
            {priceOnline?.toFixed(2)} € / Daily
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 text-sm border border-blue-700 text-blue-700 rounded-md hover:bg-blue-50">
          BOOK NOW
          <br />
          Pay On Desk
        </button>
        <button className="px-4 py-2 text-sm bg-blue-700 text-white rounded-md hover:bg-blue-800">
          BOOK NOW
          <br />
          Pay Online
        </button>
      </div>
    </div>
  );
};

export default CarCard;
