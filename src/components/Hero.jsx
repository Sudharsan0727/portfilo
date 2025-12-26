import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { Facebook } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20">

            {/* Central Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 md:gap-20">

                {/* Top Section: Avatar & Headlines */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                    {/* Left Side: Avatar & Hello Tag */}
                    <div className="relative">

                        {/* Hello Tag & Arrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -top-12 -right-16 md:-right-24 flex flex-col items-start z-30"
                        >
                            <div className="flex items-center gap-2 text-gray-400 text-sm whitespace-nowrap">
                                <span>Hello! I Am</span>
                                <span className="text-purple-500 font-bold">Sudharsan</span>
                            </div>

                            {/* Drawn Arrow SVG */}
                            <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-gray-600 -ml-2 mt-1 transform rotate-12">
                                <path d="M48 2 C 30 25, 10 5, 2 28" stroke="currentColor" strokeWidth="1" fill="none" markerEnd="url(#arrowhead-small)" />
                                <defs>
                                    <marker id="arrowhead-small" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                                        <polygon points="0 0, 6 2, 0 4" fill="currentColor" />
                                    </marker>
                                </defs>
                            </svg>
                        </motion.div>

                        {/* The Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-48 h-48 md:w-64 md:h-64"
                        >
                            <img
                                src={profileImg}
                                alt="Avatar"
                                className="w-full h-full object-contain relative z-20 drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="text-left">

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-sm md:text-base mb-0 font-medium ml-1"
                        >
                            A Designer who
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-[1.1] mb-2"
                        >
                            Judges a book <br />
                            by its <span className="relative inline-block z-10">
                                cover...
                                {/* Purple Circle around 'cover' */}
                                <svg className="absolute w-[120%] h-[140%] -top-[20%] -left-[10%] text-purple-600 -z-10" viewBox="0 0 120 60" preserveAspectRatio="none">
                                    <ellipse cx="60" cy="30" rx="55" ry="25" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-5 60 30)" />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 text-[10px] md:text-xs max-w-sm ml-1"
                        >
                            Because if the cover does not impress you what else can?
                        </motion.p>

                    </div>
                </div>

                {/* Bottom Section: Introduction & Bio */}
                <div className="w-full text-left max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        I'm a Software Engineer.
                        <span className="text-white animate-pulse">|</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-2 text-base md:text-lg text-gray-300 mb-6"
                    >
                        Currently, I'm a Software Engineer at
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-500 hover:text-blue-400 transition-colors">
                            <Facebook size={20} fill="currentColor" /> Facebook,
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl"
                    >
                        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals.
                    </motion.p>
                </div>

            </div>
        </section>
    );
};

export default Hero;
