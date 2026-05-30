"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Facebook = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={size}
    height={size}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-green-950/60 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-green-950/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Branding & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-950 flex items-center justify-center font-black text-black border border-green-400/30">
                TA
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-wide text-white">
                  Tarunyer Alo
                </h3>
                <span className="text-[10px] text-green-400 tracking-widest font-semibold uppercase">
                  Youth & Sports Association
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              Empowering the next generation of Bangladesh through sports, leadership, and proactive social development.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-green-500 hover:text-black flex items-center justify-center text-zinc-400 transition-all duration-300 border border-zinc-800"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/01893078015"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-green-500 hover:text-black flex items-center justify-center text-zinc-400 font-bold transition-all duration-300 border border-zinc-800"
                aria-label="WhatsApp"
              >
                <span className="text-sm">WA</span>
              </a>
              <a
                href="mailto:tarunyeraloyouthofficial@gmail.com"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-green-500 hover:text-black flex items-center justify-center text-zinc-400 transition-all duration-300 border border-zinc-800"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg border-l-2 border-green-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home Base", href: "/" },
                { label: "About History", href: "/about" },
                { label: "Executive Roster", href: "/members" },
                { label: "Event Media", href: "/gallery" },
                { label: "Contact Panel", href: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-green-400 transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="text-green-500/60 font-semibold">›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg border-l-2 border-green-500 pl-3">
              Office Details
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 mt-0.5 shrink-0" />
                <span> Tongi, Gazipur , Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-500 shrink-0" />
                <a href="tel:01893078015" className="hover:text-green-400 transition-colors">
                  01893078015
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-500 shrink-0" />
                <a href="mailto:tarunyeraloyouthofficial@gmail.com" className="hover:text-green-400 transition-colors">
                  tarunyeraloyouthofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg border-l-2 border-green-500 pl-3">
              Stay Updated
            </h4>
            <p className="text-sm leading-relaxed">
              Subscribe to our newsletter to receive the latest updates, event reports, and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-green-600 rounded-xl py-3 px-4 pr-12 text-sm text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-green-500 hover:bg-green-400 text-black px-3 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
                aria-label="Subscribe"
              >
                <Send size={15} />
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center gap-2 text-green-400 text-xs mt-2 animate-pulse">
                <CheckCircle2 size={14} />
                <span>Subscription successful! Thank you.</span>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Tarunyer Alo Youth & Sports Association. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-zinc-500">
            <span className="text-green-500/80 font-bold">“Building Youth, Building Bangladesh.”</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
