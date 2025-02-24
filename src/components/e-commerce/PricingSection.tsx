"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

export function PricingSection() {

  const {t} = useLanguage()

  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.ecommerce.pricingsection.title}</h2>
        <p className="text-purple-200/70 max-w-2xl mx-auto">{t.ecommerce.pricingsection.subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.ecommerce.pricingsection.items.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
              plan.popular ? "border-purple-500" : "border-purple-500/10"
            }`}
          >
            {plan.popular && (
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            )}
            <h3 className="text-xl font-bold text-white mt-4">{plan.name}</h3>
            <p className="text-purple-200/70 mt-2">{plan.description}</p>
            <div className="mt-6 mb-8">
              <span className="text-4xl font-bold text-white">${plan.price}</span>
              <span className="text-purple-200/70">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-purple-200/90">
                  <Check className="w-5 h-5 text-purple-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant={plan.popular ? "default" : "outline"} className="w-full" size="lg">
              Get Started
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}



