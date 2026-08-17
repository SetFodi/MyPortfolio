"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
    className?: string;
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    date?: string;
    iconClassName?: string;
    titleClassName?: string;
}

export function DisplayCard({
    className,
    icon = <Sparkles className="size-4 text-brand" />,
    title = "Featured",
    description = "Discover amazing content",
    date = "Just now",
    iconClassName = "text-brand",
    titleClassName = "text-brand",
}: DisplayCardProps) {
    return (
        <div
            className={cn(
                "relative flex h-36 w-full max-w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-border/90 bg-card/95 px-4 py-3 text-foreground shadow-[0_22px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:border-brand/45 hover:bg-card [&>*]:relative [&>*]:z-10 [&>*]:flex [&>*]:items-center [&>*]:gap-2",
                className
            )}
        >
            <div>
                <span className={cn("relative inline-block rounded-full border border-brand/15 bg-brand-soft p-1.5", iconClassName)}>
                    {icon}
                </span>
                <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
            </div>
            <p className="whitespace-nowrap text-lg text-foreground/90">{description}</p>
            <p className="text-muted-foreground/85">{date}</p>
        </div >
    );
}

interface DisplayCardsProps {
    cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
    const defaultCards = [
        {
            className: "[grid-area:stack] hover:-translate-y-10",
        },
        {
            className: "[grid-area:stack] md:translate-x-16 translate-y-10 hover:-translate-y-1",
        },
        {
            className: "[grid-area:stack] md:translate-x-32 translate-y-20 hover:translate-y-10",
        },
    ];

    const displayCards = cards || defaultCards;

    return (
        <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
            {displayCards.map((cardProps, index) => (
                <DisplayCard key={index} {...cardProps} />
            ))}
        </div>
    );
}
