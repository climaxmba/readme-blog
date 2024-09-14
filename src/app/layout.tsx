import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar, { BottomNav } from "../components/navBar/NavBar";
import NavbarProvider from "@/components/navBar/NavbarContext";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Readme Blog",
  description: "A comprehensive blogging platform where users can read, and interact with blog posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
        {children}
        <NavbarProvider>
          <BottomNav />
        </NavbarProvider>
      </body>
    </html>
  );
}
