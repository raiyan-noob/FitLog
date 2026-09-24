import Image from "next/image";
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-white/10 mt-16">
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog logo" width={20} height={20} />
          <span className="font-bold text-white text-sm">FITLOG</span>
        </div>
        <p className="text-xs text-gray-500 text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
export default Footer;