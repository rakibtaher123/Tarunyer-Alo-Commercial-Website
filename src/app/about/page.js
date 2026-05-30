"use client";

import React from "react";
import { Shield, Target, Compass, Award, Users2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: "Mission",
      titleBn: "লক্ষ্য",
      desc: "Building youth leadership through active sports participation and meaningful community social work.",
      descBn: "ক্রীড়া এবং গঠনমূলক সামাজিক কাজের মাধ্যমে দেশের যুবসমাজকে একত্রিত করে দক্ষ ও দেশপ্রেমিক নেতৃত্ব গড়ে তোলা।",
    },
    {
      icon: Compass,
      title: "Vision",
      titleBn: "উদ্দেশ্য",
      desc: "Creating a united, disciplined, and highly empowered next generation throughout Bangladesh.",
      descBn: "শৃঙ্খলা, একতা ও মানবিক মূল্যবোধের ভিত্তিতে একটি সুসংগঠিত ও স্বনির্ভর যুব সমাজ বিনির্মাণ করা।",
    },
    {
      icon: Shield,
      title: "Values",
      titleBn: "মূল্যবোধ",
      desc: "Deeply rooted in Unity, Discipline, Patriotism, and active Human Service to all of society.",
      descBn: "আমাদের কাজের মূল ভিত্তি হলো একতা, শৃঙ্খলা, গভীর দেশপ্রেম এবং সমাজের প্রতি নিঃস্বার্থ মানবিক সেবা।",
    },
  ];

  const board = [
    {
      name: "Rabiul Islam Ahad",
      role: "Founder & Chief Director",
      bio: "Visionary youth leader dedicated to standard sports structures and social reforms in Bangladesh.",
      id: "TA-101",
    },
    {
      name: "Engr. Md. Rakibul Islam(Rakib)",
      role: "Admin & Web Developer",
      bio: "Academician and policy researcher aiding strategic youth development initiatives.",
      id: "TA-102",
    },
  
  ];

  const milestones = [
    { year: "২০১৮", title: "যাত্রা শুরু", desc: "মিরপুরে এক ঝাঁক উদ্যমী তরুণদের নিয়ে ক্ষুদ্র পরিসরে ক্রীড়া কার্যক্রমের সূচনা।" },
    { year: "২০২০", title: "করোনা মহামারী ত্রাণ", desc: "মহামারী চলাকালীন অসহায় পরিবারসমূহের মাঝে খাদ্য ও চিকিৎসা সহায়তা বিতরণ।" },
    { year: "২০২২", title: "জেলা পর্যায়ে সম্প্রসারণ", desc: "ঢাকা বিভাগের বাইরে বিভিন্ন জেলায় ভলান্টিয়ার টিম গঠন ও টুর্নামেন্ট আয়োজন।" },
    { year: "২০২৪", title: "জাতীয় স্বীকৃতি", desc: "সমাজসেবামূলক কাজে অবদানের জন্য জাতীয় যুব নেটওয়ার্ক থেকে বিশেষ সম্মাননা অর্জন।" },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-800/40 text-green-400 text-xs sm:text-sm font-semibold uppercase">
            <span>About Our Association</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Who <span className="text-green-400">We Are</span>
          </h1>
          <p className="max-w-3xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed">
            Tarunyer Alo Youth & Sports Association is a national-level organization focused on developing talent, raising civic awareness, and extending humanitarian support across Bangladesh.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Main History Showcase */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              Our Journey & Dedication
            </h2>
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              <p>
                তারুণ্যের আলো যুব ও ক্রীড়া সংঘের জন্ম হয়েছিল তরুণদের অফুরন্ত শক্তিকে ইতিবাচক দিকে চালিত করার উদ্দেশ্য নিয়ে। মাঠপর্যায়ে খেলাধুলার প্রসারের পাশাপাশি আমাদের টিম নানাবিধ সামাজিক উন্নয়ন ও দুর্যোগে দুর্গত মানুষের পাশে দাঁড়িয়েছে।
              </p>
              <p>
                We operate on a transparent framework, encouraging youth to take up leadership roles early in their lives. By fostering discipline on the field and empathy off the field, we are building active citizens.
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300">
                <Calendar size={16} className="text-green-500" />
                <span className="text-sm font-medium">Est. 2018</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300">
                <Award size={16} className="text-green-500" />
                <span className="text-sm font-medium">Certified NGO</span>
              </div>
            </div>
          </div>

          {/* Timeline Grid */}
          <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-900 space-y-6 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold border-b border-zinc-900 pb-3 text-green-400">
              Milestone Timeline (স্মারক মাইলফলক)
            </h3>
            <div className="space-y-6">
              {milestones.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="font-black text-green-500 bg-green-950/30 border border-green-800/40 px-2 py-1 rounded text-sm sm:text-base shrink-0 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
                    {item.year}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-green-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-500 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Core Pillars Grid */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold">Our Core Pillars</h2>
            <p className="text-zinc-500 text-sm mt-1">
              The fundamental principles that guide our everyday programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="bg-neutral-900/30 border-zinc-850">
                  <CardContent className="p-8 text-center space-y-4">
                    <Icon className="mx-auto text-green-400" size={40} />
                    <div className="space-y-0.5">
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-xs text-green-500 font-bold uppercase">{value.titleBn}</p>
                    </div>
                    <div className="space-y-2 text-sm leading-relaxed">
                      <p className="text-zinc-400">{value.desc}</p>
                      <p className="text-zinc-500 italic border-t border-zinc-850 pt-2">{value.descBn}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 4. Founders & Advisory Board */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <Users2 className="mx-auto text-green-400" size={32} />
            <h2 className="text-3xl sm:text-4xl font-extrabold">Founder & Advisory Board</h2>
            <p className="text-zinc-500 text-sm max-w-lg mx-auto">
              Our guiding force: leaders and advisers steering Tarunyer Alo to achieve maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {board.map((item, idx) => (
              <Card key={idx} className="bg-zinc-950 border-zinc-900 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500" />
                <CardContent className="p-8 space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-semibold">{item.role}</p>
                    </div>
                    <span className="text-[10px] text-green-500/80 font-bold bg-green-950/20 border border-green-900/40 px-2 py-0.5 rounded">
                      {item.id}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
