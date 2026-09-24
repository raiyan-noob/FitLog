import Link from 'next/link';
import React from 'react';

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16 bg-[#161616] border border-white/10 rounded-xl">
      <h3 className="font-display uppercase font-bold text-lg mb-2">Nothing here yet</h3>
      <p className="text-gray-500 text-sm mb-5 max-w-xs">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/" className="btn btn-sm bg-[#ccff00] hover:bg-[#b8e600] text-black border-none font-semibold">
        Go to workouts
      </Link>
    </div>
    );
};

export default EmptyState;