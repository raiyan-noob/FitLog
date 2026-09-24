"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaPlus, FaBookmark } from "react-icons/fa";
import SpecsPanel from "../Pages/DetailsPage/SpecsPanel";
import Instructions from "../Pages/DetailsPage/Instructions";
import { usePlan } from "../context/PlanContext";
const WorkoutDetailPage = () => {
   
         const { id } = useParams();
  const { addToPlan, addToSaved, isPlanFull } = usePlan();
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((w) => String(w.id) === String(id));
        setWorkout(found || null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
      </div>
    );
  }

  if (!workout) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl font-bold">404 Error!</h1>
        <p className="py-2 text-gray-400">Workout not found.</p>
      </main>
    );
  }

  const groups = Array.isArray(workout.muscleGroups) ? workout.muscleGroups : [workout.muscleGroups];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-72 md:h-full rounded-2xl overflow-hidden">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>

      <div>
        <h1 className="font-display uppercase font-bold text-3xl mb-2">{workout.name}</h1>
        <p className="text-gray-400 mb-4">{workout.description}</p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {groups.map((tag) => (
            <span key={tag} className="badge bg-[#ccff00] text-black border-none font-semibold uppercase">
              {tag}
            </span>
          ))}
        </div>

        <SpecsPanel workout={workout} />
        <Instructions steps={workout.instructions} />

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => addToPlan(workout)}
            disabled={isPlanFull}
            title={isPlanFull ? "Today's plan is full" : undefined}
            className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black border-none gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaPlus /> Add to today&apos;s plan
          </button>
          <button
            onClick={() => addToSaved(workout)}
            className="btn btn-outline border-white/30 text-white gap-2 font-semibold"
          >
            <FaBookmark /> Save for later
          </button>
        </div>
        {isPlanFull && (
          <p className="mt-2 text-sm text-gray-400">Today&apos;s plan limit is full.</p>
        )}
      </div>
    </div>
    );
};

export default WorkoutDetailPage;