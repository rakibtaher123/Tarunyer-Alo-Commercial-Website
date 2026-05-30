"use client";

import React from "react";
import Link from "next/link";
import { Trophy, Users, Heart, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const activities = [
    {
      icon: Trophy,
      title: "Sports Activities",
      titleBn: "ক্রীড়া কার্যক্রম",
      desc: "Football tournaments, cricket leagues, and local sports events targeting youth physical health.",
      descBn: "ফুটবল টুর্নামেন্ট, ক্রিকেট লিগ এবং যুব শারীরিক সক্ষমতা বৃদ্ধির লক্ষ্যে স্থানীয় ক্রীড়া ইভেন্ট আয়োজন।",
    },
    {
      icon: Users,
      title: "Youth Leadership",
      titleBn: "যুব নেতৃত্ব",
      desc: "Empowering next-gen leaders through unity, skill-building education, and positive civic involvement.",
      descBn: "একতা, দক্ষতা বৃদ্ধিমূলক শিক্ষা এবং ইতিবাচক নাগরিক সম্পৃক্ততার মাধ্যমে আগামী দিনের নেতৃত্ব তৈরি।",
    },
    {
      icon: Heart,
      title: "Social Development",
      titleBn: "সামাজিক উন্নয়ন",
      desc: "Emergency relief drives, winter campaigns, blood donations, and extensive volunteer programs.",
      descBn: "জরুরী ত্রাণ বিতরণ, শীতকালীন বস্ত্র বিতরণ ক্যাম্পেইন, রক্তদান কর্মসূচি এবং ব্যাপক সেবামূলক কর্মকাণ্ড।",
    },
  ];

  const stats = [
    { value: "১০+", label: "Completed Projects", labelBn: "সম্পন্ন প্রজেক্ট" },
    { value: "১,০০০+", label: "Active Volunteers", labelBn: "সক্রিয় স্বেচ্ছাসেবক" },
    { value: "৫,০০০+", label: "Beneficiaries Served", labelBn: "উপকৃত সাধারণ মানুষ" },
    { value: "৬৪", label: "District Reach", labelBn: "জেলা ভিত্তিক কার্যক্রম" },
  ];

  return (
    <div className="relative overflow-hidden bg-black text-white">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.06)_0,transparent_60%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-green-950/60 text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider animate-pulse">
            <Zap size={14} />
            <span>Building Youth, Building Bangladesh</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15]">
            Empowering the Next Generation <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent text-glow-green">
              of Bangladesh
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-zinc-400 leading-relaxed font-light">
            Tarunyer Alo Youth & Sports Association is a premier national youth organization dedicated to creating future leaders through sports discipline, unity, and meaningful humanitarian initiatives.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto sm:max-w-none">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_30px_rgba(34,197,94,0.25)]">
                Join Our Organization
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Activities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Motto & Intro */}
      <section className="py-16 border-y border-zinc-900 bg-zinc-950/20">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-green-400">
            দেশপ্রেম, ঐক্য ও উন্নয়নের পথে তারুণ্যের অঙ্গীকার
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            আমরা বিশ্বাস করি বাংলাদেশের প্রকৃত শক্তি তারুণ্য। যুবসমাজকে খেলাধুলা, মানবিক মূল্যবোধ ও সঠিক নেতৃত্ব চর্চায় উদ্বুদ্ধ করে একটি সমৃদ্ধ এবং বৈষম্যহীন দেশ গড়ে তোলাই আমাদের প্রধান লক্ষ্য।
          </p>
        </div>
      </section>

      {/* 3. Core Activities Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Our Core <span className="text-green-400">Activities</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Inspiring collaboration, sportsmanship, and leadership across all districts.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="group relative border-zinc-850 bg-neutral-900/30">
                {/* Visual card hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-green-950/40 border border-green-800/40 flex items-center justify-center mx-auto text-green-400 group-hover:text-black group-hover:bg-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-500">
                    <Icon size={30} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-green-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-green-500/80 font-bold uppercase tracking-wider">
                      {item.titleBn}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="text-zinc-500 text-xs leading-relaxed italic border-t border-zinc-850 pt-3">
                      {item.descBn}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 4. Statistics Banner */}
      <section className="py-20 relative bg-zinc-950 border-y border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(34,197,94,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2 group">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-green-400 text-glow-green group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="space-y-0.5">
                  <p className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                    {stat.label}
                  </p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs">
                    {stat.labelBn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Promotional CTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="glass-panel p-8 sm:p-16 rounded-[40px] border border-green-500/20 relative z-10 space-y-6">
          <ShieldCheck size={48} className="text-green-400 mx-auto" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Make an <span className="text-green-400">Impact</span>?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Join thousands of active youths across Bangladesh who are leading change in sports, civic engagement, and social support. Become a certified volunteer or general member today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto sm:max-w-none">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Apply for Membership
              </Button>
            </Link>
            <a href="https://wa.me/01893078015" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Connect via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
