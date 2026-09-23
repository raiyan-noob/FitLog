"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" className={pathname === "/" ? "text-primary bg-primary-content" : "text-base-content"}>Workouts</Link>
            </li>
            <li>
              <Link href="/my-plan" className={pathname === "/my-plan" ? "text-primary  bg-primary-content" : "text-base-content"}>My Plan</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-base-content">
          <Image src="/logo.png" alt="FitLog logo" width={24} height={24} />
          FITLOG
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className={pathname === "/" ? "text-primary  bg-primary-content" : "text-base-content"}>Workouts</Link>
          </li>
          <li>
            <Link href="/my-plan" className={pathname === "/my-plan" ? "text-primary  bg-primary-content" : "text-base-content"}>My Plan</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link href="/my-plan" className="flex items-center gap-2 text-base-content text-sm">
          Plan
          <span className="badge badge-sm bg-primary text-primary-content border-none w-6 h-6 rounded-full p-0 flex items-center justify-center">
            {plan.length}
          </span>
        </Link>
        <Link href="/my-plan" className="flex items-center gap-2 text-base-content text-sm">
          Saved
          <span className="badge badge-sm badge-outline text-base-content/70 border-base-content/30 w-6 h-6 rounded-full p-0 flex items-center justify-center">
            {saved.length}
          </span>
        </Link>
      </div>
    </div>
  );
}