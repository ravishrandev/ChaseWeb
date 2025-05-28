import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "CHASEBUILD",
  description: "Website for CHASE Program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter`}>
        <main className="min-h-screen w-screen overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
