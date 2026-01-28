"use client";

import { Box, Lock, Search, Settings, Sparkles, Code, Server, Database, Layout, Terminal } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function TechStackCards() {
    const stacks = [
        {
            title: 'Frontend',
            description: 'Building immersive user interfaces',
            skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
            icon: <Layout className="h-4 w-4" />
        },
        {
            title: 'Backend',
            description: 'Powering robust server-side logic',
            skills: ['Node.js', 'Python', 'PHP', 'Laravel', 'Odoo'],
            icon: <Server className="h-4 w-4" />
        },
        {
            title: 'Database',
            description: 'Architecting reliable data storage',
            skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
            icon: <Database className="h-4 w-4" />
        },
        {
            title: 'DevOps & Tools',
            description: 'Streamlining deployment & workflow',
            skills: ['Git', 'Docker', 'Swagger', 'Postman', 'Linux'],
            icon: <Terminal className="h-4 w-4" />
        }
    ];

    return (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {stacks.map((stack, index) => (
                <GridItem
                    key={index}
                    icon={stack.icon}
                    title={stack.title}
                    description={stack.description}
                    skills={stack.skills}
                />
            ))}
        </ul>
    );
}

interface GridItemProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    skills: string[];
}

const GridItem = ({ icon, title, description, skills }: GridItemProps) => {
    return (
        <li className="min-h-[14rem] list-none">
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/50 backdrop-blur-xl p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="flex items-center justify-between">
                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted/50 p-2">
                                {icon}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                                {description}
                            </h2>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
