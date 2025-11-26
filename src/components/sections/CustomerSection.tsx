"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { FeatureGrid } from "@/components/FeatureGrid";

export function CustomerSection() {
    return (
        <SectionShell
            id="customers"
            eyebrow="For customers"
            title="A smooth, modern Hyper-Local Delivery app"
            subtitle="Animations, maps, and voice commands make ordering feel instant while the backend keeps everything in sync."
        >
            <FeatureGrid
                items={[
                    {
                        title: "Live map tracking",
                        description:
                            "Follow every order on a real-time map using React Native Maps and directions.",
                    },
                    {
                        title: "Real-time alerts",
                        description:
                            "Stay updated with Firebase push notifications and socket-based live updates.",
                    },
                    {
                        title: "Voice search",
                        description:
                            "Find items and re-order with @react-native-voice/voice powered voice input.",
                    },
                    {
                        title: "Polished animations",
                        description:
                            "Lottie and Reanimated keep navigation and transitions feeling premium.",
                    },
                    {
                        title: "Secure authentication",
                        description:
                            "JWT tokens and secure storage protect accounts and sessions.",
                    },
                    {
                        title: "New architecture ready",
                        description:
                            "Built on the latest React Native 0.77 and React 18 stack for performance.",
                    },
                ]}
            />
        </SectionShell>
    );
}
