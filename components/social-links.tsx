"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, FileText } from "lucide-react"

export default function SocialLinks() {
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
    <section id="social">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Connect</span>
        </h2>

        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-gray-300 mb-6">
            Feel free to connect with me on these platforms or reach out directly via email.
          </p>

          <div className="flex flex-col space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mr-4">
                  {link.icon}
                </div>
                <span className="text-white group-hover:text-cyan-300 transition-colors">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

