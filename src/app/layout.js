import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tarunyer Alo – Leading Youth Organization in Bangladesh",
  description: "Tarunyer Alo Youth & Sports Association is a leading youth organization in Bangladesh focused on sports, leadership, social development, and community empowerment.",
  keywords: "Youth Organization in Bangladesh, Sports Association Bangladesh, Youth Leadership Organization, Tarunyer Alo, Bangladesh Youth Club, Social Youth Organization",
  authors: [{ name: "Tarunyer Alo" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }) {
  return (
    <html lang="bn" className="h-full antialiased dark">
      <body className="bg-black text-zinc-100 min-h-screen flex flex-col selection:bg-green-500/30 selection:text-white">
        {/* Glowing visual backdrop */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-b from-green-950/10 via-transparent to-transparent blur-[120px] pointer-events-none z-0" />
        
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
