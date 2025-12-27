import { motion } from "framer-motion";
import { Headphones, Coffee, Heart, Gamepad2, Dumbbell, Bike } from "lucide-react";

const Lifestyle = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <span className="text-purple-500 font-sans text-xs uppercase tracking-widest">Personal</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Life <span className="text-gray-600">Beyond Code</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Fueling innovation through diverse passions and everyday inspirations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: Music (Spans 2 cols on tablet/desktop) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 md:col-span-2 bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-2xl text-purple-400">
                                    <Headphones size={24} />
                                </div>
                                <SoundWave />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Synthwave & Lo-Fi</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    My coding flow state is powered by retro synthesizers and chill beats.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Coffee */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 bg-orange-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-colors"></div>
                        <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
                            <div className="p-3 bg-white/5 rounded-2xl text-orange-400 w-fit">
                                <Coffee size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Coffee</h3>
                                <p className="text-gray-400 text-sm">A dark roast pour-over is my morning ritual.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Gaming */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors"></div>
                        <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
                            <div className="p-3 bg-white/5 rounded-2xl text-blue-400 w-fit">
                                <Gamepad2 size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
                                <p className="text-gray-400 text-sm">FPS and Strategy games to sharpen reflexes.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Partner */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 bg-pink-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors"></div>
                        <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
                            <div className="p-3 bg-white/5 rounded-2xl text-pink-400 w-fit">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">My Partner</h3>
                                <p className="text-gray-400 text-sm">My constant source of happiness and inspiration.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Sports (Spans 2 cols on tablet/desktop) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 md:col-span-2 bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-4 right-10 text-white/5">
                            <CloudAnimation />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                            <div className="p-3 bg-white/5 rounded-2xl text-green-400 w-fit">
                                <Dumbbell size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Sports & Athletics</h3>
                                <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                                    Staying active fosters discipline and mental clarity. It's the balance to my coding life.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 6: Bike */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="col-span-1 bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 bg-yellow-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-500/20 transition-colors"></div>
                        <div className="relative z-10 min-h-[180px] flex flex-col justify-between">
                            <div className="p-3 bg-white/5 rounded-2xl text-yellow-400 w-fit">
                                <Bike size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Bike Travel</h3>
                                <p className="text-gray-400 text-sm">Exploring the open road on two wheels.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SoundWave = () => {
    return (
        <div className="flex gap-1 items-end h-8">
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className="w-1 bg-purple-500 rounded-full"
                    animate={{
                        height: ["20%", "100%", "20%"]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const CloudAnimation = () => {
    return (
        <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            <svg width="100" height="60" viewBox="0 0 24 24" fill="currentColor" className="opacity-20 text-white">
                <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.2104 17.854 10.021C17.597 6.643 14.856 4 11.5 4C8.144 4 5.403 6.643 5.146 10.021C2.823 10.2104 1 12.132 1 14.5C1 16.9853 3.01472 19 5.5 19H17.5Z" />
            </svg>
        </motion.div>
    );
}

export default Lifestyle;
