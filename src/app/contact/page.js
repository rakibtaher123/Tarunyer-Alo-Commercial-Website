"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
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


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
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
    const { name, phone, message, email } = formData;
    
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in your Name, Phone Number, and Message.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-800/40 text-green-400 text-xs sm:text-sm font-semibold uppercase">
            <MessageSquare size={14} />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Get In <span className="text-green-400">Touch</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have questions about volunteer registrations, sports sponsorships, or social donation drives? Contact our Tongi headquarters.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Contact Details Pane */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-white">
                Contact Information
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                অনুগ্রহ করে নিচের তথ্যগুলো ব্যবহার করে আমাদের সাথে সরাসরি ফোনে কথা বলুন অথবা WhatsApp-এ মেসেজ পাঠান।
              </p>
            </div>

            {/* Direct Cards Grid */}
            <div className="space-y-4">
              
              {/* Phone Card */}
              <a href="tel:01893078015" className="block group">
                <Card className="bg-neutral-900/40 border-zinc-850 group-hover:border-green-600/30 transition-all duration-300">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-950/40 border border-green-800/40 text-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all duration-300 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Phone Call</h4>
                      <p className="text-base font-extrabold text-white group-hover:text-green-400 transition-colors">01893078015</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Email Card */}
              <a href="mailto:tarunyeraloyouthofficial@gmail.com
" className="block group">
                <Card className="bg-neutral-900/40 border-zinc-850 group-hover:border-green-600/30 transition-all duration-300">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-950/40 border border-green-800/40 text-green-400 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black transition-all duration-300 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Email Mailbox</h4>
                      <p className="text-base font-extrabold text-white group-hover:text-green-400 transition-colors">tarunyeraloyouthofficial@gmail.com
</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Location Card */}
              <div className="group">
                <Card className="bg-neutral-900/40 border-zinc-850">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-green-950/40 border border-green-800/40 text-green-400 flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Office Location</h4>
                      <p className="text-sm font-semibold text-white leading-tight">Tongi, Gazipur</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>

            {/* Quick Action Button Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/01893078015"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="secondary" className="w-full py-4 text-xs font-extrabold uppercase rounded-xl tracking-wider">
                  WhatsApp Info
                </Button>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full py-4 text-xs font-extrabold uppercase rounded-xl tracking-wider gap-1.5">
                  <Facebook size={14} />
                  Facebook Feed
                </Button>
              </a>
            </div>

          </div>

          {/* Contact Input Form Pane */}
          <div className="lg:col-span-7">
            <Card className="bg-zinc-950 border-zinc-900 rounded-[32px] overflow-hidden">
              <CardContent className="p-8 sm:p-10 space-y-6">
                
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm">
                    Have questions? Leave your detail contact and we will get back shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                      Your Name <span className="text-green-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Tariqul Islam"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-zinc-800 focus:border-green-600 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                      Phone Number <span className="text-green-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +8801893078015"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-zinc-800 focus:border-green-600 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Email Input Optional */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                      Email Address <span className="text-zinc-600 font-light">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-zinc-800 focus:border-green-600 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                      Message <span className="text-green-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Enter your message detail here..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 border border-zinc-800 focus:border-green-600 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none h-32 focus:h-36 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Form Warnings/Success */}
                  {error && (
                    <p className="text-rose-500 text-xs font-semibold bg-rose-950/20 border border-rose-950/30 py-2 px-3.5 rounded-lg">
                      {error}
                    </p>
                  )}

                  {success && (
                    <div className="flex items-start gap-2.5 bg-green-950/20 border border-green-900/30 p-4 rounded-xl text-green-400">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm">Message Sent Successfully!</h4>
                        <p className="text-xs text-green-500/80 leading-relaxed mt-0.5">
                          ধন্যবাদ, আপনার মেসেজটি আমাদের সার্ভারে সংরক্ষিত হয়েছে। খুব শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে ফোনে যোগাযোগ করবে।
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full py-4 text-base font-extrabold rounded-2xl flex items-center justify-center gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-zinc-900 border-t-zinc-400 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </div>

                </form>

              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
