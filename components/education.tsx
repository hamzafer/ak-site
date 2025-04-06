"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master of Science - Computational Color and Spectral Imaging", // Combined into one line
      field: "",
      institution: "Erasmus Mundus Joint Degree",
      period: "2023 - 2025",
      location: "Europe",
    },
    {
      degree: "Bachelor of Computer Science",
      field: "",
      institution: "Nazarbayev University",
      period: "2019 - 2023",
      location: "Kazakhstan",
    },
    {
      degree: "Big Data Course",
      field: "",
      institution: "EPAM, TechOrda grant",
      period: "2022 - 2023",
      location: "Kazakhstan",
    },
  ]

  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 text-cyan-300 mt-1 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  {edu.field && <p className="text-gray-300">{edu.field}</p>}
                  <p className="text-cyan-300 mb-2">{edu.institution}</p>

                  <div className="flex items-center text-sm text-gray-400 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

