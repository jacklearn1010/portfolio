import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinay Pandey — Infrastructure & DevOps",
  description:
    "Portfolio of Vinay Pandey — Executive Infrastructure Services, DevOps, Cloud, and Web Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}