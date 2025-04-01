"use client"

import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"


export function ProcessTimeline() {

  const {t} = useLanguage()

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.websites.process.title}</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
            {t.websites.process.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-500/20 -ml-[1px] z-0" />

          {/* Timeline steps */}
          <div className="space-y-16 md:space-y-32">
            {t.websites.process.items.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Mobile timeline line */}
                {index < t.websites.process.items.length - 1 && (
                  <div className="md:hidden absolute left-[25px] top-[60px] bottom-[-32px] w-[2px] bg-purple-500/20 z-0" />
                )}

                <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Step number and icon - Mobile */}
                  <div className="md:hidden absolute left-0 top-0 z-10">
                    <StepIcon icon={step.icon} number={index + 1} />
                  </div>

                  {/* Content for mobile */}
                  <div className="md:hidden ml-16 mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-purple-200/70">{step.description}</p>
                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                              <div className="w-2 h-2 rounded-full bg-purple-400" />
                            </div>
                            <span className="text-purple-200/90 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:block md:w-1/2 relative">
                    {/* Step icon for desktop */}
                    <div
                      className={`absolute top-0 ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} z-10`}
                    >
                      <StepIcon icon={step.icon} number={index + 1} />
                    </div>

                    {/* Content for desktop - only show on appropriate side */}
                    {index % 2 === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mr-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-purple-200/70">{step.description}</p>
                        <ul className="mt-4 space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                              </div>
                              <span className="text-purple-200/90 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  <div className="hidden md:block md:w-1/2 relative">
                    {/* Content for desktop - only show on appropriate side */}
                    {index % 2 !== 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="ml-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10"
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-purple-200/70">{step.description}</p>
                        <ul className="mt-4 space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="p-1 rounded-full bg-purple-500/20 mt-1">
                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                              </div>
                              <span className="text-purple-200/90 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function StepIcon({ icon: Icon, number }: { icon: any; number: number }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        viewport={{ once: true }}
        className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center z-10"
      >
        <Icon className="w-6 h-6 text-purple-400" />
      </motion.div>
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
        {number}
      </div>
    </div>
  )
}


