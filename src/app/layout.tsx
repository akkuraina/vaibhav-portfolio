import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import StarBackground from '../components/StarBackground';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
  variable: '--font-inter',
});


export const metadata = {
  title: 'Vaibhav - Artist Manager',
  description: 'Portfolio website showcasing my work as an artist manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`${inter.variable}`}>
        <body>
        <ThemeProvider>
          <StarBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}