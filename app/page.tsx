import { Suspense } from "react"
import Header from "@/components/header"
import Summary from "@/components/summary"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Publications from "@/components/publications"
import Awards from "@/components/awards"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden minimalist-theme:bg-white minimalist-theme:text-gray-800">
      <Suspense fallback={null}>
        <BackgroundAnimation />
      </Suspense>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />

        <main className="mt-16 space-y-32">
          <Summary />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Experience />
            <Education />
          </div>

          <Projects />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Publications />
            <Awards />
          </div>
        </main>

        <footer className="mt-32 pb-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Akmaral Amanturdieva. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

