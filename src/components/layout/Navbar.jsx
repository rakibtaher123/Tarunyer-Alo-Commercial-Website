"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Info, Users, Image as ImageIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/members", label: "Members", icon: Users },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 text-white w-full",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-green-950/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-black/40 backdrop-blur-sm border-b border-zinc-900/30 py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-950 flex items-center justify-center font-black text-black border border-green-400/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300">
              TA
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent group-hover:text-green-400 transition-colors duration-300">
                Tarunyer Alo
              </h1>
              <span className="text-[9px] sm:text-xs text-zinc-400 tracking-wider font-medium uppercase">
                Youth & Sports Association
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 border border-zinc-800/80 rounded-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "relative rounded-xl transition-all duration-300 font-medium px-4 py-2 gap-1.5",
                      isActive
                        ? "bg-green-500 text-black hover:bg-green-400 hover:text-black shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                        : "text-zinc-300 hover:text-green-400 hover:bg-zinc-800/30"
                    )}
                  >
                    <Icon size={15} />
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Action Trigger / Join button */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <Button variant="primary" size="sm" className="rounded-xl">
                Join Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-green-400 hover:border-green-800/40 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={cn(
          "md:hidden absolute w-full left-0 bg-black/95 backdrop-blur-2xl border-b border-green-950/80 transition-all duration-300 ease-in-out overflow-hidden shadow-2xl",
          menuOpen ? "max-h-[350px] opacity-100 py-6 px-4" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300",
                    isActive
                      ? "bg-green-600 text-black shadow-lg"
                      : "text-zinc-300 hover:text-green-400 hover:bg-zinc-900/60"
                  )}
                >
                  <Icon size={18} />
                  {link.label}
                </button>
              </Link>
            );
          })}
          <Link href="/contact" className="mt-2">
            <Button variant="primary" className="w-full py-3.5 rounded-xl">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
