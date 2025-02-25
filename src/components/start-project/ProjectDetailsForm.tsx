"use client"

import { Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BudgetSlider } from "./BudgetSlider"
import { FileUpload } from "./FileUpload"
import { AlertCircle } from "lucide-react"

interface ProjectDetails {
  projectName: string
  projectDescription: string
  timeline: string
  budget: number
  files: File[]
}

interface ProjectDetailsFormProps {
  data: ProjectDetails
  onChange: (data: Partial<ProjectDetails>) => void
  errors: Partial<ProjectDetails>
}

const budgetRanges = [
  { value: 5000, label: "$5K" },
  { value: 10000, label: "$10K" },
  { value: 25000, label: "$25K" },
  { value: 50000, label: "$50K" },
  { value: 100000, label: "$100K+" },
]

export function ProjectDetailsForm({ data, onChange, errors }: ProjectDetailsFormProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-200">Project Name</label>
        <Input
          value={data.projectName}
          onChange={(e) => onChange({ projectName: e.target.value })}
          placeholder="Enter your project name"
          className="bg-purple-500/[0.02] border-purple-200/10"
        />
        {errors.projectName && (
          <div className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.projectName}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-200">Project Description</label>
        <Textarea
          value={data.projectDescription}
          onChange={(e) => onChange({ projectDescription: e.target.value })}
          placeholder="Tell us about your project goals, features, and requirements..."
          className="min-h-[200px] bg-purple-500/[0.02] border-purple-200/10"
        />
        {errors.projectDescription && (
          <div className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.projectDescription}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-zinc-200">Estimated Budget</label>
        <BudgetSlider value={data.budget} onChange={(value) => onChange({ budget: value })} ranges={budgetRanges} />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-200">Timeline</label>
        <div className="grid grid-cols-3 gap-4">
          {["1-3 months", "3-6 months", "6+ months"].map((time) => (
            <Button
              key={time}
              type="button"
              variant={data.timeline === time ? "default" : "outline"}
              onClick={() => onChange({ timeline: time })}
              className="w-full"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {time}
            </Button>
          ))}
        </div>
        {errors.timeline && (
          <div className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.timeline}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-200">Additional Files (Optional)</label>
        <FileUpload
          files={data.files}
          onUpload={(files) => onChange({ files: [...data.files, ...files] })}
          onRemove={(index) => {
            const newFiles = [...data.files]
            newFiles.splice(index, 1)
            onChange({ files: newFiles })
          }}
        />
      </div>
    </div>
  )
}

