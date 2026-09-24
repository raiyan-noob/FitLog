"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./Card";
import SearchBar from "../../shared/SearchBar";

const Library = ({ workouts, onSelectWorkout }) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(workouts);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered(workouts);
      return;
    }

    const normalizedQuery = query.toLowerCase();
    setFiltered(workouts.filter((workout) => {
      const groups = Array.isArray(workout.muscleGroups)
        ? workout.muscleGroups
        : [workout.muscleGroups];

      return (
        workout.name?.toLowerCase().includes(normalizedQuery) ||
        groups.some((group) => group?.toLowerCase().includes(normalizedQuery))
      );
    }));
  }, [workouts, query]);

  return (
    <section id="library" className=" px-4 sm:px-6 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 m-10">
        <div>
          <h2 className="font-display uppercase font-bold text-2xl sm:text-3xl mb-1">THE LIBRARY</h2>
          <p className="text-gray-500">Twelve lifts covering every major muscle group.</p>
        </div>
        <SearchBar value={query} onChange={setQuery} placeholder="Search workouts or tags..." />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm py-10 text-center">No workouts match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((w) => (
            <WorkoutCard key={w.id} workout={w} onSelect={onSelectWorkout} />
          ))}
        </div>
      )}
    </section>
  );
}
export default Library;