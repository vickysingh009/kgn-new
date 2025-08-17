import React from 'react';

function ProductCard() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="bg-amber-50 w-full h-60 flex items-center justify-center overflow-hidden">
          <a href="#" className="block w-full h-full p-4">
            <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center text-gray-500 text-sm">
              Product Image
            </div>
          </a>
        </div>

        <div className="p-1">
          <a href="#">
            <h5 className="text-sm sm:text-lg font-medium tracking-tight text-gray-900 line-clamp-2 mb-1">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          
          <div className="flex items-center mb-1">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              ))}
              <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ml-2">5.0</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-semibold text-gray-900">$599</span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center whitespace-nowrap"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;