import React from 'react'

export default function JoinRide() {
  return (
    <div>
        <div className="bg-dark-blue lg:h-9h">
        <div className="bg-joinridebg h-5h text-center pt-20 bg-gray-600 bg-blend-overlay rounded-b-curve">
          <p className="text-white text-6xl font-bold">Join The Ride</p>
        </div>
        <div className="lg:flex justify-around">
          <div className="text-white lg:w-1/4 px-8 rounded-3xl relative bottom-28 bg-lyt-dark-blue h-96 ">
            <img src="/cardicon.svg" alt="" className="relative bottom-10" />
            <p className="text-3xl font-bold mb-4">Employees</p>
            <p className=" mb-4">
              Behind Southeast Asia’s only hyper-growth startup are some
              billion-dollar brains, doing what they do best.
            </p>
            <button className="text-white bg-green-800 rounded-3xl h-12 px-4 ">
              Join as an Employee
            </button>
          </div>
          <div className="text-white lg:w-1/4 px-8 rounded-3xl relative bottom-28 bg-lyt-dark-blue h-96 ">
            <img src="/cardicon2.svg" alt="" className="relative bottom-10" />
            <p className="text-3xl font-bold mb-4">Driver partners</p>
            <p className=" mb-9">
            We’re home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.
            </p>
            <button className="text-white bg-green-800 rounded-3xl h-12 px-4 ">
              Join as a driver partner
            </button>
          </div>
          <div className="text-white lg:w-1/4 px-8 rounded-3xl relative bottom-28 bg-lyt-dark-blue h-96 ">
            <img src="/cardicon3.svg" alt="" className="relative bottom-10" />
            <p className="text-3xl font-bold mb-4">Merchants</p>
            <p className=" mb-8">
            We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales.
            </p>
            <button className="text-white bg-green-800 rounded-3xl h-12 px-4 ">
              Join as a merchant
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
