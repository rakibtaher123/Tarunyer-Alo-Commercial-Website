"use client";

import React, { useState } from "react";
import { Image as ImageIcon, X, ZoomIn, Calendar, MapPin, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Football Tournament Final 2025",
      titleBn: "ফুটবল টুর্নামেন্ট ফাইনাল ২০২৫",
      category: "sports",
      date: "March 15, 2025",
      location: "Tongi Gazipur",
      gradient: "from-green-600 to-emerald-950",
      desc: "Annual championship match attracting over 20 local youth clubs to promote teamwork and athletic excellence.",
    },
    {
      id: 2,
      title: "Winter Clothes Distribution Drive",
      titleBn: "শীতবস্ত্র বিতরণ ক্যাম্পেইন",
      category: "relief",
      date: "January 10, 2025",
      location: "Kurigram & Dinajpur Districts",
      gradient: "from-emerald-700 to-zinc-950",
      desc: "Distributed heavy blankets and warm clothing items to over 500 helpless families facing severe cold waves.",
    },
    {
      id: 3,
      title: "Youth Leadership Summit",
      titleBn: "যুব নেতৃত্ব কর্মশালা",
      category: "leadership",
      date: "April 02, 2025",
      location: "Dhaka Central Seminar Hall",
      gradient: "from-green-800 to-black",
      desc: "A two-day comprehensive workshop teaching public communication, team management, and active social entrepreneurship.",
    },
    {
      id: 4,
      title: "Emergency Flood Relief Action",
      titleBn: "বন্যাদুর্গত এলাকায় জরুরি ত্রাণ বিতরণ",
      category: "relief",
      date: "August 22, 2024",
      location: "Feni & Sylhet Subdivisions",
      gradient: "from-cyan-900 to-zinc-900",
      desc: "Rapid deployment of volunteer teams to provide clean water, dry foods, and essential medical kits to stranded villagers.",
    },
    {
      id: 5,
      title: "Annual T20 Cricket Cup",
      titleBn: "বার্ষিক টি২০ ক্রিকেট কাপ",
      category: "sports",
      date: "November 05, 2024",
      location: "Tongi Gazipur",
      gradient: "from-lime-800 to-neutral-950",
      desc: "T20 cricket matches promoting local engagement and sports discipline among high school student teams.",
    },
    {
      id: 6,
      title: "Voluntary Blood Donation Drive",
      titleBn: "স্বেচ্ছায় রক্তদান কর্মসূচি",
      category: "relief",
      date: "February 21, 2025",
      location: "Tongi Headquarters",
      gradient: "from-rose-950 via-red-900 to-black",
      desc: "Organized in collaboration with Sandhani to collect 100+ bags of blood for local children battling thalassemia.",
    },
  ];

  const categories = [
    { value: "all", label: "All Events" },
    { value: "sports", label: "Sports" },
    { value: "relief", label: "Relief & Aid" },
    { value: "leadership", label: "Leadership" },
  ];

  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-800/40 text-green-400 text-xs sm:text-sm font-semibold uppercase">
            <ImageIcon size={14} />
            <span>Visual Showcase Archive</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Event <span className="text-green-400">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            Relive key moments from our tournaments, humanitarian efforts, and community service camps.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-lg mx-auto">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "primary" : "ghost"}
              size="sm"
              onClick={() => setFilter(cat.value)}
              className="rounded-xl transition-all duration-300 font-semibold"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* 3. Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="relative overflow-hidden group cursor-pointer border-zinc-850 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(34,197,94,0.15)] transition-all duration-500 rounded-3xl"
            >
              {/* Image Graphic Container */}
              <div className={`h-48 sm:h-56 md:h-64 bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center text-white relative p-6 border-b border-zinc-900 overflow-hidden`}>
                
                {/* Visual grid gridlines pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                <ImageIcon size={44} className="text-green-400/60 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-green-500 mt-2 bg-black/60 border border-green-900/30 px-3 py-1 rounded-full uppercase">
                  {item.category}
                </span>

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center shadow-lg font-bold">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </div>

              {/* Text Info Container */}
              <CardContent className="p-6 space-y-2 bg-neutral-950/80">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                  <span>{item.date}</span>
                </div>
                <h3 className="font-extrabold text-lg text-white group-hover:text-green-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm">
                  {item.titleBn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 4. Custom Glassmorphic Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Modal Body */}
            <div className="glass-panel w-full max-w-4xl rounded-[32px] border border-green-500/20 overflow-hidden shadow-2xl relative">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-green-600 transition-all duration-300 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Left pane */}
                <div className={`md:col-span-7 h-[280px] sm:h-[400px] bg-gradient-to-br ${activeItem.gradient} flex flex-col items-center justify-center text-white relative p-6 border-b md:border-b-0 md:border-r border-zinc-900 overflow-hidden`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <ImageIcon size={56} className="text-green-400/50" />
                  <span className="text-[10px] text-green-400 font-bold tracking-widest uppercase bg-black/50 border border-green-900/40 px-3.5 py-1.5 rounded-full mt-3">
                    {activeItem.category}
                  </span>
                </div>

                {/* Info Right pane */}
                <div className="md:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-center bg-zinc-950">
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {activeItem.title}
                    </h2>
                    <p className="text-green-400 text-sm font-semibold italic">
                      {activeItem.titleBn}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {activeItem.desc}
                  </p>

                  <div className="space-y-3.5 border-t border-zinc-900 pt-5 text-zinc-400 text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-green-500 shrink-0" />
                      <span>{activeItem.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-green-500 shrink-0" />
                      <span>{activeItem.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tag size={16} className="text-green-500 shrink-0" />
                      <span className="capitalize">{activeItem.category} Event</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setActiveItem(null)}
                      className="w-full"
                    >
                      Close View
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
