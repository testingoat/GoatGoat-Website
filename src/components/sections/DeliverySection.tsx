"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { FeatureGrid } from "@/components/FeatureGrid";

export function DeliverySection() {
    return (
        <SectionShell
            id="delivery"
            eyebrow="For delivery agents"
            title="Built around reliable deliveries"
            subtitle="Clear job flows, maps, and payout logic help delivery agents focus on completing trips."
        >
            <FeatureGrid
                items={[
                    {
                        title: "Simple job flow",
                        description:
                            "Accept, pick up, and deliver using a focused delivery interface.",
                    },
                    {
                        title: "Secure OTP login",
                        description:
                            "Dedicated OTP and auth routes keep agent access controlled.",
                    },
                    {
                        title: "Turn-by-turn navigation",
                        description:
                            "Use integrated maps and directions to get from store to customer.",
                    },
                    {
                        title: "Status sync",
                        description:
                            "Every update is reflected instantly for customers and sellers.",
                    },
                    {
                        title: "Flexible fees",
                        description:
                            "Backend delivery-fee configuration supports different payout models.",
                    },
                    {
                        title: "Modern RN stack",
                        description:
                            "Same modern React Native and Node backend as the customer and seller apps.",
                    },
                ]}
            />
        </SectionShell>
    );
}
