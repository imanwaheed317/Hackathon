import React from 'react';
import Image from 'next/image';
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";

const CarContent = () => {
  return (<>
    <div className="bg-[#F6F7F9] h-[1650px] w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center pt-28 px-20">
        <h1 className="text-[#90A3BF] font-semibold text-xl cursor-pointer hover:underline">Popular Car</h1>
        <h1 className="text-[#3563E9] text-lg font-semibold">View all</h1>
      </div>
      {/* All 4 Car Boxes Row */}
      <div className="flex justify-between items-stretch gap-6 px-16 mt-8">
        {/* Car 1 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">Koenigsegg</h2>
              <p className="text-sm text-[#718096]">Sport</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c1.png" alt="Car" width={250} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>90L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $99.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Car 2 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">Nissan GT - R</h2>
              <p className="text-sm text-[#718096]">Sport</p>
            </div>
            <FaRegHeart className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c2.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>80L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
  <div>
    <h3 className="text-xl font-bold text-[#1A202C]">$80.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
    <p className="text-gray-400 text-sm line-through mt-1">$100.00</p>
  </div>
  <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
    Rent Now
  </button>
</div>

        </div>

        {/* Car 3 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">Rolls - Royce</h2>
              <p className="text-sm text-[#718096]">Sedan</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c3.png" alt="Car" width={250} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>70L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>4 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $96.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>


        {/* Car 4 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">Nissan GT - R</h2>
              <p className="text-sm text-[#718096]">Sport</p>
            </div>
            <FaRegHeart className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c4.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>90L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
         <div>
           <h3 className="text-xl font-bold text-[#1A202C]">$80.00 <span className="text-gray-400 font-normal        text-sm">/ day</span></h3>
           <p className="text-gray-400 text-sm line-through mt-1">$100.00</p>
         </div>
         <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2]
           transition">
           Rent Now
         </button>
       </div>

        </div>
      </div>
    


{/* //car sec 2  */}
<h1 className="mt-12 ml-20 text-[#90A3BF] font-semibold text-xl cursor-pointer hover:underline">Recomendation Car</h1>

{/* All 4 Car Boxes Row */}
<div className="flex justify-between px-16 mt-8">
        {/* Car 5 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">All New Rush</h2>
              <p className="text-sm text-[#718096]">SUV</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-16">
            <Image src="/c5.png" alt="Car" width={250} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>90L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>2 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $99.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Car 6 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">CR-V</h2>
              <p className="text-sm text-[#718096]">SUV</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c6.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>80L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>6 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $80.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Car 7 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">All New Terios</h2>
              <p className="text-sm text-[#718096]">SUV</p>
            </div>
            <FaRegHeart className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-16">
            <Image src="/c7.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>90L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>6 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $74.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Car 8 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">CR-V</h2>
              <p className="text-sm text-[#718096]">SUV</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c8.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>80L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>6 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $80.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    

    {/* All 4 Car Boxes Row */}
    <div className="flex justify-between items-stretch gap-6 px-16 mt-8">
        {/* Car 9 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">MG ZX Exclusice</h2>
              <p className="text-sm text-[#718096]">Hatchback</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-12 pl-4 pb-16">
            <Image src="/c9.png" alt="Car" width={250} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>70L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>4 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
          <div className="flex justify-between items-center mt-4">
  <div>
    <h3 className="text-xl font-bold text-[#1A202C]">$80.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
    <p className="text-gray-400 text-sm line-through mt-1">$100.00</p>
  </div>
  <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
    Rent Now
  </button>
</div>

          </div>
        </div>

        {/* Car 10 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">New MG ZS</h2>
              <p className="text-sm text-[#718096]">SUV</p>
            </div>
            <FaRegHeart className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c10.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>80L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>6 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $80.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Car 11 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">MG ZX Excite</h2>
              <p className="text-sm text-[#718096]">Hatchback</p>
            </div>
            <FcLike className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c11.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>90L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>4 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $74.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>

        {/* Car 12 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-[#1A202C]">New MG ZS</h2>
              <p className="text-sm text-[#718096]">SUV</p>
            </div>
            <FaRegHeart className="h-[22] w-[22]" />
          </div>
          <div className="pt-16 pl-4 pb-20">
            <Image src="/c12.png" alt="Car" width={242} height={72} />
          </div>
          <div className="flex justify-between items-center text-sm text-[#718096] my-2">
            <div className="flex items-center space-x-1">
              <Image src="/fuel.png" alt="Fuel" width={20} height={20} />
              <span>80L</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/manual.png" alt="Transmission" width={20} height={20} />
              <span>Manual</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/2user.png" alt="Capacity" width={20} height={20} />
              <span>6 People</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C]"> $80.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mt-16'>
  <div className='flex items-center justify-center text-center bg-[#3563E9] text-white w-[156px] h-[44px] font-semibold'>
    <button>Show more car</button>
  </div>
</div>

      </div>
</>
  );
};

export default CarContent