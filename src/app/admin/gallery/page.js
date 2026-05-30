"use client";

import React, { useState } from "react";
import { UploadCloud, Image as ImageIcon, CheckCircle2, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminGallery() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setError("");
      setSuccess(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image file to upload.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload image.");
      }

      setSuccess(true);
      setFile(null);
      setPreview("");
      
      // Auto clear success
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <ImageIcon className="text-green-400" />
          Gallery Management
        </h1>
        <p className="text-zinc-400 mt-1">Upload new images to the public assets directory.</p>
      </div>

      <Card className="bg-zinc-950 border-zinc-900 rounded-[24px]">
        <CardContent className="p-8">
          <form onSubmit={handleUpload} className="space-y-6">
            
            <div className="border-2 border-dashed border-zinc-800 rounded-2xl p-10 flex flex-col items-center justify-center text-center bg-black/50 hover:bg-zinc-900/50 hover:border-green-800 transition-all duration-300 relative group cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              
              {preview ? (
                <div className="space-y-4 w-full">
                  <div className="w-full max-w-sm mx-auto h-48 rounded-xl overflow-hidden border border-zinc-800 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-green-400 font-semibold text-sm">Image selected: {file?.name}</p>
                  <p className="text-zinc-500 text-xs">Click or drag here to change image.</p>
                </div>
              ) : (
                <div className="space-y-4 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500 group-hover:text-green-500 transition-colors">
                    <UploadCloud size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Select Image File</h3>
                    <p className="text-sm text-zinc-500 mt-1">PNG, JPG, or WEBP. Max 5MB.</p>
                  </div>
                </div>
              )}
            </div>

            {error && (
              <div className="bg-rose-950/20 border border-rose-950/30 py-3 px-4 rounded-xl flex items-center gap-2">
                <ShieldCheck size={18} className="text-rose-500" /> 
                <p className="text-rose-500 text-sm font-semibold">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-950/20 border border-green-900/30 py-4 px-5 rounded-xl flex items-center gap-3">
                <CheckCircle2 size={24} className="text-green-400" />
                <div>
                  <h4 className="font-bold text-green-400">Upload Successful!</h4>
                  <p className="text-green-500/80 text-sm mt-0.5">The image has been saved to the server's public uploads directory.</p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading || !file}
              variant="primary"
              className="w-full py-5 font-bold rounded-xl flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-zinc-900 border-t-zinc-400 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <UploadCloud size={18} />
                  Upload to Server
                </>
              )}
            </Button>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
