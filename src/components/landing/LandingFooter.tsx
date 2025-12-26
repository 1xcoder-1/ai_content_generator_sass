import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const LandingFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            {/* Replace with Logo component if needed, or text */}
                            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                                AI Content Gen
                            </div>
                        </Link>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            Empowering creators with next-gen AI tools.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><Github size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Product</h4>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            <li><Link href="#features" className="hover:text-purple-600 transition-colors">Features</Link></li>
                            <li><Link href="/dashboard" className="hover:text-purple-600 transition-colors">Templates</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Showcase</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Company</h4>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Legal</h4>
                        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-purple-600 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} AI Content Generator. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;
