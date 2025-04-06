"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Image Processing Engineer",
      company: "DxO Labs",
      location: "France",
      period: "2025 - Present",
      description: "Master's Thesis",
    },
    {
      title: "Computer Vision Engineer",
      company: "Vilmorin-Mikado",
      location: "France",
      period: "June 2024 - July 2024",
      description: "Summer Job",
    },
    {
      title: "Research Assistant",
      company: "Nazarbayev University",
      location: "Kazakhstan",
      period: "May 2021 - June 2023",
      description: "",
    },
  ]

  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-cyan-300 mb-2">
                {exp.company} {exp.description && `| ${exp.description}`}
              </p>

              <div className="flex items-center text-sm text-gray-400 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

