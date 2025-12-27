import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ArrowRight } from "lucide-react";

export const projects = [
    {
        id: "01",
        title: "DAC Developers",
        category: "Construction",
        description: "The Human Centric Construction Company. A visually immersive corporate website for a leading builder, emphasizing their core values and property portfolio.",
        image: "/dac-developers.png",
        tags: ["WordPress", "SQL", "PHP"],
        year: "2024",
        link: "http://dacdevelopers.com/"
    },
    {
        id: "02",
        title: "Chennai Media",
        category: "Digital Marketing",
        description: "A premier influencer marketing platform connecting brands with Chennai's top digital creators. Facilitates seamless collaboration, campaign management, and brand growth strategies.",
        image: "/chennai-media.png",
        tags: ["WordPress", "SQL", "PHP"],
        year: "2023",
        link: "https://chennaimedia.in/"
    },
    {
        id: "03",
        title: "Nexto Digital",
        category: "Digital Agency",
        description: "Transform Your Digital Presence. We craft premium web experiences, mobile apps, and digital strategies that drive real business results.",
        image: "/nexto-digital.png",
        tags: ["Vite", "React", "Node.js", "Tailwind CSS"],
        year: "2023",
        link: "http://nextodigital.in/"
    },
    {
        id: "04",
        title: "Nexto Events",
        category: "Event Platform",
        description: "A comprehensive event booking system. Users can discover, filter, and book tickets for events with a seamless checkout experience.",
        image: "/nexto-events.png",
        tags: ["Vite React", "Node.js", "PostgreSQL", "Redis Cache"],
        year: "2024",
        link: "https://events.chennaimedia.in/"
    },
    {
        id: "05",
        title: "MJS Traders",
        category: "E-Commerce",
        description: "Experience the bold, aromatic flavor of premium spice trading. A direct-to-consumer e-commerce platform for high-quality spices.",
        image: "/mjs-traders.png",
        tags: ["Wordpress", "Custom code", "E-commerce"],
        year: "2024",
        link: "https://mjstraders.co.in/"
    }
];

const Projects = () => {
    const [activeId, setActiveId] = useState(projects[0].id);
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative bg-[#050309]" id="projects">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

                {/* Left Column: Sticky Content */}
                <div className="hidden md:flex w-full md:w-[40%] h-screen sticky top-0 flex-col justify-center px-6 py-12">
                    <div className="relative h-full flex flex-col justify-center">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`absolute inset-x-0 transition-all duration-700 ease-in-out flex flex-col justify-center ${activeId === project.id ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-purple-500 text-sm tracking-widest uppercase font-medium">/{project.id}</span>
                                    <div className="h-[1px] w-12 bg-white/20"></div>
                                    <span className="text-white/50 text-sm uppercase tracking-widest">{project.category}</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mb-8 text-justify">
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
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white transition-colors group">
                                        <span className="text-lg">View Case Study</span>
                                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-12 left-6 z-20">
                        <Link
                            to="/all-projects"
                            className="relative w-full md:w-auto text-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group inline-block"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-2">
                                Explore More Work
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Scrolling Images */}
                <div className="w-full md:w-[60%] flex flex-col gap-32 md:gap-48 lg:gap-64 py-20 md:py-48 px-4">
                    {/* Header for Mobile */}
                    <div className="md:hidden mb-1 text-center">
                        <h2 className="text-3xl font-bold text-white">Selected Works</h2>
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
            viewport={{ margin: "-45% 0px -45% 0px" }} // Much tighter center-sync for tablet alignment
            className="group relative"
        >
            {/* Mobile Title (Since Sticky Left is hidden on mobile) */}
            <div className="md:hidden mb-4 text-left">
                <span className="text-purple-500 text-xs tracking-widest uppercase mb-1 block font-medium">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
            </div>

            <div className="sticky top-24 md:static aspect-video w-full rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 flex items-center justify-center">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay for mobile mainly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden"></div>
                <div className="absolute bottom-6 left-6 md:hidden">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider">
                        View Project
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
