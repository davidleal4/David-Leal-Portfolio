# David Leal - Professional Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **AI Assistant**: Interactive chat widget powered by intelligent responses
- **Project Showcase**: Auto-fetches projects from GitHub API with filtering
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Mobile-first approach with seamless adaptation
- **Contact Form**: Functional contact form with validation
- **Professional Sections**: Hero, About, Experience, Projects, Skills, Contact

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + Custom CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── chat/          # AI assistant endpoint
│   │   ├── contact/       # Contact form endpoint
│   │   └── github-repos/  # GitHub API integration
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/              # Reusable UI components
│   └── ai-assistant.tsx  # AI chat widget
├── data/
│   └── portfolio.ts      # Portfolio data and content
└── lib/
    └── utils.ts          # Utility functions
```

## 🔧 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/davidleal4/David-Leal-Portfolio.git
   cd David-Leal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update your details in `src/data/portfolio.ts`:
- Personal info (name, title, contact)
- About section content
- Professional experience
- Skills and certifications

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Components use Tailwind classes for easy styling updates

### AI Assistant
The AI assistant uses keyword-based responses. For production, integrate with OpenAI API:
1. Add your OpenAI API key to environment variables
2. Update `src/app/api/chat/route.ts` to use OpenAI API
3. Customize the assistant's knowledge base and personality

## 📱 Responsive Design

The portfolio is designed mobile-first with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms
The project is compatible with any platform supporting Next.js:
- Netlify
- Railway
- Digital Ocean App Platform

## 📧 Contact Integration

The contact form is ready for integration with:
- Email services (Nodemailer, SendGrid, Mailgun)
- Database storage
- CRM systems
- Slack/Discord notifications

## 🔒 Environment Variables

For production deployment, configure:
```env
OPENAI_API_KEY=your_openai_api_key_here
GITHUB_TOKEN=your_github_token_here (optional, for higher API limits)
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/davidleal4/David-Leal-Portfolio/issues).

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out:
- Email: davidlealwork@gmail.com
- LinkedIn: [David Leal](https://www.linkedin.com/in/david-leal-163a832a9/)
- GitHub: [@davidleal4](https://github.com/davidleal4)

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS