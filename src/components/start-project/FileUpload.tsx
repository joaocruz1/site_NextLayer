"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Upload } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
  files: File[]
  onUpload: (files: File[]) => void
  onRemove: (index: number) => void
}

export function FileUpload({ files, onUpload, onRemove }: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(Array.from(e.target.files))
    }
  }

  return (
    <div className="space-y-2">
      <div className="border-2 border-dashed border-purple-200/10 rounded-lg p-6 text-center">
        <Input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-2">
          <Upload className="w-8 h-8 text-purple-400" />
          <span className="text-sm text-zinc-400">Drop files here or click to upload</span>
        </label>
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-between p-2 rounded-lg bg-purple-500/[0.02] border border-purple-200/10"
            >
              <span className="text-sm text-zinc-400">{file.name}</span>
              <Button variant="ghost" size="sm" onClick={() => onRemove(i)} className="text-red-400 hover:text-red-300">
                Remove
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

