"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

const cryptoData = [
  { symbol: "BTC", price: 103521.23, change: "+2.4%" },
  { symbol: "ETH", price: 21853.12, change: "+1.8%" },
  { symbol: "SOL", price: 208.45, change: "+5.2%" },
]

export function CryptoWidget() {
  return (
    <GlassCard className="col-span-2 row-span-2">
      <div className="text-sm text-muted-foreground mb-4">Crypto</div>
      <div className="space-y-4">
        {cryptoData.map((crypto, index) => (
          <motion.div
            key={crypto.symbol}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="font-medium">{crypto.symbol}</div>
            <div className="text-right">
              <div className="font-bold">${crypto.price.toLocaleString()}</div>
              <div className="text-sm text-emerald-400">{crypto.change}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}

