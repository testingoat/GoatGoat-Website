"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/Card";
import { Server, Shield, Database, Activity, Lock, Code } from "lucide-react";

export function TechnologySection() {
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
            <div className="grid gap-6 md:grid-cols-2">
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
        </SectionShell>
    );
}
