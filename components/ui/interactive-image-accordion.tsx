import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

// --- Data for the image accordion ---
// Populated with user's specific project data
const accordionItems = [
    {
        id: 1,
        title: 'AndWatch',
        description: 'Media tracking platform for movies & anime',
        imageUrl: '/andwatch.jpg', // Using local image path from data
        link: 'https://andwatch.vercel.app/'
    },
    {
        id: 2,
        title: 'Furniture',
        description: 'Modern 3D e-commerce platform',
        imageUrl: '/furniture.jpeg',
        link: 'https://github.com/SetFodi/furniture-store'
    },
    {
        id: 3,
        title: 'AndCook',
        description: 'Recipe sharing & discovery platform',
        imageUrl: '/images/AndCook.jpg',
        link: 'https://andcook.vercel.app'
    },
    {
        id: 4,
        title: 'Syncrolly',
        description: 'Real-time data synchronization app',
        imageUrl: '/images/syncrolly.jpg',
        link: 'https://syncrolly.com'
    },
    {
        id: 5,
        title: 'Typingy',
        description: 'Multiplayer typing speed platform',
        imageUrl: '/images/typingy.jpg',
        link: 'https://typingy.live'
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
        ${isActive ? 'w-[400px]' : 'w-[80px] md:w-[100px]'}
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
        <section className="bg-transparent text-white font-sans py-12 md:py-24 min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20">

                    {/* Left Side: Content */}
                    <div className="w-full xl:w-5/12 text-center xl:text-left space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
                                Junior Odoo Developer
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
                            Crafting <br />
                            <span className="bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                Digital Stories
                            </span>
                        </h1>

                        <p className="text-lg text-zinc-400 max-w-xl mx-auto xl:mx-0 leading-relaxed">
                            I'm Luka, a Full Stack Developer building robust applications that scale.
                            Explore my latest work in web development, from e-commerce platforms to interactive apps.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-zinc-200 transition-all active:scale-95"
                            >
                                Contact Me <MessageCircle className="w-4 h-4" />
                            </a>
                            <a
                                href="/projects"
                                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                            >
                                All Projects <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full xl:w-7/12">
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
