import { Inter } from "next/font/google";
import React from 'react';
import "./globals.css";
import Link from "next/link";
import HeaderNavBar from "./RootComponents/HeaderNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bandar Estates BN",
  description: "Website for Bandar Estates BN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNavBar/>
        {children}
        
      </body>
    </html>
  );
}
