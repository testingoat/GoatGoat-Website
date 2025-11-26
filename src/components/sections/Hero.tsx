"use client";

import { useRef } from "react";
import { buttonVariants } from "@/components/ui/Button";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Slightly stronger parallax so the effect is noticeable but still subtle
    const phoneOffsetSmall = useTransform(scrollYProgress, [0, 1], [0, 40]);
    const phoneOffsetMedium = useTransform(scrollYProgress, [0, 1], [0, 70]);
    const phoneOffsetLarge = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            ref={sectionRef}
            className="relative border-b border-[color:var(--border)] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_55%)] overflow-hidden"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[rgba(79,70,229,0.12)] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[rgba(16,185,129,0.12)] blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 sm:px-10 sm:py-32 lg:flex-row lg:items-center relative z-10">
                <div className="flex flex-1 flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-emerald-600 ring-1 ring-emerald-500/30">
                            Customers · Sellers · Delivery Agents
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
                    >
                        Real-time grocery for <span className="text-gradient-primary">everyone</span> in the loop.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-xl text-pretty text-lg text-[var(--muted-foreground)] sm:text-xl leading-relaxed"
                    >
                        GoatGoat connects customers, local sellers, and delivery agents in
                        one platform, with live tracking, instant notifications, and a
                        modern React Native experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#download"
                            whileHover={{ y: -2, boxShadow: "0 18px 45px rgba(16,185,129,0.35)" }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                        >
                            Download apps <ArrowRight size={16} />
                        </motion.a>
                        <motion.a
                            href="#sellers"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                buttonVariants({ variant: "outline", size: "lg" }),
                                "text-[color:var(--foreground)] border-[color:var(--border)] hover:border-emerald-500/60"
                            )}
                        >
                            Become a seller
                        </motion.a>
                        <motion.a
                            href="#delivery"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "lg" }),
                                "text-[color:var(--muted-foreground)] hover:text-emerald-500"
                            )}
                        >
                            Delivery partner
                        </motion.a>
                    </motion.div>
                </div>

                <div className="flex flex-1 justify-center lg:justify-end">
                    <div className="relative mt-8 grid grid-cols-3 gap-4 lg:mt-0">
                        <PhoneMock label="Customer" delay={0.4} y={phoneOffsetSmall} />
                        <PhoneMock label="Seller" delay={0.5} className="mt-12" y={phoneOffsetMedium} />
                        <PhoneMock label="Delivery" delay={0.6} className="hidden sm:flex mt-24" y={phoneOffsetLarge} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhoneMock({
    label,
    className = "",
    delay = 0,
    y,
}: {
    label: string;
    className?: string;
    delay?: number;
    y: MotionValue<number>;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay, type: "spring", bounce: 0.4 }}
            style={{ y }}
            className={className}
        >
            <div className="relative flex h-64 w-32 flex-col items-center justify-center rounded-[2rem] border-[6px] border-[rgba(148,163,184,0.4)] bg-[color:var(--background)] shadow-2xl sm:h-80 sm:w-40 overflow-hidden">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)] to-[color:var(--muted)] p-3 flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/12 flex items-center justify-center mb-2">
                        <Smartphone size={14} className="text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted-foreground)]">
                        {label}
                    </span>

                    {/* Mock UI Elements */}
                    <div className="w-full h-1 bg-[rgba(148,163,184,0.6)] rounded-full mt-6 mb-2" />
                    <div className="w-2/3 h-1 bg-[rgba(148,163,184,0.6)] rounded-full mb-4" />

                    <div className="w-full h-16 bg-[color:var(--muted)] rounded-lg mb-2 shadow-[0_10px_30px_rgba(15,23,42,0.15)]" />
                    <div className="w-full h-16 bg-[color:var(--muted)] rounded-lg shadow-[0_10px_30px_rgba(15,23,42,0.15)]" />
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[rgba(15,23,42,0.8)] rounded-b-xl" />
            </div>
        </motion.div>
    );
}
