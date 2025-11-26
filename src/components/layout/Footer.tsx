import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
            <div className="container mx-auto px-6 sm:px-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                                <Image
                                    src="/Images/goat-logo.png"
                                    alt="GoatGoat logo"
                                    fill
                                    sizes="32px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-base font-bold tracking-tight text-slate-100">
                                Goat
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Connecting customers, local sellers, and delivery agents in one seamless platform.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-100 mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#customers" className="hover:text-emerald-400 transition-colors">Customers</a></li>
                            <li><a href="#sellers" className="hover:text-emerald-400 transition-colors">Sellers</a></li>
                            <li><a href="#delivery" className="hover:text-emerald-400 transition-colors">Delivery Partners</a></li>
                            <li><a href="#technology" className="hover:text-emerald-400 transition-colors">Technology</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-100 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                            <li><a href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Goat. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Github size={18} /></a>
                        <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors"><Linkedin size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
