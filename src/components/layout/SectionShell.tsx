"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionShellProps {
    id?: string;
    eyebrow?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    align?: "left" | "center";
    className?: string;
}

export function SectionShell({
    id,
    eyebrow,
    title,
    subtitle,
    children,
    align = "left",
    className,
}: SectionShellProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative py-20 sm:py-32 overflow-hidden",
                className
            )}
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 sm:px-10 relative z-10 max-w-7xl">
                <div
                    className={cn(
                        "mb-16 max-w-3xl",
                        align === "center" && "mx-auto text-center"
                    )}
                >
                    {eyebrow && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400"
                        >
                            {eyebrow}
                        </motion.p>
                    )}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                    >
                        {title}
                    </motion.h2>
                    {subtitle && (
                        <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]"
                    >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
