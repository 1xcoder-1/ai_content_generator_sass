"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/app/dashboard/_components/Logo";

const LandingHeader = () => {
    const { user, isLoaded } = useUser();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80"
                    : "bg-transparent"
                }`}
        >
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2">
                        <Logo />
                        {/* <span className="text-xl font-bold text-gray-900 dark:text-white">AI Content</span> */}
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="#features"
                            className="text-gray-600 hover:text-purple-600 font-medium transition-colors dark:text-gray-300"
                        >
                            Features
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-purple-600 font-medium transition-colors dark:text-gray-300"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-purple-600 font-medium transition-colors dark:text-gray-300"
                        >
                            About
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        {isLoaded && user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/dashboard">
                                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                                        Dashboard
                                    </Button>
                                </Link>
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        ) : (
                            <>
                                <Link href="/sign-in">
                                    <Button variant="ghost" className="text-gray-700 hover:text-purple-600 dark:text-gray-300">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/sign-up">
                                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 p-4 absolute w-full left-0 top-20 shadow-lg flex flex-col gap-4">
                    <Link
                        href="#features"
                        className="block py-2 text-gray-600 hover:text-purple-600 font-medium dark:text-gray-300"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#"
                        className="block py-2 text-gray-600 hover:text-purple-600 font-medium dark:text-gray-300"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Pricing
                    </Link>
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                        {isLoaded && user ? (
                            <>
                                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-purple-600 text-white">Dashboard</Button>
                                </Link>
                                <div className="flex justify-center">
                                    <UserButton afterSignOutUrl="/" />
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                                    <Button variant="outline" className="w-full">Sign In</Button>
                                </Link>
                                <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                                    <Button className="w-full bg-purple-600 text-white">Get Started</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default LandingHeader;
