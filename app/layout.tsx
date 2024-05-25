import Image from 'next/image';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Maiti Labs',
  description: 'Global youth-led Non-Profit Organization',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
