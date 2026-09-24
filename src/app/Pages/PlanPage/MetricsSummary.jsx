import React from 'react';

const MetricsSummary = ({plan}) => {
  const exercises = plan.length;
  const minutes = plan.reduce((sum, w) => sum + Number(w.duration || 0), 0);
  const calories = plan.reduce((sum, w) => sum + Number(w.caloriesBurned || 0), 0);

  const stats = [
    ["Exercises", exercises],
    ["Minutes", minutes],
    ["Calories", calories],
  ];

  return (
    <div className="grid grid-cols-3 gap-4 bg-[#161616] border border-white/10 rounded-xl p-5 mb-6">
      {stats.map(([label, value], i) => (
        <div key={label}>
          <p className="text-gray-500 text-xs mb-1">{label}</p>
          <p className={`text-2xl font-bold ${i === 0 ? "text-[#ccff00]" : "text-white"}`}>{value}</p>
        </div>
      ))}
    </div>
    );
};

export default MetricsSummary;