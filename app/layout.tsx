// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from './components/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Chukwuka Emi',
//   description: 'Senior Software Engineer | Cloud Architect'
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Senior Software Engineer | Cloud Architect" />
        <title>Chukwuka Emi</title>
      </head>
      <body className={`${inter.className} dark:bg-gray-900 bg-gray-200 text-gray-700 dark:text-white`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
