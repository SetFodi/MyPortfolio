import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import { Pricing } from '@/components/ui/pricing'
import { motion } from 'framer-motion'
import { FaRocket, FaHandshake, FaGem } from 'react-icons/fa'

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
        <div className="bg-transparent text-white selection:bg-purple-500/30 selection:text-white min-h-screen flex flex-col font-sans">
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

                {/* CUSTOM ENTERPRISE SECTION */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 p-8 md:p-16 text-center"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
                                <FaGem className="text-2xl text-purple-400" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
                            <p className="text-lg text-white/70 mb-10 leading-relaxed">
                                Have a complex project or specific requirements not covered above?
                                I offer tailored development for large-scale applications, SaaS platforms,
                                and unique digital experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact?plan=custom"
                                    className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300"
                                >
                                    Contact for a Quote
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
