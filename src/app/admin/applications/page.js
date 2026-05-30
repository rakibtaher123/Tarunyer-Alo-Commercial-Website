"use client";

import React from "react";
import { FileText, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminApplications() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <FileText className="text-blue-400" />
          Volunteer Applications
        </h1>
        <p className="text-zinc-400 mt-1">Review and manage incoming volunteer requests.</p>
      </div>

      <Card className="bg-zinc-950 border-zinc-900 rounded-[24px]">
        <CardContent className="p-16 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-blue-950/20 flex items-center justify-center text-blue-500">
            <Clock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white">Application Manager Coming Soon</h2>
          <p className="text-zinc-500 max-w-md">
            The full interactive table for approving, rejecting, and viewing detailed application submissions is currently under development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
