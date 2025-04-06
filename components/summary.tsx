"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, FileText } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/context/theme-context"

export default function Summary() {
  const { theme } = useTheme()

  const skills = [
    "Machine Learning",
    "Computer Vision",
    "Signal Processing",
    "Image Analysis",
    "Feature Extraction",
    "Explainable AI",
    "Optimization Strategies",
    "Multidisciplinary Collaboration",
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/akmaral-amanturdieva",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0000-3286-6114",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:akmaralamanturdieva@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ]

  return (
    <section id="summary" className="relative pt-32">
      <div className="absolute left-1/2 -top-16 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`relative w-48 h-48 rounded-full overflow-hidden ${
            theme === "minimalist"
              ? "border-4 border-gray-200 shadow-md"
              : "border-4 border-cyan-400/30 shadow-lg shadow-cyan-500/20"
          }`}
        >
          <Image
            src="https://www.shutterstock.com/shutterstock/photos/2060087966/display_1500/stock-photo-abstract-contemporary-art-collage-portrait-of-young-woman-with-flowers-on-face-hides-her-eyes-2060087966.jpg"
            alt="Akmaral Amanturdieva"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative ${
          theme === "minimalist" ? "bg-white shadow-md" : "backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl"
        } rounded-2xl p-8 mt-36`}
      >
        {theme === "futuristic" && (
          <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 blur-xl opacity-50" />
        )}

        <h2
          className={`text-3xl font-bold mb-6 relative text-center ${
            theme === "minimalist"
              ? "text-gray-800"
              : "bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
          }`}
        >
          About Me
        </h2>

        <p className={`text-lg mb-8 leading-relaxed ${theme === "minimalist" ? "text-gray-600" : "text-gray-300"}`}>
          I am a Machine Learning Researcher with expertise in Computer Vision, Signal Processing, and Image Analysis.
          My research focuses on developing innovative algorithms and models to solve complex visual computing
          challenges. I am passionate about pushing the boundaries of what's possible in AI-driven image understanding
          and processing.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="outline"
                className={`px-3 py-1 ${
                  theme === "minimalist"
                    ? "bg-gray-100 hover:bg-gray-200 text-blue-600 border-blue-200"
                    : "bg-white/5 hover:bg-white/10 text-cyan-300 border-cyan-500/30"
                }`}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center p-2 px-4 rounded-full transition-all duration-300 group ${
                theme === "minimalist" ? "bg-gray-100 hover:bg-gray-200" : "bg-white/5 hover:bg-white/10"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  theme === "minimalist" ? "bg-blue-500 text-white" : "bg-gradient-to-br from-cyan-400 to-purple-600"
                }`}
              >
                {link.icon}
              </div>
              <span
                className={`group-hover:${
                  theme === "minimalist" ? "text-blue-600" : "text-cyan-300"
                } transition-colors ${theme === "minimalist" ? "text-gray-700" : "text-white"}`}
              >
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

