import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/navBar';
import ThemeProvider from '@/components/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chatbot & Dashboard',
  description: 'A simple chatbot to manage usage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ThemeProvider>
          <NavBar />
          <main className="h-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
