import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import { Pricing } from '@/components/ui/pricing'
import { FaqAccordion } from '@/components/ui/faq-chat-accordion'
import { motion } from 'framer-motion'
import { FaRocket, FaHandshake, FaGem } from 'react-icons/fa'
import { FlowButton } from '@/components/ui/flow-button'

export default function PricingPage() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const plans = [
        {
            name: "Landing Page",
            price: "400-700",
            features: [
                "1-3 Pages with Modern Design",
                "Fully Responsive Design",
                "Contact Form Integration",
                "Google Maps Integration",
                "Social Media Links",
                "Basic SEO Optimization",
                "Database Setup",
                "User Authentication"
            ],
            description: "Perfect for small businesses or showcasing a product.",
            buttonText: "Start Now",
            href: "/contact?plan=landing",
            isPopular: false,
            marketPrice: "1,000-2,000",
            deliveryTime: "3-5 Days"
        },
        {
            name: "Business Website",
            price: "1,000+",
            features: [
                "3-7 Pages Professional Design",
                "Fully Responsive Layouts",
                "Content Management System (CMS)",
                "Blog / News Section",
                "Multilingual Support",
                "Full SEO Optimization",
                "Social Media Integration",
                "Online Payment System"
            ],
            description: "Full-featured website for established businesses.",
            buttonText: "Start Now",
            href: "/contact?plan=business",
            isPopular: true,
            marketPrice: "2,000-4,000",
            deliveryTime: "7-10 Days"
        },
        {
            name: "E-Commerce",
            price: "3,000+",
            features: [
                "Unlimited Products",
                "Advanced Product Search & Filtering",
                "Secure Cart & Checkout",
                "Order Management System",
                "Payment System Integration",
                "Admin Panel Dashboard",
                "Analytics & Reports",
                "Customer Accounts"
            ],
            description: "Complete online store solution.",
            buttonText: "Start Now",
            href: "/contact?plan=ecommerce",
            isPopular: false,
            marketPrice: "4,000-6,000+",
            deliveryTime: "14-21 Days"
        },
    ]

    return (
        <div className="bg-transparent text-foreground selection:bg-purple-500/30 selection:text-white min-h-screen flex flex-col font-sans">
            <Head>
                <title>Pricing | Luka Partenadze</title>
                <meta name="description" content="Transparent pricing packages for website development." />
            </Head>

            <Logo />
            <Navbar />

            <main className="pt-32 pb-32 flex-grow relative z-10">
                <Pricing
                    plans={plans}
                    title="Invest in Your Digital Presence"
                    description="High-quality development at competitive rates. Choose the package that fits your goals."
                />

                {/* CUSTOM ENTERPRISE SECTION - Redesigned as a Premium Card */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-3xl overflow-hidden dark:bg-zinc-900/80 bg-white/80 border dark:border-white/10 border-gray-200 backdrop-blur-xl p-8 md:p-12 text-center group"
                    >
                        {/* Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

                        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                            <div className="inline-flex items-center justify-center p-4 dark:bg-white/5 bg-gray-50 rounded-full mb-6 border dark:border-white/5 border-gray-100 group-hover:border-purple-500/30 transition-colors">
                                <FaGem className="text-3xl text-purple-400" />
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Need a Custom Solution?</h2>

                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                                Have a complex project or specific requirements not covered above?
                                I offer tailored development for large-scale applications, SaaS platforms,
                                and unique digital experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
                                <FlowButton asChild text="Contact for a Quote">
                                    <a href="/contact?plan=custom"></a>
                                </FlowButton>
                            </div>

                            <p className="text-muted-foreground/50 text-sm mt-6">
                                Fully scalable • Enterprise-grade security • Priority support
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* FAQ SECTION */}
                <section className="max-w-3xl mx-auto px-6 md:px-12 pb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Everything you need to know about my services and process.</p>
                    </div>

                    <FaqAccordion
                        data={[
                            {
                                id: 1,
                                question: "What is your typical turnaround time?",
                                answer: "For a standard landing page, it usually takes 3-5 days. Larger projects like e-commerce sites or custom web apps typically take 2-4 weeks, depending on complexity.",
                                icon: "⏱️",
                                iconPosition: "left"
                            },
                            {
                                id: 2,
                                question: "Do you provide hosting and domain setup?",
                                answer: "Yes! I can handle the entire deployment process, including setting up your domain, SSL certificate, and hosting on fast, reliable platforms like Vercel or AWS.",
                                icon: "🌐",
                                iconPosition: "right"
                            },
                            {
                                id: 3,
                                question: "Will my website be mobile-friendly?",
                                answer: "Absolutely. I follow a mobile-first approach, ensuring your site looks and performs perfectly on all devices, from smartphones to large desktop screens.",
                                icon: "📱",
                                iconPosition: "left"
                            },
                            {
                                id: 4,
                                question: "Do you offer maintenance after launch?",
                                answer: "Yes, I offer ongoing support packages to keep your website updated, secure, and running smoothly. We can discuss a plan that works for you.",
                                icon: "🛠️",
                                iconPosition: "right"
                            },
                            {
                                id: 5,
                                question: "What technologies do you use?",
                                answer: "I primarily use Next.js, React, and Tailwind CSS for modern, high-performance websites. For backends, I use Node.js, MongoDB, or SQL depending on the project needs.",
                                icon: "💻",
                                iconPosition: "left"
                            }
                        ]}
                        className="w-full"
                        questionClassName="dark:bg-white/5 bg-gray-50 hover:dark:bg-white/10 hover:bg-gray-100"
                        answerClassName="dark:bg-white/5 bg-gray-50 text-muted-foreground"
                        timestamp="Updated recently"
                    />
                </section>
            </main>

            <Footer />
        </div>
    )
}
