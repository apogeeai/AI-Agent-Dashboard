"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Activity, Timer } from "lucide-react"
import { motion } from "framer-motion"

const workouts = [
  {
    name: "Morning Run",
    duration: "45 min",
    distance: "5.2 km",
    calories: 420,
    heartRate: 145,
    pace: "5:30 /km",
  },
  {
    name: "HIIT Training",
    duration: "30 min",
    calories: 380,
    heartRate: 165,
  },
  {
    name: "Evening Yoga",
    duration: "60 min",
    calories: 180,
    heartRate: 95,
  },
  {
    name: "Cycling",
    duration: "1h 15min",
    distance: "25 km",
    calories: 550,
    heartRate: 138,
    pace: "3:00 /km",
  },
]

export function FitnessWidget() {
  return (
    <GlassCard className="col-span-2 row-span-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-4 w-4 text-primary" />
        <div className="text-sm text-muted-foreground">Fitness Tracker</div>
      </div>
      <div className="space-y-4">
        {workouts.map((workout, index) => (
          <motion.div
            key={workout.name}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/20"
          >
            <div className="font-medium">{workout.name}</div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Timer className="h-3 w-3" />
                {workout.duration}
              </div>
              {workout.distance && <div>{workout.distance}</div>}
              <div>{workout.calories} cal</div>
              <div>♥️ {workout.heartRate}</div>
              {workout.pace && <div>{workout.pace}</div>}
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}

