"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/sanity.config";

export function AdminStudio() {
  return (
    <div className="fixed inset-0 z-[100] bg-[#020617]">
      <NextStudio config={config} />
    </div>
  );
}
