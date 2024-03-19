import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './page.module.css'
import Providers from "@/store/provider";

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
      <body style={{ padding: 0, margin: 0 }} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
