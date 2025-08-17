import React, { useState } from 'react';
import img from "./card1.png";

const allFurnitureItems = [
  { id: 1, image: img },
  { id: 2, image: img },
  { id: 3, image: img },
  { id: 4, image: img },
  { id: 5, image: img },
];

function FurnitureCategories() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allFurnitureItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allFurnitureItems.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => setCurrentPage(page);

  const getCardVisibility = (i) => {
    if (i === 0 || i === 4) return 'hidden sm:flex';
    return 'flex';
  };

  const getMarginTop = (i) => {
    if (i === 0 || i === 4) return 'mt-20 bg-red-100';
    if (i === 2) return 'mt-5 bg-blue-100';
    return 'mt-10 bg-green-100';
  };

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center text-center overflow-hidden">
      <p className="text-gray-600">Crafted with excellent material</p>
      <h1 className="text-3xl font-bold mb-5">Furniture Categories</h1>

      {/* Cards */}
      <div className="w-full px-4">
        <div className="flex justify-center gap-5 w-full sm:flex-nowrap sm:overflow-visible overflow-hidden">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              className={`w-[280px] h-[280px] shrink-0 ${getCardVisibility(index)} ${getMarginTop(index)} rounded-lg flex items-center justify-center transition-all duration-300`}
            >
              <img src={item.image} alt="" className="h-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Pagination */}
    
    </div>
  );
}

export default FurnitureCategories;
