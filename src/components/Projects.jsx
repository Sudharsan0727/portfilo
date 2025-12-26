import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: "01",
        title: "Sonic Analytics",
        category: "AI Platform",
        description: "A real-time audio intelligence visualization engine. It processes millions of data points to create stunning visual representations of sound waves.",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=2548&auto=format&fit=crop",
        tags: ["Python", "React", "D3.js"],
        year: "2024"
    },
    {
        id: "02",
        title: "Nebula Stream",
        category: "Infrastructure",
        description: "Global low-latency 4K delivery network optimized for edge computing. Delivers content to millions of users with sub-millisecond latency.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
        tags: ["Go", "Docker", "K8s"],
        year: "2023"
    },
    {
        id: "03",
        title: "Aura System",
        category: "Design System",
        description: "Comprehensive enterprise UI kit with atomic design principles. Used by over 50 internal teams to build consistent products.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
        tags: ["Figma", "React", "Storybook"],
        year: "2023"
    },
    {
        id: "04",
        title: "CryptoVault",
        category: "Web3",
        description: "DeFi yield aggregator with smart contract automation. Securely manages over $10M in value locked across multiple chains.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
        tags: ["Solidity", "Hardhat", "Ethers"],
        year: "2022"
    },
    {
        id: "05",
        title: "Quantum UI",
        category: "Animation",
        description: "Physics-based interaction library for modern web applications. Brings lifelike gravity and friction to DOM elements.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        tags: ["Motion", "WebGL", "Three.js"],
        year: "2022"
    }
];

const Projects = () => {
    const [activeId, setActiveId] = useState(projects[0].id);
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative bg-[#050309]" id="projects">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

                {/* Left Column: Sticky Content */}
                <div className="hidden md:flex w-1/2 h-screen sticky top-0 flex-col justify-center px-12 py-12">
                    <div className="relative h-full flex flex-col justify-center">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`absolute inset-x-0 transition-all duration-500 ease-in-out flex flex-col justify-center ${activeId === project.id ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-12 pointer-events-none'}`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-purple-500 text-sm tracking-widest uppercase font-medium">/{project.id}</span>
                                    <div className="h-[1px] w-12 bg-white/20"></div>
                                    <span className="text-white/50 text-sm uppercase tracking-widest">{project.category}</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mb-8">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-300 bg-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <button className="flex items-center gap-3 text-white border-b border-white/30 pb-1 hover:border-purple-500 transition-colors group">
                                        <span className="text-lg">View Case Study</span>
                                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Scrolling Images */}
                <div className="w-full md:w-1/2 flex flex-col gap-24 py-24 px-4 md:px-12">
                    {/* Header for Mobile */}
                    <div className="md:hidden mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Selected Works</h2>
                    </div>

                    {projects.map((project) => (
                        <ProjectImage
                            key={project.id}
                            project={project}
                            setActiveId={setActiveId}
                        />
                    ))}

                    {/* Spacer for bottom scrolling */}
                    <div className="h-[20vh] hidden md:block"></div>
                </div>

            </div>
        </section>
    );
};

const ProjectImage = ({ project, setActiveId }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Notify parent when this image is in the center of the viewport
    // We can use a margin-based intersection observer logic or just framer motion's whileInView
    // The simplified way is onViewportEnter, but we want it to switch when it's mostly visible.
    // Let's use `onViewportEnter` with a margin.

    return (
        <motion.div
            ref={ref}
            onViewportEnter={() => setActiveId(project.id)}
            viewport={{ margin: "-50% 0px -50% 0px" }} // Triggers when element is in the middle 50% of screen
            className="group relative"
        >
            {/* Mobile Title (Since Sticky Left is hidden on mobile) */}
            <div className="md:hidden mb-6">
                <span className="text-purple-500 text-xs tracking-widest uppercase mb-2 block font-medium">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
            </div>

            <div className="sticky top-24 md:static aspect-[4/5] md:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay for mobile mainly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
                <div className="absolute bottom-6 left-6 md:hidden">
                    <button className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
                        View Project
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
