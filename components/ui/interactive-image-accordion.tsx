import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import FlightButton from '../FlightButton';
import { FlowButton } from './flow-button';

// --- Data for the image accordion ---
// Populated with user's specific project data
const accordionItems = [
    {
        id: 1,
        title: 'Clean Code',
        description: 'Writing maintainable and scalable software',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
        link: '/projects'
    },
    {
        id: 2,
        title: 'Architecture',
        description: 'Designing robust system foundations',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        link: '/projects'
    },
    {
        id: 3,
        title: 'Innovation',
        description: 'Exploring new technologies and solutions',
        imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
        link: '/projects'
    },
    {
        id: 4,
        title: 'Collaboration',
        description: 'Building great things together',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        link: '/projects'
    },
    {
        id: 5,
        title: 'Lifestyle',
        description: 'Balancing code with creativity',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        link: '/projects'
    },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { item: any, isActive: boolean, onMouseEnter: () => void }) => {
    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-full md:w-[350px] lg:w-[400px]' : 'w-[60px] md:w-[80px] lg:w-[100px]'}
      `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                onError={(e) => {
                    // Fallback if image fails
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=' + item.title;
                }}
            />
            {/* Dark overlay */}
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? 'bg-opacity-30' : 'bg-opacity-60'}`}></div>

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Vertical Text (Inactive State) */}
                {!isActive && (
                    <span className="absolute bottom-12 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-white text-lg font-bold tracking-wider uppercase opacity-80">
                        {item.title}
                    </span>
                )}

                {/* Active Content */}
                <div className={`transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <div className="inline-flex items-center gap-2 text-white text-sm font-medium group">
                        View Project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </a>
    );
};

// --- Main App Component ---
export default function InteractiveImageAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="bg-transparent text-foreground font-sans py-16 md:py-24 min-h-[80vh] md:min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20">

                    {/* Left Side: Content */}
                    <div className="w-full xl:w-5/12 text-center xl:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border dark:border-white/10 border-gray-200 dark:bg-white/5 bg-gray-50 px-4 py-1.5 backdrop-blur-md">
                            <span className="text-xs font-semibold uppercase tracking-wider text-green-500">
                                Junior Odoo Developer
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                            Crafting <br />
                            <span className="bg-gradient-to-br from-purple-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                                Digital Stories
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl mx-auto xl:mx-0 leading-relaxed">
                            I'm Luka, a Full Stack Developer building robust applications that scale.
                            Explore my latest work in web development, from e-commerce platforms to interactive apps.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pt-4">
                            <FlightButton
                                href="#contact"
                                text="Contact Me"
                                icon={MessageCircle}
                                className="bg-foreground text-background border dark:border-white/20 border-gray-300"
                            />

                            <FlowButton asChild text="All Projects">
                                <a href="/projects" className="gap-2">
                                </a>
                            </FlowButton>
                        </div>
                    </div>

                    {/* Right Side: Image Accordion - Hidden on mobile */}
                    <div className="hidden md:block w-full xl:w-7/12">
                        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
