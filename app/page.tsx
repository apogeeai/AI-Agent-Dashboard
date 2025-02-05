"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Twitter,
  Video,
  Bot,
  BookOpen,
  Code,
  MessageSquare,
  Building2,
  ShoppingBag,
  Newspaper,
  Podcast,
  Lightbulb,
  TrendingUp,
} from "lucide-react"
import { AgentCard } from "@/components/agent-card"
import { Navbar } from "@/components/navbar"

const agents = [
  {
    id: "twitter",
    title: "Social Media Manager",
    description: "Manages and optimizes social media presence across platforms.",
    icon: Twitter,
    metrics: {
      primary: { label: "POSTS", value: 342, change: 12 },
      secondary: { label: "ENGAGEMENT", value: "28K", change: 23 },
    },
    status: "running",
    earnings: { amount: 3200, period: "Monthly" },
  },
  {
    id: "palette",
    title: "Content Writer Pro",
    description: "Creates high-quality, SEO-optimized content for various platforms.",
    icon: BookOpen,
    metrics: {
      primary: { label: "ARTICLES", value: 85, change: 15 },
      secondary: { label: "CLIENTS", value: 24, change: 8 },
    },
    status: "running",
    earnings: { amount: 2450, period: "Monthly" },
  },
  {
    id: "video",
    title: "Video Creator",
    description: "Produces engaging video content for marketing and entertainment.",
    icon: Video,
    metrics: {
      primary: { label: "VIDEOS", value: 48, change: 18 },
      secondary: { label: "VIEWS", value: "182K", change: 32 },
    },
    status: "optimizing",
    earnings: { amount: 5800, period: "Monthly" },
  },
  {
    id: "bot",
    title: "Customer Support",
    description: "Provides 24/7 customer support and handles inquiries efficiently.",
    icon: Bot,
    metrics: {
      primary: { label: "TICKETS", value: 234, change: 5 },
      secondary: { label: "SATISFACTION", value: "98%", change: 2 },
    },
    status: "running",
    earnings: { amount: 1900, period: "Monthly" },
  },
  {
    id: "code",
    title: "SEO Optimizer",
    description: "Improves website rankings and organic traffic through SEO strategies.",
    icon: Code,
    metrics: {
      primary: { label: "KEYWORDS", value: "1.2K", change: 25 },
      secondary: { label: "RANKINGS", value: 142, change: 15 },
    },
    status: "learning",
    earnings: { amount: 2800, period: "Monthly" },
  },
  {
    id: "image",
    title: "Email Marketer",
    description: "Creates and manages email campaigns to boost engagement and conversions.",
    icon: MessageSquare,
    metrics: {
      primary: { label: "CAMPAIGNS", value: 56, change: 8 },
      secondary: { label: "OPEN RATE", value: "42%", change: 13 },
    },
    status: "running",
    earnings: { amount: 4100, period: "Monthly" },
  },
  {
    id: "music",
    title: "Data Analyst",
    description: "Analyzes complex data sets to provide actionable business insights.",
    icon: TrendingUp,
    metrics: {
      primary: { label: "REPORTS", value: 89, change: 11 },
      secondary: { label: "INSIGHTS", value: 312, change: 19 },
    },
    status: "running",
    earnings: { amount: 3600, period: "Monthly" },
  },
  {
    id: "shopping",
    title: "Product Researcher",
    description: "Conducts in-depth market research to identify profitable product opportunities.",
    icon: ShoppingBag,
    metrics: {
      primary: { label: "PRODUCTS", value: 156, change: 21 },
      secondary: { label: "ACCURACY", value: "94%", change: 7 },
    },
    status: "optimizing",
    earnings: { amount: 2900, period: "Monthly" },
  },
  {
    id: "newspaper",
    title: "News Aggregator",
    description: "Collects and summarizes news from various sources for quick consumption.",
    icon: Newspaper,
    metrics: {
      primary: { label: "ARTICLES", value: 1250, change: 28 },
      secondary: { label: "READERS", value: "15K", change: 17 },
    },
    status: "running",
    earnings: { amount: 3300, period: "Monthly" },
  },
  {
    id: "podcast",
    title: "Podcast Transcriber",
    description: "Automatically transcribes and summarizes podcast episodes.",
    icon: Podcast,
    metrics: {
      primary: { label: "EPISODES", value: 78, change: 14 },
      secondary: { label: "ACCURACY", value: "97%", change: 3 },
    },
    status: "running",
    earnings: { amount: 2100, period: "Monthly" },
  },
  {
    id: "lightbulb",
    title: "Idea Generator",
    description: "Generates creative ideas for content, products, and marketing campaigns.",
    icon: Lightbulb,
    metrics: {
      primary: { label: "IDEAS", value: 423, change: 31 },
      secondary: { label: "IMPLEMENTATIONS", value: 89, change: 22 },
    },
    status: "learning",
    earnings: { amount: 3800, period: "Monthly" },
  },
  {
    id: "building",
    title: "Virtual Event Planner",
    description: "Plans and coordinates virtual events, webinars, and online conferences.",
    icon: Building2,
    metrics: {
      primary: { label: "EVENTS", value: 12, change: 9 },
      secondary: { label: "ATTENDEES", value: "2.5K", change: 16 },
    },
    status: "running",
    earnings: { amount: 4500, period: "Monthly" },
  },
]

export default function DashboardPage() {
  const [runningAgents, setRunningAgents] = useState<string[]>(
    agents.filter((agent) => agent.status === "running").map((agent) => agent.id),
  )

  const toggleAgent = (id: string) => {
    setRunningAgents((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]))
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544084944-15269ec7b5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <Navbar />
      <div className="container mx-auto p-8 bg-gray-900/70 min-h-screen">
        <motion.h1
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          AI Agent Dashboard
        </motion.h1>
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AgentCard
                {...agent}
                status={runningAgents.includes(agent.id) ? "running" : agent.status}
                onToggle={() => toggleAgent(agent.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

