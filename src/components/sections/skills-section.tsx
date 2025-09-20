"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio"
import { Code, Cloud, Wrench, Lightbulb } from "lucide-react"

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.languages,
      color: "text-blue-500"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: skills.frameworks,
      color: "text-green-500"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: skills.cloud,
      color: "text-purple-500"
    },
    {
      title: "Core Expertise",
      icon: Lightbulb,
      skills: skills.expertise,
      color: "text-orange-500"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500'
      case 'Advanced':
        return 'bg-blue-500'
      case 'Intermediate':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section id="skills" className="py-20">
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
              Technical Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A comprehensive toolkit for building scalable AI and software solutions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.5 
                        }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${
                              skill.level === 'Expert' ? 'bg-green-500/10 text-green-700 dark:text-green-300' :
                              skill.level === 'Advanced' ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300' :
                              'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300'
                            }`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                            initial={{ width: 0 }}
                            whileInView={{ 
                              width: skill.level === 'Expert' ? '95%' : 
                                     skill.level === 'Advanced' ? '85%' : '70%' 
                            }}
                            transition={{ 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                              duration: 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technical Highlights */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-semibold">Technical Highlights</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Programming Languages</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">10+</div>
                      <div className="text-sm text-muted-foreground">Frameworks & Tools</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">3+</div>
                      <div className="text-sm text-muted-foreground">Cloud Platforms</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications showcase */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Recent Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: "AWS Cloud Practitioner", icon: "☁️" },
                    { name: "Python Certified", icon: "🐍" },
                    { name: "C++ Programming", icon: "⚡" },
                    { name: "MIT Professional Education", icon: "🎓" }
                  ].map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg"
                    >
                      <span className="text-xl">{cert.icon}</span>
                      <span className="font-medium">{cert.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}