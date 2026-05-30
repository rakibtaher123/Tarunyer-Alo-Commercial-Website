"use client";

import React, { useState } from "react";
import { Mail, ShieldCheck, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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

const Linkedin = ({ size = 24, className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Members() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch("/api/members");
        const json = await response.json();
        if (json.success) {
          setMembers(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, []);

  const filterTabs = [
    { value: "all", label: "All Members", count: members.length },
    { value: "executive", label: "Executive Board", count: members.filter(m => m.category === "executive").length },
    { value: "advisor", label: "Advisors", count: members.filter(m => m.category === "advisor").length },
    { value: "ambassador", label: "Ambassadors", count: members.filter(m => m.category === "ambassador").length },
    { value: "volunteer", label: "Volunteers", count: members.filter(m => m.category === "volunteer").length },
  ];

  // Filtering Logic
  const filteredMembers = members.filter((member) => {
    const matchesTab = activeTab === "all" || member.category === activeTab;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.memberId?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-800/40 text-green-400 text-xs sm:text-sm font-semibold uppercase">
            <ShieldCheck size={14} />
            <span>Official Organization Panel</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Executive <span className="text-green-400">Roster</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            Verify active member IDs and roles within the Tarunyer Alo Youth & Sports Association register.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Interactive Search & Tab Filters */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-zinc-500" size={18} />
            <input
              type="text"
              placeholder="Search by name, role, or ID (e.g. TA-101)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900/60 border border-zinc-800 focus:border-green-600 rounded-2xl py-3 px-12 text-white placeholder-zinc-500 focus:outline-none transition-all duration-300 shadow-inner text-sm sm:text-base"
            />
          </div>

          {/* Tab Filter List */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <Button
                key={tab.value}
                variant={activeTab === tab.value ? "primary" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.value)}
                className="rounded-xl transition-all duration-300 font-semibold px-4 py-2 gap-1.5"
              >
                {tab.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.value ? "bg-black text-green-400" : "bg-zinc-800 text-zinc-400"
                }`}>
                  {tab.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* 3. Members Grid Display */}
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="relative group overflow-hidden bg-neutral-950 border-zinc-900">
                {/* Accent glow on card cover */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-green-500/0 to-transparent group-hover:via-green-500/60 transition-all duration-500" />
                
                <CardContent className="p-8 text-center space-y-6 relative z-10">
                  
                  {/* Styled Avatar Placeholder */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-950 p-[2px] shadow-lg group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500 relative">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-3xl text-green-400 uppercase">
                      {member.name ? member.name.charAt(0) : '?'}
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-zinc-400 font-semibold leading-relaxed">
                      {member.role}
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-black text-green-400 bg-green-950/20 border border-green-900/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      ID: {member.memberId}
                    </span>
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center items-center gap-3.5 pt-3 border-t border-zinc-900">
                    <a
                      href={member.social_links?.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-green-400 transition-colors duration-300"
                      aria-label="Facebook Profile"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={member.social_links?.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-green-400 transition-colors duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${member.social_links?.email || ""}`}
                      className="text-zinc-500 hover:text-green-400 transition-colors duration-300"
                      aria-label="Send Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4 max-w-md mx-auto">
            <Filter size={40} className="text-zinc-600 mx-auto" />
            <h3 className="text-xl font-bold">No active members found</h3>
            <p className="text-zinc-500 text-sm">
              We couldn't find any member matching "{searchQuery}" under the selected tab. Please try checking your spelling.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
