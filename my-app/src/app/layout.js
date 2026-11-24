import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
});

export const metadata = {
  title: 'Bez Nehod',
  description: 'Aplikace pro autoškoly',
};

export default function RootLayout({ children }) {
return (
    <html lang="cs" className="dark" suppressHydrationWarning>
      <body className={`${jakarta.className} antialiased bg-surface text-ink`}>
        {children}
      </body>
    </html>
  );
}
