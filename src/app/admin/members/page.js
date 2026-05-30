"use client";

import React from "react";
import { Users, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminMembers() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Users className="text-green-400" />
          Members Roster
        </h1>
        <p className="text-zinc-400 mt-1">Manage the executive board and volunteers.</p>
      </div>

      <Card className="bg-zinc-950 border-zinc-900 rounded-[24px]">
        <CardContent className="p-16 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-green-950/20 flex items-center justify-center text-green-500">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white">Roster Manager Coming Soon</h2>
          <p className="text-zinc-500 max-w-md">
            The CRUD interface for adding, editing, and removing members from the public roster is currently under development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
