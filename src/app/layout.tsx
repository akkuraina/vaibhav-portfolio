import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import StarBackground from '../components/StarBackground';

const cascadiaMono = localFont({
  src: [
    {
      path: '../fonts/CascadiaMono-VariableFont_wght.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../fonts/CascadiaMono-Italic-VariableFont_wght.woff2',
      weight: '100 900',
      style: 'italic',
    }
  ],
  variable: '--font-cascadia-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Akanksha - Full Stack Developer',
  description: 'Portfolio website showcasing my work as a Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cascadiaMono.variable}>
      <body className="font-mono">
        <ThemeProvider>
          <StarBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}