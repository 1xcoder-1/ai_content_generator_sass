"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-32 pb-16 lg:pt-48 lg:pb-32">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[50%] -left-[20%] w-[70%] h-[70%] rounded-full bg-purple-200/30 blur-3xl" />
                <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-200/30 blur-3xl" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-purple-50 text-purple-700 ring-1 ring-purple-200"
                >
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">New: AI Agent V2.0 Available</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl dark:text-white"
                >
                    Create content <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">10x faster</span> with AI
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto mb-10 text-lg text-gray-600 sm:text-xl dark:text-gray-300"
                >
                    Revolutionize your workflow with our advanced AI content generator.
                    Write blogs, social media posts, and rewrite articles in seconds.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/dashboard">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all">
                            Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="#features">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                            View Features
                        </Button>
                    </Link>
                </motion.div>

                {/* Dashboard Preview or Floating Elements */}
                {/* <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="relative mt-20 mx-auto max-w-5xl rounded-xl shadow-2xl border border-gray-200 bg-white dark:bg-gray-800 overflow-hidden"
        >
          <img src="/dashboard-preview.png" alt="Dashboard Preview" className="w-full h-auto" />
        </motion.div> */}
            </div>
        </section>
    );
};

export default HeroSection;
