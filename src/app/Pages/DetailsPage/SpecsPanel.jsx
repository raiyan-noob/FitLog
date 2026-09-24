import React from 'react';

const rows = [
  ["EQUIPMENT", "equipment"],
  ["DIFFICULTY", "difficulty"],
  ["SETS", "sets"],
  ["REPS", "reps"],
  ["DURATION", (w) => `${w.duration} min`],
  ["CALORIES", (w) => `${w.caloriesBurned} kcal`],
  ["RATING", "rating"],
];

const SpecsPanel = ({workout}) => {
    return (
         <div className="bg-[#161616] border border-white/10 rounded-xl divide-y divide-white/5 mb-6">
      {rows.map(([label, accessor]) => (
        <div key={label} className="flex items-center justify-between px-4 py-3 text-sm">
          <span className="text-gray-500 tracking-wide">{label}</span>
          <span className="font-medium">
            {typeof accessor === "function" ? accessor(workout) : workout[accessor]}
          </span>
        </div>
      ))}
    </div>
    );
};

export default SpecsPanel;