import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Leal - Portfolio",
  description: "David Leal's professional portfolio showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
