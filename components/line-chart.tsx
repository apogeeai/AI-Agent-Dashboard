"use client"

import { useTheme } from "next-themes"
import { Line, LineChart as RechartsLineChart, ResponsiveContainer } from "recharts"

const generateUniqueData = (seed: number) => {
  const points = 20
  const data = []
  let y = 50

  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2 + seed
    const noise = Math.sin(angle * seed) * 20
    y = Math.max(10, Math.min(90, y + noise))
    data.push({ value: y })
  }

  return data
}

interface LineChartProps {
  seed: number
}

export function LineChart({ seed }: LineChartProps) {
  const { theme } = useTheme()

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={generateUniqueData(seed)}>
        <defs>
          <linearGradient id={`gradient-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.5} />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Line
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
          fill={`url(#gradient-${seed})`}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

