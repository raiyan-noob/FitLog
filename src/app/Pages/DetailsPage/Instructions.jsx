import React from 'react';

const Instructions = ({steps}) => {
    return (
        <div className="mb-8">
      <h3 className="font-display uppercase font-semibold text-sm mb-3">Instructions</h3>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-gray-300">
            <span className="text-[#ccff00] font-semibold">{i + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
    );
};

export default Instructions;