import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NYZA Studio | Custom Web Solutions & Social Media",
  description: "Custom Web Solutions & Social Media Stuff. If you can dream it, we can create it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
