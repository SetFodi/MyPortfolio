import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

export function RainbowButton({
    children,
    className,
    asChild = false,
    ...props
}: RainbowButtonProps) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            className={cn(
                "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border border-brand/45 bg-brand px-8 py-2 font-medium text-brand-foreground shadow-lg shadow-black/15 transition-all hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 disabled:pointer-events-none disabled:opacity-50",
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}
