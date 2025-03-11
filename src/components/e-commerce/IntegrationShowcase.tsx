"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CreditCard, Truck, MessageSquare, Mail, Share2 } from "lucide-react"

export function IntegrationShowcase() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Seamless Integrations</h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto text-sm sm:text-base">
            Connect with your favorite tools and services to enhance your e-commerce experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Integration visualization */}
          <div className="relative">
            <motion.div
              className="relative rounded-xl overflow-hidden border border-purple-500/20 aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />

              {/* Central platform */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="E-Commerce Platform"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              {/* Integration connections */}
              {integrations.map((integration, index) => {
                const angle = index * (360 / integrations.length) * (Math.PI / 180)
                const x = Math.cos(angle) * 120 + 150
                const y = Math.sin(angle) * 120 + 150

                return (
                  <motion.div
                    key={integration.name}
                    className="absolute w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-purple-500/20 flex items-center justify-center"
                    style={{ left: x, top: y }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <integration.icon className="w-8 h-8 text-purple-400" />

                    {/* Connection line */}
                    <svg
                      className="absolute top-1/2 left-1/2 -z-10"
                      width="150"
                      height="150"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg)`,
                      }}
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="120"
                        y2="0"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        strokeOpacity="0.5"
                      />
                    </svg>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Integration details */}
          <div className="space-y-6">
            {integrationCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-purple-500/10"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <category.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-purple-200/70 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.platforms.map((platform, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-200 text-xs">
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const integrations = [
  { name: "Payment", icon: CreditCard },
  { name: "Shipping", icon: Truck },
  { name: "Support", icon: MessageSquare },
  { name: "Marketing", icon: Mail },
  { name: "Social", icon: Share2 },
]

const integrationCategories = [
  {
    title: "Payment Gateways",
    description: "Process payments securely with multiple payment options for your customers",
    icon: CreditCard,
    platforms: ["Stripe", "PayPal", "Square", "Authorize.net", "Apple Pay", "Google Pay"],
  },
  {
    title: "Shipping & Fulfillment",
    description: "Automate shipping processes and provide real-time tracking information",
    icon: Truck,
    platforms: ["ShipStation", "ShipBob", "FedEx", "UPS", "USPS", "DHL"],
  },
  {
    title: "Marketing & Communication",
    description: "Engage customers with personalized marketing campaigns and notifications",
    icon: Mail,
    platforms: ["Mailchimp", "Klaviyo", "HubSpot", "SendGrid", "Twilio"],
  },
  {
    title: "Customer Support",
    description: "Provide excellent customer service with integrated support tools",
    icon: MessageSquare,
    platforms: ["Zendesk", "Intercom", "Freshdesk", "Gorgias", "Help Scout"],
  },
]

