"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative px-6 py-16 overflow-hidden text-center bg-purple-600 rounded-3xl sm:px-12 sm:py-24"
                >
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-500/50 blur-3xl opacity-50" />
                        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-blue-500/50 blur-3xl opacity-50" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Ready to Transform Your Content?
                        </h2>
                        <p className="max-w-2xl mx-auto mb-10 text-lg text-purple-100 sm:text-xl">
                            Join thousands of content creators using our AI to work smarter, not harder. Start your free trial today.
                        </p>
                        <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
                            <Link href="/dashboard">
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700 border-none">
                                    Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>

                        </div>
                        <p className="mt-6 text-sm text-purple-200">
                            No credit card required for free trial.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToActionSection;
