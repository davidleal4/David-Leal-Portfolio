"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <motion.span 
              className="hidden font-bold sm:inline-block text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              David Leal
            </motion.span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection('about')}
              className="transition-colors hover:text-foreground/80"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="transition-colors hover:text-foreground/80"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="transition-colors hover:text-foreground/80"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="transition-colors hover:text-foreground/80"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="transition-colors hover:text-foreground/80"
            >
              Contact
            </button>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-2">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href={personalInfo.linkedinProfile} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href={`mailto:${personalInfo.email}`}>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
      </div>
    </motion.header>
  )
}