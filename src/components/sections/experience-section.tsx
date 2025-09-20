"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/portfolio"
import { Building, Calendar, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return '🎓'
      case 'founding':
        return '🚀'
      case 'entrepreneurial':
        return '💡'
      default:
        return '💼'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300'
      case 'founding':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300'
      case 'entrepreneurial':
        return 'bg-green-500/10 text-green-700 dark:text-green-300'
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-300'
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A journey through data science, software engineering, and entrepreneurship.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-px"></div>

            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <CardTitle className="flex items-center gap-2">
                                <Building className="h-5 w-5 text-primary" />
                                {item.company}
                              </CardTitle>
                              <CardDescription className="font-medium text-foreground">
                                {item.position}
                              </CardDescription>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                {item.duration}
                              </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                              {getTypeIcon(item.type)} {item.type}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants} 
            className="text-center"
          >
            <Card className="mx-auto max-w-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <Briefcase className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Ready for New Opportunities</h3>
                  <p className="text-muted-foreground">
                    I&apos;m actively seeking roles in hedge funds, quant firms, and FAANG companies where I can apply my expertise in AI, finance, and scalable systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}