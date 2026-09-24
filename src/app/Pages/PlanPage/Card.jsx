import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar, FaCheck, FaTimes } from "react-icons/fa";
const PlanCard = ({ workout, tab, onRemove, onMarkDone }) => {
    return (
        <div className="flex items-center gap-4 bg-[#161616] border border-white/10 rounded-xl p-3 mb-3">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className={`font-display uppercase font-semibold text-sm ${workout.done ? "line-through text-gray-500" : ""}`}>
          {workout.name}
        </h4>
        <p className="text-gray-500 text-xs mb-1">{workout.equipment}</p>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1"><FaClock className="text-[#ccff00]" /> {workout.duration} min</span>
          <span className="flex items-center gap-1"><FaFire className="text-[#ccff00]" /> {workout.caloriesBurned} kcal</span>
          <span className="flex items-center gap-1"><FaStar className="text-[#ccff00]" /> {workout.rating}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={`/${workout.id}`}
          className="btn btn-xs sm:btn-sm btn-outline border-white/30 text-white"
        >
          View Details
        </Link>
        {tab === "plan" && (
          <button
            onClick={() => onMarkDone(workout.id)}
            disabled={workout.done}
            className="btn btn-xs sm:btn-sm bg-[#ccff00] text-black border-none gap-1 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaCheck /> {workout.done ? "Completed" : "Mark as Done"}
          </button>
        )}
        <button onClick={() => onRemove(workout.id)} className="text-gray-500 hover:text-white p-2">
          <FaTimes />
        </button>
      </div>
    </div>
    );
};

export default PlanCard;