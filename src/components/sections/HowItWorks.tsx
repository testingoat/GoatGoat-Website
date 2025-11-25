"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/Card";
import { ShoppingBag, Store, MapPin } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: ShoppingBag,
            title: "1. Customer orders",
            description: "The customer app sends the order with address and items. The backend validates and forwards it to the right seller.",
        },
        {
            icon: Store,
            title: "2. Seller prepares",
            description: "Sellers get real-time alerts, update order status, and confirm when it's ready for pickup.",
        },
        {
            icon: MapPin,
            title: "3. Delivery completes",
            description: "Delivery agents receive tasks, navigate with maps, and update every step so everyone stays in sync.",
        },
    ];

    return (
        <SectionShell
            id="how-it-works"
            eyebrow="Flow"
            title="How GoatGoat connects customers, sellers, and delivery agents"
            subtitle="The server orchestrates live updates between the three apps using secure APIs, sockets, and Firebase Cloud Messaging."
            align="center"
        >
            <div className="grid gap-6 md:grid-cols-3">
                {steps.map((step, index) => (
                    <Card key={index} className="relative">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                            <step.icon size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                            {step.title}
                        </h3>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                            {step.description}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionShell>
    );
}
