import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "./Projects";

const AllProjects = () => {
    const fullArchive = [
        ...projects,
        {
            id: "06",
            title: "Pick Me Nuts",
            category: "E-Commerce",
            description: "Pure, Fresh & Premium - Nuts and Spices You Can Trust. A premium e-commerce platform for high-quality dry fruits and spices.",
            image: "/pick-me-nuts.png",
            tags: ["Wordpress", "E-Commerce", "Php"],
            year: "2024",
            link: "https://pickmenuts.com"
        },
        {
            id: "07",
            title: "Trado",
            category: "FinTech",
            description: "Traders Social Media. A platform connecting trading experts with traders to share insights, strategies, and knowledge seamlessly.",
            image: "/trado.png",
            tags: ["React", "Tailwind css", "Social Media"],
            year: "2024",
            link: "https://mytrado.co.in/"
        },
        {
            id: "08",
            title: "Pocket Shop",
            category: "E-Commerce",
            description: "Modern Spiritual Focus. A unique e-commerce store blending modern design with daily spiritual focus, featuring The God Calendar.",
            image: "/pocketshop.png",
            tags: ["Shopify", "E-Commerce", "Web Design"],
            year: "2024",
            link: "https://pocketshop.co.in/"
        },
        {
            id: "09",
            title: "Infletio",
            category: "Consulting",
            description: "One Step Closer To Your Dream Job. A modern recruitment and consulting platform connecting candidates with their dream roles.",
            image: "/infletio.png",
            tags: ["React", "Tailwind css", "Node js"],
            year: "2024",
            link: "https://infletio.com/"
        }
    ];

    return (
        <div className="bg-[#050309] text-white selection:bg-purple-500 selection:text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between mix-blend-difference">
                <Link
                    to="/#projects"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium tracking-wide">Back</span>
                </Link>
                <div className="text-sm font-bold tracking-widest uppercase text-white/50">
                    Scroll to Explore
                </div>
            </header>

            {/* Snap Scroll Container */}
            <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">

                {/* Intro Slide */}
                <section className="h-screen w-full snap-start flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#050309]">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>
                    <div className="relative z-10 text-center">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500/50 leading-[0.9]">
                            WORK.<br />ARCHIVE
                        </h1>
                        <p className="text-gray-400 uppercase tracking-[0.2em] text-sm animate-pulse">
                            Scroll Down
                        </p>
                    </div>
                </section>

                {fullArchive.map((project, index) => (
                    <ProjectSlide key={project.id} project={project} index={index} />
                ))}

                {/* Footer Slide */}
                <section className="h-[50vh] w-full snap-start flex items-center justify-center bg-zinc-950 border-t border-white/10">
                    <div className="text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Thanks for viewing</p>
                        <p className="text-white text-xl font-bold">&copy; {new Date().getFullYear()} Sudharsan</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

const ProjectSlide = ({ project, index }) => {
    return (
        <section className="min-h-screen w-full snap-start flex items-center justify-center relative overflow-hidden border-t border-white/5 py-20 md:py-0">
            {/* Background Image with blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover blur-3xl opacity-20 scale-110"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center relative z-10">

                {/* Content Left */}
                <div className="order-2 md:order-1 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-purple-400 font-mono text-sm">/{project.id}</span>
                        <span className="h-[1px] w-12 bg-purple-500/50"></span>
                        <span className="text-purple-300 text-sm font-bold uppercase tracking-widest">
                            {project.category}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mb-8 text-justify">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white border-b border-white pb-1 w-fit hover:opacity-70 transition-opacity group"
                    >
                        <span className="text-lg">Open Project</span>
                        <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Image Right */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10 bg-zinc-900 group"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain p-2 md:p-2 group-hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
