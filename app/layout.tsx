import React from 'react';
import './styles.css';

export const metadata = {
  title: 'Myntra Best Winter Jacket under ?2000',
  description: 'Quick links to buy the best winter jackets under ?2000 on Myntra',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
