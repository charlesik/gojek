import React from "react";
import Navbar from "./Navbar";
export default function ProductsTop() {
  return (
    <div>
      
        <div className="bg-[url('/productsbg.webp')] bg-cover h-screen pt-7 bg-gray-600 bg-blend-overlay">
          <Navbar />
          <div className="lg:mt-36 lg:ml-20 mt-40 ml-10">
            <p className="text-white lg:text-5xl text-3xl font-black">We build products</p>
            <p className="text-white lg:text-5xl text-3xl font-black">that nations run on</p>
    
          </div>
        </div>
     
    </div>
  );
}
