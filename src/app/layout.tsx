import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "ST PIZZA",
  description: "Everything's better with Pizza. Pizza ordering application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-w-screen  flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-10 py-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
