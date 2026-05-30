"use client";

import React, { useState } from "react";
import { UserPlus, Briefcase, MapPin, CheckCircle2, ShieldCheck, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    skills: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, phone, address, skills } = formData;
    
    if (!fullName.trim() || !phone.trim() || !address.trim() || !skills.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, phone, address, skills }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSuccess(true);
      setFormData({ fullName: "", phone: "", address: "", skills: "" });
      setTimeout(() => setSuccess(false), 8000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-800/40 text-green-400 text-xs sm:text-sm font-semibold uppercase">
            <UserPlus size={14} />
            <span>Join Our Mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Become a <span className="text-green-400">Member</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            Ready to make an impact? Register as a volunteer for Tarunyer Alo and help us organize social drives, sports tournaments, and youth empowerment programs across the nation.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Application Form Card */}
        <Card className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-900/80 rounded-[32px] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          
          <CardContent className="p-8 sm:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name Input */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-xs text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    <UserPlus size={14} className="text-green-500" /> Full Name <span className="text-green-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Shakil Ahmed"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    <Phone size={14} className="text-green-500" /> Phone Number <span className="text-green-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. +880 1XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Address Input */}
              <div className="space-y-2">
                <label htmlFor="address" className="text-xs text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <MapPin size={14} className="text-green-500" /> Residential Address <span className="text-green-500">*</span>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  placeholder="e.g. Tongi Gazipur"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Skills/Interests Input */}
              <div className="space-y-2">
                <label htmlFor="skills" className="text-xs text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Briefcase size={14} className="text-green-500" /> Core Skills / Interests <span className="text-green-500">*</span>
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  required
                  placeholder="What can you contribute? (e.g. Event Management, Sports Organization, Graphic Design, Social Media)"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none h-32 focus:h-40 transition-all duration-300 resize-none"
                />
              </div>

              {/* Form Warnings/Success */}
              {error && (
                <div className="bg-rose-950/20 border border-rose-950/30 py-3 px-4 rounded-xl">
                  <p className="text-rose-500 text-sm font-semibold flex items-center gap-2">
                    <ShieldCheck size={16} /> {error}
                  </p>
                </div>
              )}

              {success && (
                <div className="flex items-start gap-3 bg-green-950/20 border border-green-900/30 p-5 rounded-xl text-green-400 shadow-inner">
                  <CheckCircle2 size={24} className="shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg">Application Submitted Successfully!</h4>
                    <p className="text-sm text-green-500/80 leading-relaxed mt-1">
                      Welcome to Tarunyer Alo! Your volunteer application has been received. Our executive panel will review your profile and contact you within 2-3 business days.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-5 text-lg font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-500"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 rounded-full border-2 border-zinc-900 border-t-zinc-400 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={20} />
                      <span>Submit Registration</span>
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-zinc-600 mt-4 font-medium uppercase tracking-wider">
                  Secure application process via Tarunyer Alo servers
                </p>
              </div>

            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
