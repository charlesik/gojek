import React from 'react'

export default function Footer() {
  return (
    <div className="bg-dark-blue h-full pt-20 text-white">
      <div className=" w-[90%] h-full m-auto">
        <img src="gojeklogo.svg" alt="" />
        <div className="flex flex-wrap justify-between mt-10 border-b border-gray-50 h-1/2 pt-20">
          <div>
            <p className="font-bold mb-3">Company</p>
            <p className="mb-2">
              <a>About</a>
            </p>
            <p className="mb-2">
              <a>Products</a>
            </p>
            <p className="mb-2">
              <a>Blog</a>
            </p>
          </div>
          <div>
            <p className="font-bold mb-3">Join with us</p>
            <p className="mb-2">
              <a>Driver Partners</a>
            </p>
            <p className="mb-2">
              <a>Merchant Partners</a>
            </p>
          </div>
          <div>
            <p className="font-bold mb-3">Careers</p>
            <p className="mb-2">
              <a>Student</a>
            </p>
            <p className="mb-2">
              <a>Professionals</a>
            </p>
          </div>
          <div>
            <p className="font-bold mb-3">Get in touch</p>
            <p className="mb-2">
              <a>Help Center</a>
            </p>
            <p className="mb-2">
              <a>Our location</a>
            </p>
          </div>
        </div>

        <div className='flex justify-between mt-10 lg:w-1/3 mb-20'>
          <div>
            
            <p className="mb-2">
              <a>Privacy Notice</a>
            </p>
            <p className="mb-2">
              <a>Data attribution</a>
            </p>
          </div>
          <div>
            <p className="mb-2">
              <a>Terms and condition</a>
            </p>
            <p className="mb-2">
              <a>Cookie settings</a>
            </p>
          </div>
        </div>
        <p className='text-center'>© 2022 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.</p>
      </div>
    </div>
  );
}
