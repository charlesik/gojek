import React from 'react'

export default function Product(props) {
  return (
    <div className={`bg-${props.bg1} h-[600px]`}>
      <div className={`bg-${props.bg2} rounded-t-curve h-full pt-24 lg:pl-20 bg-${props.bgpic} bg-blend-overlay bg-cover`}>
       <div className=' lg:w-1/3'> <p className='lg:text-4xl text-3xl font-black mb-5'>{props.title}</p>
        <p>{props.p} </p></div>

        <div className='mt-20 flex justify-around overflow-x-auto card'>
          
        <div className='bg-white h-[250px] w-[300px] rounded-3xl px-10 pt-14 mx-3 min-w-[300px] min-h-[250px]'>
                <img src="goridelogo.svg" alt="" className='mb-3' />
                <p className='mb-3'>Your two-wheeler taxi, aka Ojek</p>
                <a href="" className='font-bold'>Know more</a>

            </div>
            <div className='bg-white h-[250px] w-[300px] rounded-3xl px-10 pt-14 mx-3 min-w-[300px] min-h-[250px]'>
                <img src="goridelogo.svg" alt="" className='mb-3' />
                <p className='mb-3'>Your two-wheeler taxi, aka Ojek</p>
                <a href="" className='font-bold'>Know more</a>

            </div>
            <div className='bg-white h-[250px] w-[300px] rounded-3xl px-10 pt-14 mx-3 min-w-[300px] min-h-[250px]'>
                <img src="goridelogo.svg" alt="" className='mb-3' />
                <p className='mb-3'>Your two-wheeler taxi, aka Ojek</p>
                <a href="" className='font-bold'>Know more</a>

            </div>
            <div className='bg-white h-[250px] w-[300px] rounded-3xl px-10 pt-14 mx-3 min-w-[300px] min-h-[250px]'>
                <img src="goridelogo.svg" alt="" className='mb-3' />
                <p className='mb-3'>Your two-wheeler taxi, aka Ojek</p>
                <a href="" className='font-bold'>Know more</a>

            </div>
        </div>
      </div>
    </div>
  );
}
