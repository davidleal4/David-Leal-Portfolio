import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden overflow-y-auto flex flex-col antialiased">
        <main className="flex-1 w-full min-h-0">
          {children}
        </main>
      </body>
    </html>
  );
}