import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import css from "./CardGallary.module.css"

const ProductCardGallary = ({ product }) => {
  const getBadgeColor = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'best seller': return 'bg-red-500';
      case 'new': return 'bg-green-500';
      case 'sale': return 'bg-orange-500';
      case 'popular': return 'bg-blue-500';
      case 'eco-friendly': return 'bg-emerald-500';
      case 'gaming': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group max-w-sm mx-auto max-h-[400px]">
      
      {/* Product Image */}
      <div className="relative overflow-hidden p-0 bg-slate-200">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-35 sm:h-30 lg:h-50 object-cover transition-transform duration-300 group-hover:scale-110 ${css.imgClass}`}
        />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-2 sm:top-3 left-2 sm:left-3 ${getBadgeColor(product.badge)} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 sm:top-3 right-2 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-white hover:scale-110">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500" />
        </button>

        {/* Quick Actions Overlay - Hidden on mobile */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center hidden sm:flex">
          <button className="bg-white text-gray-800 px-4 py-1.5 rounded-full font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Quick Add</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 pt-0 mt-0">
        <h3 className="font-bold text-base sm:text-sm text-gray-800 mb-2 truncate group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm sm:text-base text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-[#f3f4f6] text-black py-2 sm:py-1 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCardGallary;
