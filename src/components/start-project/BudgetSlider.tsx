"use client"

import { Slider } from "@/components/ui/slider"

interface BudgetRange {
  value: number
  label: string
}

interface BudgetSliderProps {
  value: number
  onChange: (value: number) => void
  ranges: BudgetRange[]
}

export function BudgetSlider({ value, onChange, ranges }: BudgetSliderProps) {
  return (
    <div className="space-y-4">
      <div className="px-4">
        <Slider
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          max={100000}
          step={5000}
          className="py-4"
        />
      </div>
      <div className="flex justify-between text-sm text-zinc-400">
        {ranges.map((range) => (
          <div
            key={range.value}
            className={`cursor-pointer ${value >= range.value ? "text-purple-400" : ""}`}
            onClick={() => onChange(range.value)}
          >
            {range.label}
          </div>
        ))}
      </div>
    </div>
  )
}

