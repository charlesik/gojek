import React from 'react'

export default function Phones() {
  return (
    <div className="h-7h bg-dark-blue lg:bg-contain bg-cover bg-[url('phonesbg.png')] pt-60 lg:pl-20">
      <div className=''>
        <p className="text-white lg:text-6xl font-bold">Good To Go?</p>
        <p className="text-white lg:text-6xl font-bold">Download</p>
        <p className="text-white lg:text-6xl font-bold">the Gojek app today!</p>
        <div>
        <button className="text-dark-blue bg-white rounded-3xl h-12 w-36 mt-4">
          App store
        </button>
        <button className="text-dark-blue bg-white rounded-3xl h-12 w-36 mt-4 lg:ml-2">
           Playstore
        </button>
        </div>
      </div>
    </div>
  );
}
