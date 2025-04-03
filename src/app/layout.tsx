import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import AppWrapper from '@/components/AppWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ML Portfolio',
  description: 'A showcase of machine learning projects and expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
} 