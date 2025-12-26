"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Select a Template",
        description: "Choose from our wide variety of content templates for blog posts, social media, emails, and more.",
    },
    {
        number: "02",
        title: "Describe Your Topic",
        description: "Enter a few keywords or a short description of what you want to write about.",
    },
    {
        number: "03",
        title: "Generate & Edit",
        description: "Our AI creates a draft instantly. Review, edit, and export your content ready for publishing.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        How It Works
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Create professional content in three simple steps.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold text-white bg-purple-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {step.number}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                                {step.description}
                            </p>

                            {/* Connecting line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gray-200 dark:bg-gray-800 -z-10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
