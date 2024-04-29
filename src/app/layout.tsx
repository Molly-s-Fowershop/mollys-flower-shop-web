import "@/assets/css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-photo-view/dist/react-photo-view.css";
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

        <main className="flex-1 mt-[5.313rem]">
          {children}
          {/* <Template key={routeParam}></Template> */}
        </main>

        <Footer />
      </body>
    </html>
  );
}
