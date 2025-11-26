"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    tilt?: boolean;
    children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, tilt = false, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                whileHover={
                    tilt
                        ? {
                              rotateX: -3,
                              rotateY: 3,
                              translateY: -4,
                              transition: { type: "spring", stiffness: 250, damping: 18 },
                          }
                        : undefined
                }
                className={cn(
                    "glass rounded-2xl p-6 relative overflow-hidden group",
                    hoverEffect && "glass-hover",
                    className
                )}
                {...props}
            >
                {hoverEffect && (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                <div className="relative z-10">{children}</div>
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
