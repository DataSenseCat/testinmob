import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background text-foreground">
      <Header />
      <main className="py-10">{children}</main>
      <Footer />
    </div>
  );
}
