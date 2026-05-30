"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, MessageSquare, ShieldCheck } from "lucide-react";

export default function AdminOverview() {
  const [stats, setStats] = useState({ applications: 0, members: 0, contacts: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/admin/stats");
        const json = await res.json();
        if (json.success) {
          setStats(json.data);
        }
      } catch (err) {
        console.error("Failed to load stats", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Applications", value: stats.applications, icon: <FileText size={24} />, color: "text-blue-400", bg: "bg-blue-950/30" },
    { label: "Active Members", value: stats.members, icon: <ShieldCheck size={24} />, color: "text-green-400", bg: "bg-green-950/30" },
    { label: "Contact Messages", value: stats.contacts, icon: <MessageSquare size={24} />, color: "text-purple-400", bg: "bg-purple-950/30" },
    { label: "Registered Users", value: stats.users, icon: <Users size={24} />, color: "text-amber-400", bg: "bg-amber-950/30" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-white">System Overview</h1>
        <p className="text-zinc-400 mt-1">High-level statistics for Tarunyer Alo platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <Card key={idx} className="bg-zinc-950 border-zinc-900 overflow-hidden relative group">
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${card.color}`} />
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-500 font-semibold uppercase tracking-wider">{card.label}</p>
                  <h3 className="text-4xl font-black text-white mt-2">
                    {loading ? "..." : card.value}
                  </h3>
                </div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.bg} ${card.color} border border-white/5`}>
                  {card.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Access Area Placeholder */}
      <div className="mt-12 bg-neutral-900 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-xl font-bold text-white mb-2">Welcome to Admin Control</h2>
        <p className="text-zinc-400">
          Use the sidebar to manage volunteer applications, update the executive roster, and upload new photos to the gallery.
        </p>
      </div>
    </div>
  );
}
