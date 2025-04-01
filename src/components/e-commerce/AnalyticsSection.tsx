"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {ArrowUpRight, TrendingUp} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function AnalyticsSection() {
  const { t } = useLanguage()
  const [activeChart, setActiveChart] = useState<keyof typeof t.ecommerce.analytics.itemsmetrics>("sales")
  

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{t.ecommerce.analytics.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            {t.ecommerce.analytics.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart selection */}
          <div className="space-y-4">
            {t.ecommerce.analytics.itemscharts.map((chart) => (
              <motion.div
                key={chart.id}
                whileHover={{ x: 5 }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeChart === chart.id
                    ? "bg-purple-500/20 border border-purple-500/30"
                    : "bg-white/5 border border-transparent hover:border-purple-500/10"
                }`}
                onClick={() => setActiveChart(chart.id as "sales" | "employees" | "marketplaces")}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${activeChart === chart.id ? "bg-purple-500/30" : "bg-purple-500/10"}`}
                  >
                    <chart.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{chart.title}</h3>
                    <p className="text-purple-200/70 text-sm">{chart.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart visualization */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">{t.ecommerce.analytics.itemscharts.find((c) => c.id === activeChart)?.title}</h3>
              <div className="flex items-center text-purple-200/70 text-sm">
                <span>{t.ecommerce.analytics.span}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Chart content */}
            <div className="h-64 relative">
              {activeChart === "sales" && <SalesChart />}
              {activeChart === "employees" && <EmployeesChart />}
              {activeChart === "marketplaces" && <MarketplacesChart />}
            </div>

            {/* Chart metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {t.ecommerce.analytics.itemsmetrics[activeChart].map((metric, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center gap-1 text-purple-200/70 text-xs">
                    <span>{metric.label}</span>
                    {metric.change > 0 ? (
                      <span className="text-green-400 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5" />
                        {metric.change}%
                      </span>
                    ) : (
                      <span className="text-red-400 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5 rotate-180" />
                        {Math.abs(metric.change)}%
                      </span>
                    )}
                  </div>
                  <p className="text-white font-semibold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Chart components
const SalesChart = () => (
  <div className="w-full h-full flex items-end">
    <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area chart */}
      <path
        d="M0,80 C20,70 40,60 60,65 C80,70 100,90 120,80 C140,70 160,50 180,40 C200,30 220,20 240,25 C260,30 280,40 300,30 L300,100 L0,100 Z"
        fill="url(#salesGradient)"
      />

      {/* Line chart */}
      <path
        d="M0,80 C20,70 40,60 60,65 C80,70 100,90 120,80 C140,70 160,50 180,40 C200,30 220,20 240,25 C260,30 280,40 300,30"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
      />

      {/* Data points */}
      {[
        [0, 80],
        [60, 65],
        [120, 80],
        [180, 40],
        [240, 25],
        [300, 30],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#8b5cf6" />
      ))}
    </svg>
  </div>
)

const EmployeesChart = () => (
  <div className="w-full h-full flex items-end">
    <svg viewBox="0 0 300 100" className="w-full h-full">
      {/* Bar chart */}
      {[
        [20, 60],
        [60, 40],
        [100, 70],
        [140, 50],
        [180, 80],
        [220, 65],
        [260, 90],
      ].map(([x, height], i) => (
        <motion.rect
          key={i}
          x={x - 15}
          y={100 - height}
          width="30"
          height={height}
          rx="4"
          fill="#8b5cf6"
          fillOpacity="0.7"
          initial={{ height: 0, y: 100 }}
          animate={{ height, y: 100 - height }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
    </svg>
  </div>
)

const MarketplacesChart = () => (
  <div className="w-full h-full flex justify-center items-center">
    <svg viewBox="0 0 100 100" className="w-64 h-64">
      {/* Pie chart */}
      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="251.2 0" />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#a78bfa"
        strokeWidth="20"
        strokeDasharray="75.4 175.8"
        strokeDashoffset="-251.2"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        stroke="#c4b5fd"
        strokeWidth="20"
        strokeDasharray="50.2 201"
        strokeDashoffset="-175.8"
      />

      {/* Center circle */}
      <circle cx="50" cy="50" r="25" fill="#0D0620" />
    </svg>
  </div>
)



