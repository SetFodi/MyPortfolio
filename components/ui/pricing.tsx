"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

interface PricingPlan {
    name: string;
    price: string;
    features: string[];
    description: string;
    buttonText: string;
    href: string;
    isPopular: boolean;
    marketPrice?: string;
    deliveryTime?: string;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
}

export function Pricing({
    plans,
    title = "Simple, Transparent Pricing",
    description = "Choose the plan that works for you",
}: PricingProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="container py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-20">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    {title}
                </h2>
                <p className="text-muted-foreground text-lg whitespace-pre-line max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={
                            isDesktop
                                ? {
                                    y: plan.isPopular ? -20 : 0,
                                    opacity: 1,
                                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                                }
                                : { opacity: 1, y: 0 }
                        }
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.6,
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            delay: 0.4,
                            opacity: { duration: 0.5 },
                        }}
                        className={cn(
                            `rounded-3xl p-8 flex flex-col relative overflow-hidden bg-white/5 border backdrop-blur-xl transition-all duration-300`,
                            plan.isPopular
                                ? "border-primary/50 shadow-2xl shadow-primary/20 z-10 bg-zinc-900/80"
                                : "border-white/10 hover:border-white/20 z-0",
                            index === 0 || index === 2
                                ? "lg:transform lg:translate-z-[-50px] lg:rotate-y-[10deg]"
                                : "",
                            index === 0 && "lg:origin-right",
                            index === 2 && "lg:origin-left"
                        )}
                    >
                        {/* Gradient Glow for Popular Plan */}
                        {plan.isPopular && (
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
                        )}

                        {plan.isPopular && (
                            <div className="absolute top-0 right-0 bg-primary py-1 px-4 rounded-bl-xl flex items-center shadow-lg">
                                <Star className="text-white h-4 w-4 fill-current" />
                                <span className="text-white ml-2 text-sm font-bold tracking-wide">
                                    POPULAR
                                </span>
                            </div>
                        )}

                        <div className="flex-1 flex flex-col relative z-10">
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-sm text-white/50 mb-6 h-10">
                                {plan.description}
                            </p>

                            <div className="mb-6">
                                {/* Price Display */}
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-bold text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-2xl text-white/80">₾</span>
                                </div>

                                {/* Market Price & Delivery Time */}
                                <div className="flex flex-col gap-1 mt-4 text-sm">
                                    {plan.deliveryTime && (
                                        <span className="flex items-center gap-2 text-white/80">
                                            ⏱️ <span className="font-semibold">{plan.deliveryTime}</span>
                                        </span>
                                    )}
                                    {plan.marketPrice && (
                                        <span className="text-white/40 line-through">
                                            Market Price: {plan.marketPrice}₾
                                        </span>
                                    )}
                                </div>
                            </div>

                            <hr className="border-white/10 my-6" />

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={cn(
                                            "mt-1 p-0.5 rounded-full flex-shrink-0",
                                            plan.isPopular ? "bg-green-500/20 text-green-400" : "bg-white/10 text-white/60"
                                        )}>
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span className="text-sm text-white/80 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <Link
                                    href={plan.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: plan.isPopular ? "default" : "outline",
                                            size: "lg"
                                        }),
                                        "w-full rounded-full font-semibold tracking-wide transition-all duration-300",
                                        plan.isPopular
                                            ? "bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/25"
                                            : "bg-transparent border-white/20 hover:bg-white hover:text-black hover:border-white"
                                    )}
                                >
                                    {plan.buttonText}
                                </Link>
                                <p className="text-center text-xs text-white/30 mt-4">
                                    One-time payment • No hidden fees
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
