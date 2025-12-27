import { useState, useEffect } from "react";
import {
    Menu, X, Github, Linkedin, Instagram, ArrowRight,
    ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const links = [
        { name: "Home", href: "#home", id: "01", color: "#6366f1" },
        { name: "Work", href: "#work", id: "02", color: "#ec4899" },
        { name: "Services", href: "#services", id: "03", color: "#10b981" },
        { name: "Projects", href: "#projects", id: "04", color: "#f59e0b" },
        { name: "Contact", href: "#contact", id: "05", color: "#3b82f6" },
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/Sudharsan0727", label: "Github" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sudharsan-k-1ab54930b/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/__.sudharsan.xo._/", label: "Instagram" },
    ];

    const containerVariants = {
        closed: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2
            }
        },
        open: {
            y: "0%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const linkVariants = {
        closed: { x: -50, opacity: 0 },
        open: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full py-6 px-6 md:px-12 backdrop-blur-md bg-black/60 border-b border-white/5 transition-all duration-300 ${isOpen ? 'z-[10004]' : 'z-[100]'}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo Icon */}
                    <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-transform group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white relative z-10 group-hover:text-purple-400 transition-colors">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-[10005] w-12 h-12 flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10 backdrop-blur-md transition-all active:scale-90"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? <X size={24} key="x" /> : <Menu size={24} key="menu" />}
                        </AnimatePresence>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Liquid Reveal Hub */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-[10002] md:hidden bg-[#0A0A0A] overflow-hidden"
                    >
                        {/* Dynamic Background Mesh */}
                        <div className="absolute inset-0 transition-colors duration-1000 ease-in-out opacity-20"
                            style={{ background: hoveredIndex !== null ? links[hoveredIndex].color : 'transparent' }}>
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
                        </div>

                        <div className="relative h-full flex flex-col pt-32 px-10">
                            {/* Navigation Links Section */}
                            <div className="flex flex-col gap-6">
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        custom={i}
                                        variants={linkVariants}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex flex-col"
                                    >
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-[10px] text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-[0.2em] font-medium">
                                                {link.id}
                                            </span>
                                            <h3 className="text-5xl font-bold text-white group-hover:italic transition-all duration-300 relative tracking-tighter">
                                                {link.name}
                                                <motion.span
                                                    className="absolute -bottom-2 left-0 h-1 bg-white"
                                                    initial={{ width: 0 }}
                                                    whileHover={{ width: '100%' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </h3>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Info Section - Bottom */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="mt-auto mb-12 flex flex-col gap-10"
                            >
                                <div className="h-px w-full bg-white/5"></div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-4">
                                        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Socials</span>
                                        <div className="flex flex-col gap-2">
                                            {socialLinks.map((social) => (
                                                <a key={social.label} href={social.href} className="text-sm text-white/60 hover:text-white flex items-center gap-2 group transition-colors">
                                                    {social.label}
                                                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Location</span>
                                        <p className="text-sm text-white/60">India, Currently Remote</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-[10px] text-white/20 font-bold uppercase tracking-widest">
                                    <span>© 2025 Sudharsan</span>
                                    <div className="flex items-center gap-2 text-white/40">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        <span>Available for projects</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Liquid Visual Element */}
                        <motion.div
                            className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-1000"
                            style={{ background: hoveredIndex !== null ? links[hoveredIndex].color : '#6366f1' }}
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
