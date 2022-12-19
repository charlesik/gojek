import React from "react";
import Navbar from "./Navbar";
export default function TopSection() {
  return (
    <div>
      
        <div className="bg-top-background h-screen pt-7 bg-gray-600 bg-blend-overlay">
          <Navbar />
          <div className="lg:mt-20 lg:ml-20 mt-40 ml-10">
            <p className="text-white lg:text-7xl text-3xl font-black">3 countries.</p>
            <p className="text-white lg:text-7xl text-3xl font-black">20+ Products.</p>
            <p className="text-white lg:text-7xl text-3xl font-black">1 leading</p>
            <p className="text-white lg:text-7xl text-3xl font-black">
              on-demand platform.
            </p>
          </div>
        </div>
     
    </div>
  );
}
