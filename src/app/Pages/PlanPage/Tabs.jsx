import React from 'react';

const Tabs = ({active,onChange}) => {
    const tabs = [
    { key: "plan", label: "Today's Plan" },
    { key: "saved", label: "Saved" },
  ];

  return (
    <div className="flex gap-2 bg-[#161616] border border-white/10 rounded-full p-1 w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === tab.key ? "bg-[#ccff00] text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
    );
};

export default Tabs;