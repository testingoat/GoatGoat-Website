"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/Card";
import { buttonVariants } from "@/components/ui/Button";
import { Apple, Play, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type StoreLinks = {
  url: string;
};

export type AppCard = {
  role: string;
  title: string;
  description: string;
  ios?: StoreLinks;
  android?: StoreLinks;
};

export function DownloadSection({ apps }: { apps: AppCard[] }) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setPhone("");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <SectionShell
      id="download"
      eyebrow="Download"
      title="Install the Goat apps"
      subtitle="Replace the placeholder links with your real App Store and Google Play URLs when you are ready to launch."
      align="center"
      className="bg-[color:var(--background)]"
    >
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {apps.map((app) => (
          <Card key={app.role} className="flex flex-col" tilt>
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                {app.role}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-2">
              {app.title}
            </h3>
            <p className="text-sm text-[color:var(--muted-foreground)] mb-6 flex-1">
              {app.description}
            </p>
            <div className="flex flex-col gap-3">
              {app.ios && (
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={app.ios.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full justify-start gap-2 text-[color:var(--muted-foreground)] border-[color:var(--border)] hover:text-emerald-600 hover:border-emerald-500/60 hover:bg-emerald-500/5"
                  )}
                >
                  <Apple size={16} />
                  <span>App Store</span>
                </motion.a>
              )}
              {app.android && (
                <motion.a
                  whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(16,185,129,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  href={app.android.url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "sm" }),
                    "w-full justify-start gap-2"
                  )}
                >
                  <Play size={16} fill="currentColor" />
                  <span>Google Play</span>
                </motion.a>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* SMS Link Feature */}
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-white mb-2">Get the link via SMS</h4>
          <p className="text-sm text-slate-400">Enter your phone number and we'll send you a magic link to download the right app for your device.</p>
        </div>

        <form onSubmit={handleSendLink} className="relative">
          <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 p-1.5 rounded-xl focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all">
            <div className="pl-3 text-slate-500">
              <Smartphone size={18} />
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter mobile number"
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-slate-600 flex-1 h-10"
              disabled={status !== "idle"}
            />
            <button
              type="submit"
              disabled={status !== "idle" || !phone}
              className={cn(
                "h-10 px-4 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                status === "success"
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-slate-950 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"
                  />
                ) : status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={16} />
                    <span>Sent!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <span>Send Link</span>
                    <ArrowRight size={14} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}
