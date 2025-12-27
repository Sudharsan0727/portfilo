import { motion } from "framer-motion";
import { Gauge, Laptop, ShieldCheck, Code, ArrowRight } from "lucide-react";

const ValueProp = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Digital <span className="text-purple-500">Impact</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            I build more than just websites. I create high-converting digital experiences designed to scale efficiently and perform flawlessly.
                        </p>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-purple-500 transition-colors">
                        View Technical Stack <ArrowRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[minmax(380px,auto)]">

                    {/* Card 1: Speed (Large) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                            <Gauge size={120} className="text-purple-900 group-hover:text-purple-500 transition-colors" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center border border-purple-500/20">
                                <Gauge size={24} className="text-purple-400" />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">99/100 Performance</h3>
                                <p className="text-gray-400 max-w-md">
                                    Optimized Core Web Vitals for lightning-fast load times. We ensure your site passes Google's rigorous speed tests with flying colors.
                                </p>
                            </div>
                        </div>

                        {/* Animated Bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-[99%]"></div>
                    </motion.div>

                    {/* Card 2: Responsive (Portrait) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:row-span-2 bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 relative overflow-hidden group flex flex-col"
                    >
                        <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center border border-blue-500/20 mb-auto">
                            <Laptop size={24} className="text-blue-400" />
                        </div>

                        <div className="mt-8 mb-8 flex justify-center">
                            <div className="relative w-32 h-48 border-4 border-gray-700 rounded-2xl bg-gray-900 group-hover:w-48 group-hover:h-32 transition-all duration-700 ease-in-out flex items-center justify-center">
                                <span className="text-xs text-gray-500">Fluid UI</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Device Agnostic</h3>
                            <p className="text-gray-400">
                                Fluid layouts that adapt perfectly to any screen size. From 4k desktops to the smallest mobile devices.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Code Quality */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center border border-green-500/20 mb-6">
                            <Code size={24} className="text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
                        <p className="text-gray-400">
                            I write clean, maintainable, and well-documented code that scales seamlessly. By adhering to industry standards, I ensure future developers will love working on your project as much as I do.
                        </p>
                    </motion.div>

                    {/* Card 4: Security */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#0A0A0A] rounded-3xl p-8 border border-white/10 relative overflow-hidden group"
                    >
                        <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center border border-red-500/20 mb-6">
                            <ShieldCheck size={24} className="text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Secure</h3>
                        <p className="text-gray-400">
                            I implement robust security protocols to protect your data. From SSL encryption to secure authentication flows and strict data policies, I safeguard your digital assets against all vulnerabilities.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default ValueProp;
