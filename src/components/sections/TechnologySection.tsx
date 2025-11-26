"use client";

import { useState } from "react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/Card";
import { Server, Shield, Database, Activity, Lock, Code, LayoutDashboard } from "lucide-react";
import { MonitorShowcase } from "./MonitorShowcase";
import { cn } from "@/lib/utils";

export function TechnologySection() {
    const [activeTab, setActiveTab] = useState<"infrastructure" | "monitor">("infrastructure");

    const techStack = [
        {
            icon: Server,
            text: "Node.js + Express APIs for auth, products, orders, users, sellers, notifications, and admin.",
        },
        {
            icon: Shield,
            text: "Staging and production environments behind Nginx with TLS 1.2/1.3 and Let's Encrypt.",
        },
        {
            icon: Database,
            text: "AdminJS panel organizing users, stores, products, and monitoring in a single admin view.",
        },
        {
            icon: Activity,
            text: "PM2 process manager with logs, health checks, and a clear staging-first deployment strategy.",
        },
        {
            icon: Lock,
            text: "Security practices around environment variables, backups, and monitoring documented in the server analysis.",
        },
        {
            icon: Code,
            text: "React Native apps share a modern toolchain: TypeScript, Jest, ESLint, and automated checks.",
        },
    ];

    return (
        <SectionShell
            id="technology"
            eyebrow="Platform"
            title="Modern Node.js backend and infrastructure"
            subtitle="A hardened API layer, MongoDB, and staged deployment flow keep the platform reliable as you grow."
        >
            <div className="flex justify-center mb-12">
                <div className="inline-flex p-1 bg-slate-900/50 rounded-xl border border-white/5">
                    <button
                        onClick={() => setActiveTab("infrastructure")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                            activeTab === "infrastructure"
                                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                        )}
                    >
                        <Server size={16} />
                        Infrastructure
                    </button>
                    <button
                        onClick={() => setActiveTab("monitor")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                            activeTab === "monitor"
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                        )}
                    >
                        <LayoutDashboard size={16} />
                        Ops Monitor
                    </button>
                </div>
            </div>

            {activeTab === "infrastructure" ? (
                <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {techStack.map((item, index) => (
                        <Card key={index} className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-emerald-400">
                                <item.icon size={20} />
                            </div>
                            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                                {item.text}
                            </p>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <MonitorShowcase />
                </div>
            )}
        </SectionShell>
    );
}
