import React from 'react'

export default function Boundaries() {
  return (
    <div className="bg-dark-blue lg:h-1.5k">
      <div className="bg-blue-400 h-full rounded-t-curve ">
        <div className="text-center pt-40 lg:w-1/3 lg:m-auto">
          <p className="text-dark-blue lg:text-6xl  text-3xl font-bold">
            We’ve crossed boundaries
          </p>
          <button className="text-white bg-green-600 rounded-3xl h-12 w-36 mt-4">
            Enter Newsroom
          </button>
        </div>
        <div className="bg-[url('indo.svg')] h-full mt-5">
          <img
            src="https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg"
            alt=""
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
}
