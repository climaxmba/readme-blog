import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import NavBar, { BottomNav } from "../components/navBar/NavBar";
import NavbarProvider from "@/components/navBar/NavbarContext";
import Footer from "@/components/footer/Footer";
import "./globals.scss";

const mono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: ["Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: "Readme Blog",
  description:
    "A comprehensive blogging platform where users can read, and interact with blog posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: mono.style.fontFamily,
          fontStyle: mono.style.fontStyle,
        }}
      >
        <NavbarProvider>
          <NavBar />
        </NavbarProvider>
        {children}
        <NavbarProvider>
          <BottomNav />
        </NavbarProvider>
        <Footer />
      </body>
    </html>
  );
}
