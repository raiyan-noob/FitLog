import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SortDropdown = ({ sortBy, onChange }) => {
    return (
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-sm bg-[#161616] border border-white/10 text-gray-300 gap-2 font-normal">
        Sort By: {sortBy} <FaChevronDown className="text-xs" />
      </label>
      <ul tabIndex={0} className="dropdown-content menu bg-[#161616] border border-white/10 rounded-box z-10 w-40 p-2 shadow">
        {["Duration", "Calories", "Rating"].map((option) => (
          <li key={option}>
            <a onClick={() => onChange(option)} className={sortBy === option ? "text-[#ccff00]" : ""}>
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
    );
};

export default SortDropdown;