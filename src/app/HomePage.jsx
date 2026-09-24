"use client";

import { useEffect, useState } from "react";
import Hero from "./pages/Homepage/Hero";
import Library from "./Pages/Homepage/Library";

export default function HomePage() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch((err) => console.error("Failed to load workouts", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
        <p className="text-gray-400 text-sm">Loading workouts…</p>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Library workouts={workouts} />
    </>
  );
}