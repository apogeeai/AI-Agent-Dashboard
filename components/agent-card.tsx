"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LineChart } from "@/components/line-chart"
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react"

interface Metric {
  label: string
  value: number | string
  change: number
}

interface AgentCardProps {
  title: string
  icon: LucideIcon
  metrics: {
    primary: Metric
    secondary: Metric
  }
  status: "running" | "stopped" | "optimizing" | "learning"
  onToggle: () => void
  description: string
  id: string
  earnings: {
    amount: number
    period: string
  }
}

export function AgentCard({ title, icon: Icon, metrics, status, onToggle, description, id, earnings }: AgentCardProps) {
  const isRunning = status === "running"

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl glass-card glass-gradient bg-gray-800/80 backdrop-blur-md border border-gray-700/50 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <h3 className="font-medium text-sm">{title}</h3>
          </div>
          <Button
            size="sm"
            variant={isRunning ? "destructive" : "default"}
            onClick={onToggle}
            className="h-7 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20"
          >
            {status === "running" ? "Stop" : status === "stopped" ? "Start" : status}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">{metrics.primary.label}</p>
            <div className="flex items-end gap-2">
              <motion.p
                className="text-2xl font-bold tabular-nums"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {metrics.primary.value}
              </motion.p>
              <span className={`text-xs ${metrics.primary.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                {metrics.primary.change >= 0 ? (
                  <ArrowUpIcon className="inline h-3 w-3" />
                ) : (
                  <ArrowDownIcon className="inline h-3 w-3" />
                )}
                {Math.abs(metrics.primary.change)}%
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">{metrics.secondary.label}</p>
            <div className="flex items-end gap-2">
              <motion.p
                className="text-2xl font-bold tabular-nums"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {metrics.secondary.value}
              </motion.p>
              <span className={`text-xs ${metrics.secondary.change >= 0 ? "text-green-400" : "text-red-400"}`}>
                {metrics.secondary.change >= 0 ? (
                  <ArrowUpIcon className="inline h-3 w-3" />
                ) : (
                  <ArrowDownIcon className="inline h-3 w-3" />
                )}
                {Math.abs(metrics.secondary.change)}%
              </span>
            </div>
          </div>
        </div>

        <motion.div
          className="flex-1 min-h-[80px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <LineChart seed={id.charCodeAt(0)} />
        </motion.div>

        <motion.div
          className="mt-4 pt-4 border-t border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Earnings</span>
            <div className="text-right">
              <span className="text-2xl font-bold">${earnings.amount.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground ml-1">{earnings.period}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

