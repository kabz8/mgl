import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
