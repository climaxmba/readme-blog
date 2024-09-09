import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar, { BottomNav } from "../components/navBar/NavBar";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
