import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/providers";
import ProtectedRoutes from "@/components/auth/ProtectedRoutes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent.Me.Now",
  description:
    "Rent.Me.Now is a modern car rental platform that offers quick, easy, and affordable vehicle booking at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <ProtectedRoutes>{children}</ProtectedRoutes>
        </Provider>
      </body>
    </html>
  );
}
