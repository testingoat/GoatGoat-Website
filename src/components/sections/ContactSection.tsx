"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ContactSection() {
    return (
        <SectionShell
            id="contact"
            eyebrow="Contact"
            title="Talk to the Goat team"
            subtitle="Use this form for customer support, new seller enquiries, or delivery partner onboarding."
            align="center"
        >
            <Card className="mx-auto max-w-xl">
                <form className="flex flex-col gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs font-medium text-[var(--muted-foreground)]">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted-foreground)] focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                                placeholder="Full name"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mobile" className="text-xs font-medium text-[var(--muted-foreground)]">
                                Mobile
                            </label>
                            <input
                                id="mobile"
                                type="mobile"
                                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted-foreground)] focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                                placeholder="Mobile Number"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="role" className="text-xs font-medium text-[var(--muted-foreground)]">
                            I am a…
                        </label>
                        <div className="relative">
                            <select
                                id="role"
                                className="w-full appearance-none rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                            >
                                <option>Customer</option>
                                <option>Seller</option>
                                <option>Delivery Partner</option>
                                <option>Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[color:var(--muted-foreground)]">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-medium text-[var(--muted-foreground)]">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] outline-none placeholder:text-[color:var(--muted-foreground)] focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all resize-none"
                            placeholder="Tell us how we can help."
                        />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <p className="text-[11px] text-[var(--muted-foreground)]">
                            This form is not wired yet.
                        </p>
                        <Button type="button">
                            Send message
                        </Button>
                    </div>
                </form>
            </Card>
        </SectionShell>
    );
}
