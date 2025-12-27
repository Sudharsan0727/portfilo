import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { Facebook, Code, Globe, Cpu, Server, Database, Mouse } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20">

            {/* Central Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-5xl mx-auto w-full flex flex-col gap-12 md:gap-20">

                {/* Top Section: Avatar & Headlines */}

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse -z-10"></div>
                <div className="absolute bottom-40 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse -z-10 delay-1000"></div>
                <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-white/10 rounded-full -z-10"></div>
                <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-dashed border-white/5 rounded-full -z-10 animate-spin-slow"></div>

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
                                alt="Sudharsan - Full Stack Developer Profile Picture"
                                className="w-full h-full object-contain relative z-20 drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-sm md:text-base mb-2 font-medium leading-relaxed"
                        >
                            A Designer who
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl md:text-4xl font-bold tracking-wide text-white leading-[1.2] mb-4"
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
                            className="text-gray-400 text-[10px] md:text-xs max-w-sm leading-relaxed"
                        >
                            Because if the cover does not impress you what else can?
                        </motion.p>

                    </div>
                </div>

                {/* Bottom Section: Introduction & Bio */}
                <div className="w-full text-left max-w-6xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        I'm a Full Stack Developer.
                        <span className="text-white animate-pulse">|</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-2 text-base md:text-lg text-gray-300 mb-6"
                    >
                        Currently, I'm a Full Stack Developer at
                        <span className="flex items-center gap-1 text-purple-500 font-semibold">
                            <Globe size={20} /> Freelancer
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl"
                    >
                        A passionate Full Stack Developer with 2+ years of experience. I build scalable, functional web applications that merge robust backend architecture with engaging, pixel-perfect frontend experiences.
                    </motion.p>
                </div>

            </div>


            {/* Floating Tech Icons - Background */}
            <div className="absolute inset-0 pointer-events-none">
                <FloatingIcon icon={Code} className="top-1/4 left-10 text-purple-500/20" delay={0} />
                <FloatingIcon icon={Globe} className="top-1/3 right-10 text-blue-500/20" delay={2} />
                <FloatingIcon icon={Cpu} className="bottom-1/4 left-20 text-green-500/20" delay={4} />
                <FloatingIcon icon={Server} className="bottom-1/3 right-20 text-pink-500/20" delay={1} />
                <FloatingIcon icon={Database} className="top-20 right-1/3 text-yellow-500/20" delay={3} />
            </div>



        </section >
    );
};

const FloatingIcon = ({ icon: Icon, className, delay }) => (
    <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
        className={`absolute ${className}`}
    >
        <Icon size={48} />
    </motion.div>
);

export default Hero;
