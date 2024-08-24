"use client";

import RectangleBlob from "@/app/assets/RectangleBlob";
import Navbar from "./components/Navbar";
import Broadcast from "./components/Landing/Broadcast";
import Campaign from "./components/Landing/Campaign";
import GetStarted from "./components/Landing/GetStarted";
import AutoReply from "./components/Landing/AutoReply";
import Opportunity from "./components/Landing/Opportunity";
import Pricing from "./components/Landing/Pricing";
import Footer from "./components/Landing/Footer";

export default function Home() {
  return (
    <>
      <div className="container relative">
        <div className="hidden lg:block absolute -left-[1600px] -top-[1050px] -z-10 overflow-hidden dark:hidden">
          <RectangleBlob />
        </div>
        <Navbar />
      </div>

      <div>
        <GetStarted /> 
        <Broadcast /> 
        <Campaign /> 
        <AutoReply /> 
        <Opportunity />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
