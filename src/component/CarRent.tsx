import React from 'react';
import Image from 'next/image';
import { IoSwapVertical } from 'react-icons/io5';
import { FcLike } from 'react-icons/fc';
import { FaRegHeart } from 'react-icons/fa';

const CarRent = () => {
  return (
    <div className="flex bg-gray-100 h-[1350]">
      {/* Left Sidebar */}
      <div className="w-[350px] h-[1350px] bg-white shadow-md p-4 overflow-y-auto ">
        {/* Section - Type */}
        <div className="mb-9 mt-5 ml-4">
          <h3 className="font-semibold text-gray-500 mb-6 text-[10px]">TYPE</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sport" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="sport" className="text-gray-800 font-semibold">Sport <span className="text-gray-400">(10)</span></label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="suv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="suv" className="text-gray-800 font-semibold">SUV <span className="text-gray-400">(12)</span></label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="mpv" className="text-gray-800 font-semibold">MPV <span className="text-gray-400">(16)</span></label>
            </div>
            <div className="flex items-center space-x-2">
        <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="mpv" className="text-gray-800 font-semibold">Sedan <span className='text-gray-400'>(20)</span></label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="mpv" className="text-gray-800 font-semibold">Cuope <span className='text-gray-400'>(14)</span></label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="mpv" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="mpv" className="text-gray-800 font-semibold">Hatchback <span className='text-gray-400'>(14)</span></label>
      </div>
          </div>
        </div>

        {/* Section - Capacity */}
        <div className="mb-6 ml-5">
          <h3 className="font-semibold text-gray-500 mb-6 text-[10px]">Capacity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="2person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="2person" className="text-gray-800">2 Person <span className="text-gray-400">(10)</span></label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="4person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="4person" className="text-gray-800">4 Person <span className="text-gray-400">(14)</span></label>
            </div>

            <div className="flex items-center space-x-2">
        <input type="checkbox" id="6person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="6person" className="text-gray-800">6 Person <span className='text-gray-400'>(12)</span></label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="6person" className="w-4 h-4 text-blue-500 focus:ring-blue-500" />
        <label htmlFor="6person" className="text-gray-800">8 or More <span className='text-gray-400'>(16)</span></label>
      </div>
    </div>
          
        </div>

        {/* Section - Price */}
        <div className="ml-5 mb-4">
          <h3 className="font-semibold text-gray-500 mb-4 text-[10px]">Price</h3>
          <div className="flex flex-col space-y-2">
            <Image src="/per.png" alt="Price Range" width={280} height={12} />
            <p className="text-gray-800">Max. $100.00</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
<div className="grid grid-cols-3 gap-8 px-10 mt-8 mb-12 ">
  {/* Car 1 */}
  <div className="bg-white rounded-lg shadow-md w-[290px] h-[388px] p-4">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-[#1A202C]">Koenigsegg</h2>
        <p className="text-sm text-[#718096]">Sport</p>
      </div>
      <FcLike className="h-[22px] w-[22px]" />
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
      <h3 className="text-xl font-bold text-[#1A202C]">$99.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
      <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition">
        Rent Now
      </button>
    </div>
  </div>

  {/* car 2 */}

  <div className="bg-white rounded-lg shadow-md w-[300px] h-[388px] p-4  ">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-[#1A202C] ">Nissan GT - R</h2>
        <p className="text-sm text-[#718096]">Sport</p>
      </div>
      <FaRegHeart className="h-[22px] w-[22px]" />
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
  <div className="bg-white rounded-lg shadow-md w-[290px] h-[388px] p-4">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-[#1A202C]">Rolls - Royce</h2>
        <p className="text-sm text-[#718096]">Sedan</p>
      </div>
      <FcLike className="h-[22px] w-[22px]" />
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

  
  {/* car 4 */}
  <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4 ">
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

        {/* Car 5 */}
        <div className="bg-white rounded-lg shadow-md w-[320px] h-[388px] p-4 ">
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

        {/* Car 6*/}
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


          
   {/* Car 7 */}
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
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-[#1A202C] mb-12"> $74.00 <span className="text-gray-400 font-normal text-sm">/ day</span></h3>
            <button className="bg-[#3563E9] text-white font-medium py-1 px-3 rounded-md hover:bg-[#2549b2] transition ml-20 mb-12">
              Rent Now
            </button>
          </div>
</div>
          </div>
        </div>

        {/* Car 8 */}
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

        {/* Car 9*/}
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
  
</div>
</div>

    
  );
};

export default CarRent;
