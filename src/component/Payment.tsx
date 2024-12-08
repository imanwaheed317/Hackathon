import React from 'react';

const RentalForm = () => {
  return (
    <div className="bg-[#F6F7F9] min-h-screen py-10 ]">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg space-y-10">
        {/* Billing Info Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Billing Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Phone Number</label>
              <input
                type="text"
                placeholder="Phone number"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Town / City</label>
              <input
                type="text"
                placeholder="Town or city"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Rental Info Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Rental Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Pick-Up</label>
              <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select your location</option>
                <option>Location 1</option>
                <option>Location 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Date</label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Time</label>
              <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select time</option>
                <option>10:00 AM</option>
                <option>2:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Drop-Off</label>
              <select className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select your location</option>
                <option>Location 1</option>
                <option>Location 2</option>
              </select>
            </div>
          </div>
        </section>

        {/* Payment Method Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">Card Number</label>
              <input
                type="text"
                placeholder="Card number"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Expiration Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <input type="radio" id="paypal" name="payment" className="w-4 h-4 text-blue-600" />
              <label htmlFor="paypal" className="text-gray-600">PayPal</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" id="bitcoin" name="payment" className="w-4 h-4 text-blue-600" />
              <label htmlFor="bitcoin" className="text-gray-600">Bitcoin</label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RentalForm;
