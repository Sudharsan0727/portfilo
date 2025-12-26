import { motion } from "framer-motion";
import { Server, Layout, Database, GitBranch, Terminal, Cpu, Globe, Zap, Code2 } from "lucide-react";

const Work = () => {
    return (
        <section id="work" className="py-24 px-4 relative overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] -z-10"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <div className="mb-12 flex items-end gap-4">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Professional Journey</h2>
                    <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-1 mb-4"></div>
                </div>

                {/* Main Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5"
                >
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none"></div>

                    <div className="grid lg:grid-cols-[1.5fr_2fr] min-h-[500px] relative z-10">

                        {/* Left Column: Glass Panel */}
                        <div className="p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
                            {/* Inner Lighting */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>

                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 ml-0.5 text-purple-300 text-xs font-sans mb-8 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                    </span>
                                    2 YEARS EXPERIENCE
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                    Full Stack Developer
                                </h3>
                                <div className="text-xl text-white/50 mb-8 font-light flex items-center gap-2">
                                    <Code2 size={20} className="text-purple-400" />
                                    <span>TechSolutions Inc.</span>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-8">
                                    Orchestrated end-to-end development of scalable web applications.
                                    Specialized in building robust backend architectures while delivering
                                    pixel-perfect frontend experiences.
                                </p>
                            </div>

                            {/* Core Tech Stack Bubbles */}
                            <div>
                                <h4 className="text-xs font-bold text-purple-300 mb-4 uppercase tracking-widest pl-1">Core Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"].map((tech) => (
                                        <span key={tech} className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl text-gray-200 text-sm flex items-center gap-2 hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default shadow-sm backdrop-blur-md">
                                            {tech === "React" && <Layout size={14} className="text-blue-400" />}
                                            {tech === "Node.js" && <Server size={14} className="text-green-400" />}
                                            {tech === "PostgreSQL" && <Database size={14} className="text-blue-300" />}
                                            {tech === "AWS" && <Globe size={14} className="text-orange-400" />}
                                            {tech === "TypeScript" && <Cpu size={14} className="text-blue-500" />}
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Contributions Grid */}
                        <div className="p-8 md:p-12 bg-black/20 backdrop-blur-sm">
                            <h4 className="text-xs font-bold text-blue-300 mb-8 uppercase tracking-widest pl-1">Key Impact & Contributions</h4>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group shadow-lg backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <Zap className="text-blue-400" size={20} />
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Performance</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Optimized database queries and API response times, reducing latency by 40%.
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group shadow-lg backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                                        <Layout className="text-purple-400" size={20} />
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Architecture</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Built a reusable component library used across 3 major internal dashboards.
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group shadow-lg backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/5 border border-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                        <GitBranch className="text-green-400" size={20} />
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">CI/CD</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Automated deployment workflows using GitHub Actions, cutting deploy time in half.
                                    </p>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group shadow-lg backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/5 border border-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.1)]">
                                        <Terminal className="text-pink-400" size={20} />
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Backend</h5>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Designed secure RESTful APIs and handled complex authentication flows (OAuth2).
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
