"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Computer vision research visualization",
      caption: "Neural network visualization for image processing",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "3D reconstruction model",
      caption: "3D reconstruction from multiview images",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Signal processing diagram",
      caption: "Advanced signal processing techniques",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Machine learning experiment",
      caption: "Experimental results from ML research",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Image analysis visualization",
      caption: "Image analysis and feature extraction",
    },
  ]

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage + 1) % images.length)
  }

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage((selectedImage - 1 + images.length) % images.length)
  }

  return (
    <section id="gallery">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Research Gallery
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="overflow-hidden rounded-lg border border-white/10">
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-cyan-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-300 transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative max-w-4xl max-h-[80vh]">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                width={800}
                height={600}
                className="object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                <p className="text-white text-center">{images[selectedImage].caption}</p>
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-300 transition-colors"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  )
}

