"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Image as ImageIcon, 
  LogOut,
  ShieldAlert
} from "lucide-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (err) {
      console.error(err);
    } finally {
      setLoggingOut(false);
    }
  };

  const menuItems = [
    { name: "Overview", path: "/admin", icon: <LayoutDashboard size={18} /> },
    { name: "Applications", path: "/admin/applications", icon: <FileText size={18} /> },
    { name: "Members Roster", path: "/admin/members", icon: <Users size={18} /> },
    { name: "Gallery Upload", path: "/admin/gallery", icon: <ImageIcon size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-neutral-950 text-white overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-black border-r border-zinc-900 flex flex-col hidden md:flex shrink-0">
        
        {/* Brand */}
        <div className="p-6 border-b border-zinc-900">
          <div className="flex items-center gap-2 text-green-400">
            <ShieldAlert size={24} />
            <span className="text-xl font-black tracking-wide">ADMIN PANEL</span>
          </div>
          <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Tarunyer Alo Master</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <div className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  isActive 
                    ? "bg-green-950/40 text-green-400 border border-green-900/50" 
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}>
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-zinc-900">
          <button 
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-950/20 text-rose-500 hover:bg-rose-950/40 border border-rose-950 transition-all font-semibold"
          >
            <LogOut size={18} />
            {loggingOut ? "Signing Out..." : "Sign Out"}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-neutral-950 relative">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="p-6 md:p-10 relative z-10">
          {children}
        </div>
      </main>

    </div>
  );
}
