"use client";

import React, { useState } from "react";
import { UserPlus, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, emailOrPhone, password } = formData;
    
    if (!name.trim() || !emailOrPhone.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, emailOrPhone, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed.");
      }

      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-950/40 border border-green-800/40 text-green-400 text-xs sm:text-sm font-semibold uppercase">
            <UserPlus size={14} />
            <span>Create Account</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-none">
            Join <span className="text-green-400">Us</span>
          </h1>
        </div>

        {/* 2. Register Form Card */}
        <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-900/80 rounded-[32px] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          
          <div className="p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Shakil Ahmed"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Credentials Input */}
              <div className="space-y-2">
                <label htmlFor="emailOrPhone" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Email or Phone Number
                </label>
                <input
                  id="emailOrPhone"
                  name="emailOrPhone"
                  type="text"
                  required
                  placeholder="e.g. 01893078015"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Create a secure password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-zinc-800 focus:border-green-600 focus:bg-zinc-900/60 rounded-xl py-3.5 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Error Warning */}
              {error && (
                <div className="bg-rose-950/20 border border-rose-950/30 py-3 px-4 rounded-xl">
                  <p className="text-rose-500 text-sm font-semibold flex items-center gap-2">
                    <ShieldCheck size={16} /> {error}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00d084] hover:bg-green-600 text-black py-4 text-base font-extrabold rounded-2xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <UserPlus size={18} />
                      <span>Sign Up</span>
                    </>
                  )}
                </button>
                
                <p className="text-center text-zinc-500 mt-6 text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-green-400 font-semibold hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}