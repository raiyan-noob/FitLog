"use client";

import React from 'react';
import { useEffect, useMemo, useState } from "react";
import { usePlan } from "../../context/PlanContext";
import MetricsSummary from "../PlanPage/MetricsSummary";
import Tabs from "../PlanPage/Tabs";
import SortDropdown from "../PlanPage/SortDropdown";
import PlanCard from "../PlanPage/Card";
import EmptyState from "../PlanPage/EmptyState";
import SearchBar from "../../shared/SearchBar";

const sortKeyMap = { Duration: "duration", Calories: "caloriesBurned", Rating: "rating" };

const MyPlanPage = ({ initialTab = "plan" }) => {
    const { plan, saved, removeFromPlan, removeFromSaved, markAsDone, hydrated } = usePlan();
  const [tab, setTab] = useState(initialTab);
  const [sortBy, setSortBy] = useState("Duration");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hydrated) {
      const t = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(t);
    }
  }, [hydrated]);

  const list = tab === "plan" ? plan : saved;

  const filteredList = useMemo(() => {
    if (!query.trim()) return list;
    const q = query.toLowerCase();
    return list.filter((w) => {
      const groups = Array.isArray(w.muscleGroups) ? w.muscleGroups : [w.muscleGroups];
      return (
        w.name?.toLowerCase().includes(q) ||
        groups.some((g) => g?.toLowerCase().includes(q))
      );
    });
  }, [list, query]);

  const sortedList = useMemo(() => {
    const key = sortKeyMap[sortBy];
    return [...filteredList].sort((a, b) => Number(b[key]) - Number(a[key]));
  }, [filteredList, sortBy]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display uppercase font-bold text-3xl mb-1">MY PLAN</h1>
      <p className="text-gray-500 mb-6">Cap of five lifts for today. Finish them, then load more.</p>

      <MetricsSummary plan={plan} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <Tabs active={tab} onChange={setTab} />
        <div className="flex items-center gap-3 flex-wrap">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by name or tag..." />
          <SortDropdown sortBy={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 py-10">Loading workouts…</p>
      ) : sortedList.length === 0 ? (
        list.length === 0 ? (
          <EmptyState />
        ) : (
          <p className="text-gray-500 text-sm py-10 text-center">No workouts match your search.</p>
        )
      ) : (
        <div>
          {sortedList.map((w) => (
            <PlanCard
              key={w.id}
              workout={w}
              tab={tab}
              onRemove={tab === "plan" ? removeFromPlan : removeFromSaved}
              onMarkDone={markAsDone}
            />
          ))}
        </div>
      )}
    </div>
    );
};

export default MyPlanPage;