"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export type Feature = {
  title: string;
  description: string;
};

export function FeatureGrid({ items }: { items: Feature[] }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <motion.div key={item.title} variants={itemVariant}>
          <Card className="h-full">
            <h3 className="text-lg font-semibold text-[color:var(--foreground)] mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">
              {item.description}
            </p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
