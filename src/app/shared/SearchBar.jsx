import { FaSearch } from "react-icons/fa";
import React from 'react';

const SearchBar = ({ value, onChange, placeholder = "Search by name or tag..." }) => {
    
  return (
    <div className="relative w-full sm:w-72">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input input-sm sm:input-md w-full pl-9 bg-[#161616] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00]/50"
      />
    </div>
  );
}
export default SearchBar;