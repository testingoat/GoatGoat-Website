"use client";

import Image from "next/image";
import { SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/Card";
import { buttonVariants } from "@/components/ui/Button";
import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  return (
    <SectionShell
      id="download"
      eyebrow="Download"
      title="Install the GoatGoat apps"
      subtitle="Replace the placeholder links with your real App Store and Google Play URLs when you are ready to launch."
      align="center"
      className="bg-[color:var(--background)]"
    >
      <div className="grid gap-8 md:grid-cols-3">
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
                    "w-full justify-start gap-2"
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
    </SectionShell>
  );
}
