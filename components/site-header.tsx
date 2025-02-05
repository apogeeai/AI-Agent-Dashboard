"use client"

import { motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { LayoutDashboard } from "lucide-react"

export function SiteHeader() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-14 items-center">
        <motion.div
          className="flex items-center gap-2 font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="rounded-full bg-primary/10 p-2">
            <div className="size-4 rounded-full bg-primary" />
          </div>
          <span>AI Agent Hub</span>
        </motion.div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" size="sm" className="h-8">
              <LayoutDashboard className="mr-2 size-4" />
              Dashboard
            </Button>
          </motion.div>
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  )
}

