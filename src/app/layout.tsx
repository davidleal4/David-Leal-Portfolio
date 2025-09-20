import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { AIAssistant } from '@/components/ai-assistant'

export const metadata: Metadata = {
  title: 'David Leal - AI Data Scientist & Software Engineer',
  description: 'Professional portfolio of David Leal, AI Data Scientist & Software Engineer specializing in Machine Learning, Quantitative Modeling, and Scalable Systems.',
  keywords: ['David Leal', 'AI', 'Data Science', 'Software Engineer', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'David Leal' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <AIAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}