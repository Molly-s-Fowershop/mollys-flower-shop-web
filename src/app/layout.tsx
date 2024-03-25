import Container from "@/components/Container";
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
        <Container className="flex-1">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
