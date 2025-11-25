"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/50",
                secondary:
                    "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700",
                outline:
                    "bg-transparent border border-white/10 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5",
                ghost:
                    "bg-transparent text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/5",
            },
            size: {
                sm: "h-8 px-3 text-xs",
                md: "h-10 px-5 text-sm",
                lg: "h-12 px-8 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface ButtonProps
    extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // If asChild is true, we should strictly just render the child. 
        // But since we are using framer-motion, we can't easily clone element with motion props without Slot.
        // For now, we will ignore asChild in this implementation and assume the user uses buttonVariants for links.
        // Or we can just render motion.button.

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
