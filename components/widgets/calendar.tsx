"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Calendar, Users, Video } from "lucide-react"
import { motion } from "framer-motion"

const meetings = [
  {
    time: "9:00 AM",
    title: "Team Standup",
    location: "Virtual Meeting",
    attendees: 8,
    duration: "30min",
  },
  {
    time: "10:30 AM",
    title: "Project Planning",
    location: "Conference Room A",
    attendees: 5,
    duration: "1h",
  },
  {
    time: "2:00 PM",
    title: "Design Review",
    location: "Virtual Meeting",
    attendees: 6,
    duration: "1h 30min",
  },
  {
    time: "4:00 PM",
    title: "Client Meeting",
    location: "Main Office",
    attendees: 4,
    duration: "1h",
  },
]

export function CalendarWidget() {
  return (
    <GlassCard className="col-span-2 row-span-4">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-4 w-4 text-primary" />
        <div className="text-sm text-muted-foreground">Today's Schedule</div>
      </div>
      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <motion.div
            key={meeting.time}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/20"
          >
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">{meeting.time}</div>
              <div className="text-xs text-muted-foreground">({meeting.duration})</div>
            </div>
            <div className="font-medium mt-1">{meeting.title}</div>
            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {meeting.location.includes("Virtual") ? <Video className="h-3 w-3" /> : null}
                {meeting.location}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {meeting.attendees}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}

