"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Eye, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Deep Learning for Predictive Rendering of 3D Printed Objects",
      year: "2024",
      description:
        "Developed a deep learning model to predict the appearance of 3D printed objects before manufacturing, reducing material waste and improving quality control.",
    },
    {
      title: "Efficient Transformer for High-Resolution Image Motion Deblurring",
      year: "2024",
      description:
        "Created a novel transformer-based architecture for deblurring high-resolution images with superior performance and reduced computational requirements.",
    },
    {
      title: "Shadow Removal for Improving TSB Estimation with Image Processing",
      year: "2024",
      description:
        "Implemented advanced shadow removal techniques to enhance Total Suspended Solids (TSB) estimation in water quality monitoring applications.",
    },
    {
      title: "Domain Adaptation of Iris Images for VR/AR Authentication",
      year: "2024",
      description:
        "Developed domain adaptation techniques for iris recognition in virtual and augmented reality environments, improving security and user experience.",
    },
    {
      title: "3D Reconstruction from Multiview",
      year: "2024",
      description:
        "Built a system for accurate 3D reconstruction from multiple 2D images, with applications in cultural heritage preservation and virtual tourism.",
    },
    {
      title: "Real-time 3D/XR Visualization",
      year: "2024",
      description:
        "Created a framework for real-time 3D and extended reality visualization of complex scientific data, enhancing understanding and analysis capabilities.",
    },
    {
      title: "Automatic Coronary Artery Disease Diagnostics",
      year: "2022 - 2023",
      description:
        "Developed an AI-based system for automatic detection and diagnosis of coronary artery disease from medical imaging, improving early detection rates.",
    },
  ]

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Research Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card
                    className="backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full flex flex-col"
                    onMouseEnter={() => setActiveProject(index)}
                    onMouseLeave={() => setActiveProject(null)}
                  >
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="mb-4 flex justify-between items-start">
                        <Code2 className="w-8 h-8 text-cyan-400" />
                        <span className="text-sm text-gray-400">{project.year}</span>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 text-white">{project.title}</h3>

                      <div className="mt-auto pt-4 flex items-center text-cyan-300 text-sm font-medium">
                        <span>View details</span>
                        <ChevronRight
                          className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeProject === index ? "translate-x-1" : ""}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="bg-black/90 border border-white/10 backdrop-blur-lg text-white">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-cyan-300">{project.title}</DialogTitle>
                  </DialogHeader>

                  <div className="mt-4">
                    <p className="text-gray-300">{project.description}</p>

                    <div className="mt-6 flex items-center text-sm text-gray-400">
                      <Eye className="w-4 h-4 mr-2" />
                      <span>Year: {project.year}</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

