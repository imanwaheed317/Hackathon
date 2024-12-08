import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-auto w-full bg-[#F6F7F9] ">
      {/* Hero Section */}
      <div className="flex justify-center  sm:space-y-0 sm:space-x-8">
        {/* Box 1 */}
        <div className="relative bg-[#54A6FF] h-[360px] w-full sm:w-[680px] text-white overflow-hidden rounded-lg mt-12 sm:mt-32 shadow-lg">
          {/* Background Circular Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_20%,_transparent_50%)]"></div>

          {/* Content Section */}
          <div className="absolute top-6 left-6 z-10">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              The Best Platform <br /> for Car Rental
            </h1>
            <p className="text-xs sm:text-sm mb-6">
              Ease of doing a car rental safely and reliably. <br />
              Of course at a low price.
            </p>
            <button className="bg-[#3563E9] text-white font-medium py-2 px-4 rounded-md hover:bg-[#2549b2] transition">
              Rental Car
            </button>
          </div>

          {/* Car Image */}
          <div className="absolute bottom-0 right-0 w-full h-full">
            <Image
              src="/p1.png"
              alt="Car"
              layout="intrinsic"
              width={680}
              height={360}
              className="object-contain"
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative bg-[#3563E9] h-[360px] w-full sm:w-[680px] text-white overflow-hidden rounded-lg mt-12 sm:mt-32 shadow-lg">
          {/* Background Circular Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_20%,_transparent_50%)]"></div>

          {/* Content Section */}
          <div className="absolute top-6 left-6 z-10">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">
              Easy way to rent a <br /> car at a low price
            </h1>
            <p className="text-xs sm:text-sm mb-6">
              Providing cheap car rental services <br />
              and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] text-white font-medium py-2 px-4 rounded-md hover:bg-[#2549b2] transition">
              Rental Car
            </button>
          </div>

          {/* Car Image */}
          <div className="absolute bottom-0 right-0 w-full h-full">
            <Image
              src="/p2.png"
              alt="Car"
              layout="intrinsic"
              width={680}
              height={360}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
