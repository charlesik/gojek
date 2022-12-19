import React from 'react'

export default function Loyalty() {
  return (
    <div className='lg:flex text-white bg-dark-blue justify-center '>
        <img src="loyalty.svg" alt="" />
        <div className='lg:w-1/3 lg:pl-10 pt-10 '>
            <p className='lg:text-5xl font-bold mb-10 '>Gojek Loyalty Program</p>
            <p>Make more transactions, get more rewards!</p>
            <button className="text-white bg-green-600 rounded-3xl h-12 w-36 mt-4">
       View More!
      </button>
        </div>
    </div>
  )
}
