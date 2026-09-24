"use client";
import React from 'react';


import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const PlanContext = createContext([]);
const PLAN_CAP = 5;

export const PlanProvider= ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedPlan = JSON.parse(localStorage.getItem("fitlog_plan") || "[]");
      const storedSaved = JSON.parse(localStorage.getItem("fitlog_saved") || "[]");
      setPlan(storedPlan);
      setSaved(storedSaved);
    } catch (e) {
      console.error("Failed to load FitLog data", e);
    } finally {
      setHydrated(true);
    }
  }, []);


  useEffect(() => {
    if (hydrated) localStorage.setItem("fitlog_plan", JSON.stringify(plan));
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem("fitlog_saved", JSON.stringify(saved));
  }, [saved, hydrated]);

  const addToPlan = (workout) => {
    if (plan.some((w) => w.id === workout.id)) {
      toast.info("Already in today's plan");
      return;
    }
    if (plan.length >= PLAN_CAP) {
      toast.error("Today's plan is full");
      return;
    }
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout) => {
    if (saved.some((w) => w.id === workout.id)) {
      toast.info("Already saved");
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
    toast.info("Removed from today's plan");
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast.info("Removed from saved");
  };

  const markAsDone = (id, onToastClose) => {
    setPlan((prev) => prev.map((w) => (w.id === id ? { ...w, done: true } : w)));
    toast.success("Workout done!!", {
      onClose: () => {
        setPlan((prev) => prev.filter((w) => w.id !== id));
        onToastClose?.();
      },
    });
  };

  const isPlanFull = plan.length >= PLAN_CAP;

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isPlanFull,
        hydrated,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);