"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutInfo } from "@/data/portfolio";
import { GraduationCap, Award, Globe } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
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
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Passionate about leveraging AI and data science to solve complex
              problems in finance and technology.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {aboutInfo.summary}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        {aboutInfo.education.degree} at{" "}
                        {aboutInfo.education.institution}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {aboutInfo.education.status}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills and Certifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {aboutInfo.languages.map((language) => (
                      <Badge key={language} variant="secondary">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {aboutInfo.certifications.map((cert, index) => (
                      <motion.div
                        key={cert}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-muted/50"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications in Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Certifications in Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aboutInfo.certificationsInProgress.map((cert) => (
                      <div key={cert.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{cert.name}</span>
                          <span>{cert.progress}%</span>
                        </div>
                        <ProgressBar progress={cert.progress} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}