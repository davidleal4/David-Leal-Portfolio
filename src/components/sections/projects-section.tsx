"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import Link from "next/link"
import { projectFilters } from "@/data/portfolio"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    const sampleProjects: GitHubRepo[] = [
      {
        id: 1,
        name: "stock-prediction-ml",
        description: "Advanced stock prediction platform using CatBoost, LightGBM, and XGBoost with NLP sentiment analysis",
        html_url: "https://github.com/davidleal4/stock-prediction-ml",
        homepage: null,
        stargazers_count: 25,
        forks_count: 8,
        language: "Python",
        topics: ["machine-learning", "finance", "data-science", "prediction"],
        updated_at: "2024-01-15T00:00:00Z"
      },
      {
        id: 2,
        name: "ai-education-saas",
        description: "SaaS AI education platform with cloud deployment and real-time analytics",
        html_url: "https://github.com/davidleal4/ai-education-saas",
        homepage: "https://ai-edu-platform.vercel.app",
        stargazers_count: 42,
        forks_count: 15,
        language: "TypeScript",
        topics: ["saas", "education", "ai", "full-stack"],
        updated_at: "2024-02-10T00:00:00Z"
      },
      {
        id: 3,
        name: "trading-dashboard",
        description: "Real-time trading dashboard with renewable energy forecasting integration",
        html_url: "https://github.com/davidleal4/trading-dashboard",
        homepage: null,
        stargazers_count: 18,
        forks_count: 6,
        language: "Python",
        topics: ["trading", "dashboard", "energy", "data-visualization"],
        updated_at: "2024-01-20T00:00:00Z"
      },
      {
        id: 4,
        name: "enterprise-api-gateway",
        description: "Scalable API gateway with microservices architecture and AWS integration",
        html_url: "https://github.com/davidleal4/enterprise-api-gateway",
        homepage: null,
        stargazers_count: 33,
        forks_count: 12,
        language: "JavaScript",
        topics: ["api", "microservices", "aws", "enterprise"],
        updated_at: "2024-02-05T00:00:00Z"
      }
    ]

    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github-repos')
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error('Error fetching repositories:', error)
        // Fallback to sample projects if API fails
        setRepos(sampleProjects)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const sampleProjects: GitHubRepo[] = [
    {
      id: 1,
      name: "stock-prediction-ml",
      description: "Advanced stock prediction platform using CatBoost, LightGBM, and XGBoost with NLP sentiment analysis",
      html_url: "https://github.com/davidleal4/stock-prediction-ml",
      homepage: null,
      stargazers_count: 25,
      forks_count: 8,
      language: "Python",
      topics: ["machine-learning", "finance", "data-science", "prediction"],
      updated_at: "2024-01-15T00:00:00Z"
    },
    {
      id: 2,
      name: "ai-education-saas",
      description: "SaaS AI education platform with cloud deployment and real-time analytics",
      html_url: "https://github.com/davidleal4/ai-education-saas",
      homepage: "https://ai-edu-platform.vercel.app",
      stargazers_count: 42,
      forks_count: 15,
      language: "TypeScript",
      topics: ["saas", "education", "ai", "full-stack"],
      updated_at: "2024-02-10T00:00:00Z"
    },
    {
      id: 3,
      name: "trading-dashboard",
      description: "Real-time trading dashboard with renewable energy forecasting integration",
      html_url: "https://github.com/davidleal4/trading-dashboard",
      homepage: null,
      stargazers_count: 18,
      forks_count: 6,
      language: "Python",
      topics: ["trading", "dashboard", "energy", "data-visualization"],
      updated_at: "2024-01-20T00:00:00Z"
    },
    {
      id: 4,
      name: "enterprise-api-gateway",
      description: "Scalable API gateway with microservices architecture and AWS integration",
      html_url: "https://github.com/davidleal4/enterprise-api-gateway",
      homepage: null,
      stargazers_count: 33,
      forks_count: 12,
      language: "JavaScript",
      topics: ["api", "microservices", "aws", "enterprise"],
      updated_at: "2024-02-05T00:00:00Z"
    }
  ]

  const categorizeProject = (repo: GitHubRepo): string[] => {
    const categories: string[] = []
    
    if (repo.topics.some(topic => 
      ['machine-learning', 'ml', 'ai', 'artificial-intelligence'].includes(topic)
    )) {
      categories.push('machine-learning')
    }
    
    if (repo.topics.some(topic => 
      ['data-science', 'analytics', 'visualization', 'prediction'].includes(topic)
    )) {
      categories.push('data-science')
    }
    
    if (repo.topics.some(topic => 
      ['full-stack', 'saas', 'web-app', 'frontend', 'backend'].includes(topic)
    )) {
      categories.push('full-stack')
    }
    
    if (repo.language || repo.topics.some(topic => 
      ['api', 'microservices', 'enterprise', 'architecture'].includes(topic)
    )) {
      categories.push('software-engineering')
    }
    
    return categories.length > 0 ? categories : ['software-engineering']
  }

  const filteredProjects = repos.filter(repo => {
    if (selectedFilter === 'all') return true
    const categories = categorizeProject(repo)
    return categories.includes(selectedFilter)
  })

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

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A showcase of my work in AI, data science, and software engineering.
            </p>
          </motion.div>

          {/* Project Filters */}
          <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {projectFilters.map((filter) => (
                <TabsTrigger key={filter.id} value={filter.id}>
                  {filter.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Projects Grid */}
            <TabsContent value={selectedFilter} className="mt-8">
              {loading ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader>
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-full"></div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded w-full"></div>
                          <div className="h-3 bg-muted rounded w-2/3"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredProjects.map((repo) => (
                    <motion.div key={repo.id} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Github className="h-5 w-5 text-primary" />
                            {repo.name}
                          </CardTitle>
                          <CardDescription>
                            {repo.description || "No description available"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Stats */}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              {repo.stargazers_count}
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="h-4 w-4" />
                              {repo.forks_count}
                            </div>
                            {repo.language && (
                              <Badge variant="secondary">{repo.language}</Badge>
                            )}
                          </div>

                          {/* Topics */}
                          <div className="flex flex-wrap gap-1">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <Badge key={topic} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                Code
                              </Link>
                            </Button>
                            {repo.homepage && (
                              <Button size="sm" asChild>
                                <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Demo
                                </Link>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </TabsContent>
          </Tabs>

          {/* GitHub CTA */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" asChild>
              <Link href="https://github.com/davidleal4" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}