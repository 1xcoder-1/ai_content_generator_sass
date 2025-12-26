"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, PenTool, LayoutTemplate, Globe } from "lucide-react";

const features = [
    {
        icon: <Clock className="w-8 h-8 text-purple-600" />,
        title: "Save Time",
        description: "Generate hours worth of content in just seconds. Focus on strategy while AI handles the writing.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        title: "High Quality",
        description: "Professional-grade content that reads naturally and engages your audience effectively.",
    },
    {
        icon: <Zap className="w-8 h-8 text-orange-500" />,
        title: "Instant Results",
        description: "No more writer's block. Get ideas and drafts instantly with our advanced AI models.",
    },
    {
        icon: <PenTool className="w-8 h-8 text-pink-500" />,
        title: "Multiple Formats",
        description: "From blog posts to social media cations, we cover all your content needs.",
    },
    {
        icon: <LayoutTemplate className="w-8 h-8 text-green-500" />,
        title: "Templates Library",
        description: "Choose from dozens of pre-built templates for fast content generation.",
    },
    {
        icon: <Globe className="w-8 h-8 text-indigo-500" />,
        title: "SEO Optimized",
        description: "Content generated with SEO best practices to help you rank higher.",
    },
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Powerful Features
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Everything you need to scale your content production without compromising quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="mb-5 bg-gray-50 dark:bg-gray-700/50 w-16 h-16 rounded-xl flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
