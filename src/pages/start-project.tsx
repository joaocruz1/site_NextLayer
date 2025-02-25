"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, Code, Palette, Server, ArrowRight, ArrowLeft, CheckCircle, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Header } from "@/components/Header"
import { ProgressBar } from "@/components/start-project/ProgressBar"
import { ProjectTypeSelector } from "@/components/start-project/ProjectTypeSelector"
import { ProjectDetailsForm } from "@/components/start-project/ProjectDetailsForm"
import { ContactInfoForm } from "@/components/start-project/ContactInfoForm"
import { toast } from "sonner"

interface FormData {
  projectType: string
  projectName: string
  projectDescription: string
  timeline: string
  budget: number
  files: File[]
  name: string
  email: string
  phone: string
  company: string
}

const INITIAL_FORM_DATA: FormData = {
  projectType: "",
  projectName: "",
  projectDescription: "",
  timeline: "",
  budget: 5000,
  files: [],
  name: "",
  email: "",
  phone: "",
  company: "",
}

const steps = [
  {
    id: "project-type",
    title: "Project Type",
    description: "What kind of project are you looking to build?",
    icon: Rocket,
    options: [
      {
        icon: Code,
        title: "Web Application",
        description: "Full-stack web applications with modern technologies",
        examples: ["E-commerce", "SaaS Platform", "Customer Portal"],
      },
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "Beautiful and intuitive user interfaces",
        examples: ["Mobile App Design", "Website Redesign", "Design System"],
      },
      {
        icon: Server,
        title: "Custom Software",
        description: "Tailored software solutions for your business",
        examples: ["CRM System", "Automation Tools", "Integration Services"],
      },
    ],
  },
  {
    id: "project-details",
    title: "Project Details",
    description: "Tell us more about your project",
    icon: Code,
  },
  {
    id: "contact-info",
    title: "Contact Information",
    description: "How can we reach you?",
    icon: CheckCircle,
  },
]

export default function StartProjectPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
    // Clear errors for updated fields
    const updatedErrors = { ...errors }
    Object.keys(updates).forEach((key) => {
      delete updatedErrors[key as keyof FormData]
    })
    setErrors(updatedErrors)
  }

  const validateStep = () => {
    const newErrors: Partial<FormData> = {}

    if (currentStep === 0 && !formData.projectType) {
      newErrors.projectType = "Please select a project type"
    }

    if (currentStep === 1) {
      if (!formData.projectName.trim()) {
        newErrors.projectName = "Project name is required"
      }
      if (!formData.projectDescription.trim()) {
        newErrors.projectDescription = "Project description is required"
      }
      if (!formData.timeline) {
        newErrors.timeline = "Timeline is required"
      }
    }

    if (currentStep === 2) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      toast.error("Please fill in all required fields")
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async () => {
    if (!validateStep()) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    try {
      // Here you would typically send the form data to your API
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate API call
      toast.success("Project submitted successfully! We'll be in touch soon.")
      setFormData(INITIAL_FORM_DATA)
      setCurrentStep(0)
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressPercentage = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="relative min-h-screen bg-[#0D0620]">
      <AnimatedBackground />

      <div className="relative z-10 pt-32 pb-20">
        <div className="container px-4 md:px-6">
          <Header />
          <ProgressBar steps={steps} currentStep={currentStep} progressPercentage={progressPercentage} />

          {/* Step Content */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentStep === 0 && (
                  <ProjectTypeSelector
                    options={steps[0].options ? steps[0].options : []}
                    selectedType={formData.projectType}
                    onSelect={(type) => updateFormData({ projectType: type })}
                    error={errors.projectType}
                  />
                )}

                {currentStep === 1 && <ProjectDetailsForm data={formData} onChange={updateFormData} errors={errors} />}

                {currentStep === 2 && <ContactInfoForm data={formData} onChange={updateFormData} errors={errors} />}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.div
              className="flex justify-between mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Previous
              </Button>
              <Button
                onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                disabled={isSubmitting}
                className="group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    Submitting...
                  </span>
                ) : currentStep === steps.length - 1 ? (
                  <span className="flex items-center gap-2">
                    Submit Project
                    <CheckCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Next Step
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
