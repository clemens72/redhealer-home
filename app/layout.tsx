import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Red Healer Band | Official Website',
  description: 'Official website of Red Healer Band - Music, Tour Dates, and More',
  icons: {
    icon: 'https://raw.githubusercontent.com/clemens72/redhealer-home/d6965f9ab942d3d80bc5a42bd722777a2a39a48f/public/Favicon.png',
    shortcut: 'https://raw.githubusercontent.com/clemens72/redhealer-home/d6965f9ab942d3d80bc5a42bd722777a2a39a48f/public/Favicon.png',
    apple: 'https://raw.githubusercontent.com/clemens72/redhealer-home/d6965f9ab942d3d80bc5a42bd722777a2a39a48f/public/Favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}