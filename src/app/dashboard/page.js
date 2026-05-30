"use client";

import React, { useState, useEffect } from "react";
import { User, LogOut, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-900 pb-8">
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl font-black tracking-tight">
              Customer <span className="text-green-400">Dashboard</span>
            </h1>
            <p className="text-zinc-400 text-sm">Welcome back! Manage your Tarunyer Alo profile here.</p>
          </div>
          <Button onClick={handleLogout} disabled={loading} variant="outline" className="border-rose-900/50 text-rose-500 hover:bg-rose-950/30 rounded-xl px-6 py-5 gap-2">
            <LogOut size={16} /> Logout
          </Button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <Card className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-900/80 rounded-[32px] overflow-hidden shadow-2xl relative group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent group-hover:via-green-500/70 transition-all duration-500" />
            <CardContent className="p-8 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-green-950/40 flex items-center justify-center text-green-400 border border-green-800/40">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Profile Status</h3>
                <p className="text-sm text-zinc-500 mt-2">Your account is active. You can now access special volunteer features.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-900/80 rounded-[32px] overflow-hidden shadow-2xl relative group">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent group-hover:via-green-500/70 transition-all duration-500" />
            <CardContent className="p-8 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-green-950/40 flex items-center justify-center text-green-400 border border-green-800/40">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Volunteer Registration</h3>
                <p className="text-sm text-zinc-500 mt-2 mb-4">Want to actively participate? Submit a volunteer registration form.</p>
                <Link href="/join">
                  <Button variant="primary" className="rounded-xl font-bold px-6">Apply Now</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
