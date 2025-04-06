"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function Publications() {
  const publications = [
    {
      title: "Dataset for Automatic Region-based Coronary Artery Disease Diagnostics",
      journal: "Scientific Data",
      year: "2024",
      link: "https://example.com/dataset-coronary-artery-diagnostics",
    },
    {
      title: "Shadow Removal - Improving TSB Estimation using Bilipic",
      journal: "Zenodo",
      year: "2025",
      link: "https://example.com/shadow-removal-tsb",
    },
    {
      title: "Efficient Transformer for High Resolution Image Motion Deblurring",
      journal: "arXiv",
      year: "2025",
      link: "https://example.com/efficient-transformer-deblurring",
    },
  ]

  return (
      <section id="publications">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Publications
          </span>
          </h2>

          <div className="space-y-5">
            {publications.map((pub, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex">
                    <FileText className="w-5 h-5 text-cyan-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-cyan-300 transition-colors"
                        >
                          {pub.title}
                        </a>
                      </h3>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-gray-300">
                          <span className="text-cyan-300">{pub.journal}</span> • {pub.year}
                        </p>
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

