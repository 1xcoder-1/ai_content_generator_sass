"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Marketing Manager",
        content: "This tool has completely changed how we approach content marketing. We're producing 5x more content with better engagement.",
        avatar: "/avatars/sarah.jpg", // Placeholder, will use initials if no image
    },
    {
        name: "Mike Chen",
        role: "Startup Founder",
        content: "The quality of the AI generation is incredible. It captures our brand voice perfectly. Highly recommended for any startup.",
        avatar: "/avatars/mike.jpg",
    },
    {
        name: "Emily Davis",
        role: "Freelance Writer",
        content: "I was skeptical at first, but this acts as the perfect writing assistant. It helps me overcome writer's block instantly.",
        avatar: "/avatars/emily.jpg",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
            <div className="container px-4 mx-auto">
                <h2 className="mb-16 text-3xl font-bold text-center text-gray-900 sm:text-4xl dark:text-white">
                    Trusted by Creators
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 bg-white rounded-2xl shadow-sm dark:bg-gray-900"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 mr-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
                                    {testimonial.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
