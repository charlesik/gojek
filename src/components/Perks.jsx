import React from 'react'
import Carousel from 'react-elastic-carousel'

export default function Perks() {

    const breakPoints=[
        {width: 500, itemsToShow:1},
        {width: 768, itemsToShow:1},
        {width: 1200, itemsToShow:1.5},
        {width: 1500, itemsToShow:1.5},



    ]
  return (
    <div>
      <div className="h-7h bg-dark-blue">
        <div className="bg-white rounded-t-curve h-full pt-20">
          <p className="text-black text-center lg:text-5xl font-black">
            Perks of being in good company
          </p>
          <div className='mt-16'>
            <Carousel breakPoints={breakPoints}>
              <div className="h-4h bg-cardbg bg-cover rounded-mini-curve bg-gray-600 bg-blend-overlay lg:w-5/6 pl-10 pt-72 text-white ">
                <div className=" ">
                  <div className="flex justify-between ">
                    <div className="">
                      <p className="text-2xl font-bold ">Parental Insurance</p>
                      <p>Subsidised health support for your parents.</p>
                    </div>
                    <button className="text-white bg-green-600 rounded-3xl h-12 px-4  ">
                      View All
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-4h bg-cardbg2 bg-cover rounded-mini-curve bg-gray-600 bg-blend-overlay lg:w-5/6 pl-10 pt-72 text-white ">
                <div className=" ">
                  <div className="flex justify-between ">
                    <div className="">
                      <p className="text-2xl font-bold ">Parental Insurance</p>
                      <p>Subsidised health support for your parents.</p>
                    </div>
                    <button className="text-white bg-green-600 rounded-3xl h-12 px-4  ">
                      View All
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-4h bg-cardbg3 bg-cover rounded-mini-curve bg-gray-600 bg-blend-overlay lg:w-5/6 pl-10 pt-72 text-white ">
                <div className=" ">
                  <div className="flex justify-between ">
                    <div className="">
                      <p className="text-2xl font-bold ">Parental Insurance</p>
                      <p>Subsidised health support for your parents.</p>
                    </div>
                    <button className="text-white bg-green-600 rounded-3xl h-12 px-4  ">
                      View All
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-4h bg-cardbg4 bg-cover rounded-mini-curve bg-gray-600 bg-blend-overlay lg:w-5/6 pl-10 pt-72 text-white ">
                <div className=" ">
                  <div className="flex justify-between ">
                    <div className="">
                      <p className="text-2xl font-bold ">Parental Insurance</p>
                      <p>Subsidised health support for your parents.</p>
                    </div>
                    <button className="text-white bg-green-600 rounded-3xl h-12 px-4  ">
                      View All
                    </button>
                  </div>
                </div>
              </div>
              
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
