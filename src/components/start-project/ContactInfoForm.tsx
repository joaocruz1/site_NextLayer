"use client"

import { Input } from "@/components/ui/input"
import { AlertCircle } from "lucide-react"

interface ContactInfo {
  name: string
  email: string
  phone: string
  company: string
}

interface ContactInfoFormProps {
  data: ContactInfo
  onChange: (data: Partial<ContactInfo>) => void
  errors: Partial<ContactInfo>
}

export function ContactInfoForm({ data, onChange, errors }: ContactInfoFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-200">Name</label>
          <Input
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Your name"
            className="bg-purple-500/[0.02] border-purple-200/10"
          />
          {errors.name && (
            <div className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.name}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-200">Email</label>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="Your email"
            className="bg-purple-500/[0.02] border-purple-200/10"
          />
          {errors.email && (
            <div className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-200">Phone</label>
        <Input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="Your phone number"
          className="bg-purple-500/[0.02] border-purple-200/10"
        />
        {errors.phone && (
          <div className="text-red-500 text-sm flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.phone}
          </div>
        )}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-200">Company (Optional)</label>
        <Input
          value={data.company}
          onChange={(e) => onChange({ company: e.target.value })}
          placeholder="Your company name"
          className="bg-purple-500/[0.02] border-purple-200/10"
        />
      </div>
    </div>
  )
}

