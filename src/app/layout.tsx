import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { ClasDisplay } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "UiFry: Manage Your Finance",
  description: "Make The Best Financial Decisions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ClasDisplay.className} bg-white`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
