import { NextRequest, NextResponse } from 'next/server'
import { personalInfo, aboutInfo, experience, skills } from '@/data/portfolio'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Create a comprehensive context about David
    const davidContext = `
    You are a professional portfolio assistant for David Leal. Here's his complete profile:

    PERSONAL INFO:
    - Name: ${personalInfo.name}
    - Title: ${personalInfo.title}
    - Tagline: ${personalInfo.tagline}
    - Location: ${personalInfo.location}
    - Email: ${personalInfo.email}
    - GitHub: ${personalInfo.github}
    - LinkedIn: ${personalInfo.linkedinProfile}

    BACKGROUND:
    ${aboutInfo.summary}
    
    Education: ${aboutInfo.education.degree} at ${aboutInfo.education.institution} (${aboutInfo.education.status})
    Languages: ${aboutInfo.languages.join(', ')}
    Certifications: ${aboutInfo.certifications.join(', ')}

    PROFESSIONAL EXPERIENCE:
    ${experience.map(exp => `
    - ${exp.position} at ${exp.company} (${exp.duration})
      ${exp.description}
      Technologies: ${exp.technologies.join(', ')}
    `).join('\n')}

    TECHNICAL SKILLS:
    Languages: ${skills.languages.map(s => `${s.name} (${s.level})`).join(', ')}
    Frameworks: ${skills.frameworks.map(s => `${s.name} (${s.level})`).join(', ')}
    Cloud: ${skills.cloud.map(s => `${s.name} (${s.level})`).join(', ')}
    Expertise: ${skills.expertise.map(s => `${s.name} (${s.level})`).join(', ')}

    INSTRUCTIONS:
    - Answer professionally and concisely
    - Highlight David's strengths in AI, software engineering, finance, and cloud systems
    - Position David as a top candidate for hedge funds, quant firms, and FAANG companies
    - Maintain a polished, recruiter-friendly tone
    - If asked about something not in David's profile, politely redirect to his strengths
    - Encourage users to contact David directly for detailed discussions
    `

    // For demo purposes, we'll use a simple response system
    // In production, you would integrate with OpenAI API
    const response = generateResponse(message.toLowerCase(), davidContext)

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}

function generateResponse(message: string, context: string): string {
  // Simple keyword-based responses for demo
  // In production, replace with OpenAI API call
  
  if (message.includes('experience') || message.includes('work') || message.includes('job')) {
    return "David has excellent experience spanning both industry and entrepreneurship. He's currently a Data Science Intern at Macquarie Group working with multi-million dollar trading datasets, achieving 70% faster analysis through ML optimization. He's also Co-Founder of Almada-Digital LLC, where he architects enterprise systems and cloud-native applications. His combination of hands-on finance experience and technical leadership makes him ideal for quantitative roles at hedge funds and tech companies."
  }
  
  if (message.includes('skill') || message.includes('technical') || message.includes('programming')) {
    return "David has a strong technical foundation with expert-level skills in Python, advanced proficiency in C++, TypeScript, and SQL. He's experienced with frameworks like React, Next.js, Django, and Flask, plus cloud technologies including AWS, Docker, and CI/CD pipelines. His expertise spans machine learning, API development, scalable architecture, and enterprise solutions - perfect for both technical and leadership roles."
  }
  
  if (message.includes('project') || message.includes('portfolio') || message.includes('github')) {
    return "David has worked on impressive projects including a stock prediction platform using CatBoost, LightGBM, and XGBoost with NLP, a SaaS AI education platform with cloud deployment, and trading dashboards with renewable energy forecasting. His projects demonstrate end-to-end capabilities from ML models to production applications. You can explore his work on GitHub at github.com/davidleal4."
  }
  
  if (message.includes('finance') || message.includes('trading') || message.includes('quant')) {
    return "David has direct experience in quantitative finance through his internship at Macquarie Group, where he built ML models for virtual power trading on multi-million dollar datasets. He developed dashboards for renewable energy forecasts integrated into trading strategies and created full-stack Python apps for data ingestion and forecasting. This combination of AI expertise and finance domain knowledge makes him an excellent candidate for hedge funds and quant firms."
  }
  
  if (message.includes('ai') || message.includes('machine learning') || message.includes('ml')) {
    return "David specializes in AI and machine learning with hands-on experience using advanced algorithms like CatBoost, LightGBM, and XGBoost. He's built ML models for financial trading, developed AI education platforms, and created end-to-end data pipelines. His AI projects span multiple domains including finance, education, and business applications, demonstrating his ability to apply ML solutions to real-world problems."
  }
  
  if (message.includes('faang') || message.includes('google') || message.includes('amazon') || message.includes('meta') || message.includes('apple') || message.includes('netflix')) {
    return "David is well-positioned for FAANG companies with his combination of technical excellence, scalable systems experience, and product mindset. His full-stack development skills, cloud architecture expertise, and experience building SaaS platforms align perfectly with big tech requirements. Plus his entrepreneurial background at Almada-Digital shows he can drive product innovation and technical leadership."
  }
  
  if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
    return "You can contact David directly at davidlealwork@gmail.com or connect with him on LinkedIn at linkedin.com/in/david-leal-163a832a9. He's actively seeking opportunities in hedge funds, quant firms, and FAANG companies where he can apply his expertise in AI, finance, and scalable systems. I'd encourage reaching out - he's always excited to discuss how his background can contribute to innovative teams!"
  }
  
  if (message.includes('education') || message.includes('university') || message.includes('degree')) {
    return "David is currently pursuing Computer Science at the University of Houston and has impressive certifications including Python and C++ certifications, AWS certification, and MIT Professional Education. He's trilingual (English, Spanish, French) and has demonstrated academic excellence alongside his professional achievements."
  }
  
  // Default response
  return "That's a great question! David Leal is an exceptional AI Data Scientist & Software Engineer with experience spanning finance, cloud systems, and machine learning. He's worked with multi-million dollar datasets at Macquarie Group and built scalable enterprise solutions as Co-Founder of Almada-Digital LLC. What specific aspect of his background would you like to know more about? I can tell you about his technical skills, projects, finance experience, or career goals."
}