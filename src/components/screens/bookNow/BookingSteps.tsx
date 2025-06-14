import React from 'react'
import CheckIcon from "@mui/icons-material/Check";

const BookingSteps = () => {
  return (
<div className="relative">
        {/* Progress Segments */}
        <div className="absolute top-5 left-0 right-0 z-0  justify-between px-5 hidden md:flex">
          {/* Segment 1 */}
          <div className="h-2 bg-[#004d99] flex-1 mx-2 rounded"></div>
          {/* Segment 2 */}
          <div className="h-2 bg-[#53adff] flex-1 mx-2 rounded"></div>
          {/* Segment 3 */}
          <div className="h-2 bg-gray-300 flex-1 mx-2 rounded"></div>
        </div>

        {/* Steps Container */}
        <div className="flex justify-between items-center relative z-10 flex-wrap md:flex-nowrap">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 bg-[#004d99] rounded-full
             flex items-center justify-center text-white font-bold text-xl mb-2"
            >
              <CheckIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-center font-bold text-[18px] text-[#004d99] pt-1">
                Step 1
              </span>
              <span className="text-center font-bold text-[14px] text-[#53adff] pt-1">
                Pickup &<br /> Drop-Off
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#53adff] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
              <CheckIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-center font-bold text-[18px] text-[#004d99] pt-1">
                Step 2
              </span>
              <span className="text-center font-bold text-[14px] text-[#53adff] pt-1">
                Choose Your <br /> Vehicle
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#53adff] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2"></div>
            <div className="flex flex-col">
              <span className="text-center font-bold text-[18px] text-[#004d99] pt-1">
                Step 3
              </span>
              <span className="text-center font-bold text-[14px] text-[#53adff] pt-1">
                Choose Extras
              </span>
              <span className="text-center font-bold text-[14px] text-[#53adff] invisible">
                Choose Extras
              </span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-[#53adff] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2"></div>
            <div className="flex flex-col">
              <span className="text-center font-bold text-[18px] text-[#004d99] pt-1">
                Step 4
              </span>
              <span className="text-center font-bold text-[14px] text-[#53adff] pt-1">
                Confirm <br /> Booking
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BookingSteps