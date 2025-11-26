"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { FeatureGrid } from "@/components/FeatureGrid";

export function SellerSection() {
    return (
        <SectionShell
            id="sellers"
            eyebrow="For sellers"
            title="Full control from your phone"
            subtitle="The Goat Seller app turns your phone into a control center for MEAT products, orders, and performance."
        >
            <FeatureGrid
                items={[
                    {
                        title: "Catalog & pricing",
                        description:
                            "Update products, categories, and prices instantly with image uploads.",
                    },
                    {
                        title: "Order management",
                        description:
                            "Track orders, statuses, and delivery progress in one consistent view.",
                    },
                    {
                        title: "Instant seller alerts",
                        description:
                            "React Native Firebase keeps you notified about every important event.",
                    },
                    {
                        title: "Monitoring & insights",
                        description:
                            "Custom dashboards and scripts help you monitor performance and reliability.",
                    },
                    {
                        title: "Multi-language ready",
                        description:
                            "i18next and react-i18next let you localise the experience for different markets.",
                    },
                    {
                        title: "Enterprise-level quality",
                        description:
                            "Hermes, MMKV, TestSprite, and Semgrep provide performance and safety.",
                    },
                ]}
            />
        </SectionShell>
    );
}
