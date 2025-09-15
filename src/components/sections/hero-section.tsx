"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { personalInfo } from "@/data/portfolio"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
        </div>
      </div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {personalInfo.name}
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground md:text-2xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {personalInfo.title}
              </motion.p>
            </div>
            
            <motion.p 
              className="max-w-[600px] text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="gap-2" asChild>
                <a 
                  href="/resume/David_Leal_Official_Resume.pdf" 
                  download="David_Leal_Official_Resume.pdf"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="gap-2">
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View GitHub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.p 
              className="text-sm text-muted-foreground mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Note: The resume will be downloaded to your default download directory. You can move it to your desktop manually if needed.
            </motion.p>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View GitHub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            
            {/* Quick Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 relative rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHeU_rVF0e81w/profile-displayphoto-shrink_800_800/B4EZajo.8KHIAg-/0/1746502152863?e=1760572800&v=beta&t=W7dsu6oCb5kBtdkJh-gXQ4h2jti6sy1fL-6HSM3-m8o"
                  alt="David Leal Profile Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🤖
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                💼
              </motion.div>
            </div>
          </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div 
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
    </section>
  )
}