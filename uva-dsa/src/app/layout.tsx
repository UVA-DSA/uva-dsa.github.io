import '../styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'UVA-DSA',
  description: 'Dependable Systems and Analytics Research Group',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <div className="container">

        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      </body>
    </html>
  );
}
