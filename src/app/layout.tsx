import "./globals.css";
import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Molly's Flower Shop",
  description: "The best flowers in town!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-[100vh]">
        <Header />
        <main className="flex-1 mt-[5.188rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
