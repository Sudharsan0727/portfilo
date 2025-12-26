import { motion } from "framer-motion";
import { Code, Terminal, Cpu } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I am a passionate web developer with a keen eye for design. I started my journey exploring the basics of HTML & CSS and have since evolved into building complex, dynamic web applications using React, Node.js, and modern CSS frameworks like Tailwind.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            My goal is to build software that not only functions perfectly but also provides an intuitive and enjoyable user experience. When I'm not coding, you can find me exploring new technologies or gaming.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors">
                                <Code className="text-primary mb-2" size={24} />
                                <h3 className="font-semibold mb-1">Clean Code</h3>
                                <p className="text-xs text-gray-400">Maintainable & Scalable</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/50 transition-colors">
                                <Terminal className="text-secondary mb-2" size={24} />
                                <h3 className="font-semibold mb-1">Modern Tech</h3>
                                <p className="text-xs text-gray-400">Latest Frameworks</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/50 transition-colors">
                                <Cpu className="text-accent mb-2" size={24} />
                                <h3 className="font-semibold mb-1">Performance</h3>
                                <p className="text-xs text-gray-400">Optimized & Fast</p>
                            </div>
                        </div>
                    </div>

                    {/* Abstract Visual / Image Placeholder */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>
                        <div className="bg-neutral-900 rounded-2xl border border-white/10 aspect-square flex items-center justify-center overflow-hidden">
                            {/*  Placeholder for user image - using a generic creative gradient or icon for now */}
                            <span className="text-8xl text-white/5 font-extrabold select-none">DEV</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
