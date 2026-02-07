import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLenis } from "@/hooks/useLenis";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useLenis();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
