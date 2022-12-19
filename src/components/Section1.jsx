import React from 'react'

export default function Section1() {
  return (
    <div>
    <div className="bg-dark-blue  ">
    <div className="text-center pt-40 h-screen">
      <p className="text-white lg:text-6xl font-bold">We're Gojek,</p>
      <p className="text-white lg:text-6xl font-bold">
        the drivers of change.
      </p>
      <button className="text-white bg-green-600 rounded-3xl h-12 w-36 mt-4">
        Explore Careers
      </button>
    </div>
    <div className="lg:h-1k bg-white rounded-t-curve">
      <div className="lg:flex">
        <div className="lg:w-1/4 w-full text-center px-7 relative bottom-36 ">
          <img src="/man.svg" alt="" className="h-64 m-auto" />
          <p className="text-2xl font-bold">Fortune's favorite</p>
          <p className="text-gray-500">
            Southeast Asia’s only company to make it to Fortune’s ‘Change
            the World’ list twice.
          </p>
        </div>

        <div className="lg:w-1/4 w-full text-center px-7 relative bottom-36 ">
          <img src="/woman.svg" alt="" className="h-64 m-auto" />
          <p className="text-2xl font-bold">$7.1 b contribution</p>
          <p className="text-gray-500">
            Value added to the Indonesian economy in 2019.
          </p>
        </div>

        <div className="lg:w-1/4 w-full text-center px-7 relative bottom-36 ">
          <img src="/man2.svg" alt="" className="h-64 m-auto" />
          <p className="text-2xl font-bold">Tonne times greener</p>
          <p className="text-gray-500">
          Saved 11.3 tonnes of plastic in cutlery since October 2020.
          </p>
        </div>

        <div className="lg:w-1/4 w-full text-center px-7 relative bottom-36 ">
          <img src="/woman2.svg" alt="" className="h-64 m-auto" />
          <p className="text-2xl font-bold">Digitising merchants</p>
          <p className="text-gray-500">
          Resulted in 80% growth in number of GoFood merchants during pandemic.
          </p>
        </div>
      </div>
      <div className="text-center">
      <p className="text-black lg:text-5xl font-bold">
        We Scale Like A Dream
      </p>
      <button className="text-white bg-green-600 rounded-3xl h-10 w-32 mt-4">
        Scale With Us
      </button>
      </div>
      <div className="my-28 lg:flex justify-around px-10">
        <div className="bg-green-400 lg:h-96 lg:w-1/5 mb-10 rounded-3xl ">
          <img src="/card1.png" alt="" className="relative bottom-24"/>
          <p className="text-4xl font-bold px-8">190 million+</p>
          <p className="font-bold text-xl px-8">app downloads since 2015</p>
        </div>
        <div className="bg-purple-400 lg:h-96 lg:w-1/5 mb-10 rounded-3xl ">
          <img src="/bike.png" alt="" className="relative bottom-24"/>
          <p className="text-4xl font-bold px-8">2 million+</p>
          <p className="font-bold text-xl px-8">driver partners</p>
        </div>
        <div className="bg-orange-400 lg:h-96 lg:w-1/5 mb-10 rounded-3xl ">
          <img src="/card3.png" alt="" className="relative bottom-24"/>
          <p className="text-4xl font-bold px-8">900,000+</p>
          <p className="font-bold text-xl px-8">GoFood merchants</p>
        </div>
        <div className="bg-blue-400 lg:h-96 lg:w-1/5  rounded-3xl ">
          <img src="/rocket.png" alt="" className="relative bottom-24"/>
          <p className="text-4xl font-bold px-8">2.448x</p>
          <p className="font-bold text-xl px-8">jump in downloads from 2015 to 2020</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
