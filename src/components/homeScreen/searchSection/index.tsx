import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MakeABooking from './MakeABookingTab'
import MyReservation from './MyReservation'

const Index = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="bg-white  w-[80%] mt-32  rounded-xl p-3">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="makeBooking">Make A Booking</TabsTrigger>
            <TabsTrigger value="myReservation">My Reservation</TabsTrigger>
          </TabsList>
          <div className="px-2">
            <TabsContent value="makeBooking">
           <MakeABooking/>
            </TabsContent>
            <TabsContent value="myReservation">
 <MyReservation/>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
