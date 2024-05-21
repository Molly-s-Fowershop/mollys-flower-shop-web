import Header from "@/shared/components/layout/TheHeader";
import Footer from "@/shared/components/layout/TheFooter";
import { Toaster } from "sonner";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <div lang="en">
      <div className="flex flex-col min-h-[100vh]">
        <Header />

        <main className="flex-1 mt-[5.313rem]">
          <Outlet />
        </main>

        <Footer />

        <Toaster richColors />
        <ScrollRestoration />
      </div>
    </div>
  );
}
