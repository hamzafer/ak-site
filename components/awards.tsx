"use client"

import { motion } from "framer-motion"
import { Trophy, Calendar } from "lucide-react"

export default function Awards() {
  const awards = [
    {
      title: "2nd Place in Machine Learning Hackathon",
      organization: "Nazarbayev University",
      year: "2023",
    },
    {
      title: "1st Place in Datathon",
      organization: "Nazarbayev University",
      year: "2022",
    },
  ]

  return (
    <section id="awards">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Awards</span>
        </h2>

        <div className="space-y-5">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex">
                <Trophy className="w-5 h-5 text-cyan-300 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{award.title}</h3>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-300">{award.organization}</p>
                    <div className="flex items-center ml-4 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{award.year}</span>
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

