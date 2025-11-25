"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "How it works", href: "#how-it-works" },
        { name: "Customers", href: "#customers" },
        { name: "Sellers", href: "#sellers" },
        { name: "Delivery", href: "#delivery" },
        { name: "Technology", href: "#technology" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "backdrop-blur-md border-b py-4 border-[color:var(--border)] bg-[color:rgba(15,23,42,0.9)] data-[theme=light]:bg-[color:rgba(248,250,252,0.9)]"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 sm:px-10 max-w-7xl flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20 transition-all group-hover:bg-emerald-500/20 group-hover:ring-emerald-500/40">
                        <span className="font-bold text-lg">GG</span>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                        GoatGoat
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[color:var(--muted-foreground)] hover:text-emerald-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="#download"
                            className={buttonVariants({ size: "sm" })}
                        >
                            Get the apps
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 md:hidden dark:bg-slate-950 dark:border-white/10 bg-slate-50 border-slate-200"
                >
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors dark:text-slate-400 dark:hover:text-emerald-400 text-slate-600 hover:text-emerald-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#download"
                            className={cn(buttonVariants(), "w-full")}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get the apps
                        </a>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}
