import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CartInitializer from "@/components/CartInitializer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Order App",
  description: "Order your favorite food online",
};

export default async function RootLayout({
  children,
}: // modal,
Readonly<{
  children: React.ReactNode;
  // modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartInitializer>
          <Header />
          {children}
          {/* {modal} */}
        </CartInitializer>
      </body>
    </html>
  );
}
