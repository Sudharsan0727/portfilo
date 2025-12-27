import { motion } from "framer-motion";
import {
    SiFigma, SiReact, SiCplusplus, SiNodedotjs, SiRedux, SiJavascript, SiCss3,
    SiAdobexd, SiNextdotjs, SiGatsby, SiAdobeillustrator, SiExpress, SiMongodb,
    SiLinkedin, SiGithub, SiHtml5, SiGoogle, SiTailwindcss, SiTypescript, SiGit
} from "react-icons/si";

const Skills = () => {

    const SkillItem = ({ Icon, color, name }) => {
        return (
            <div className="relative group cursor-pointer pointer-events-auto">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-9 h-9 md:w-14 md:h-14 bg-[#140f21] border border-white/5 rounded-full flex items-center justify-center relative z-10 group-hover:bg-[#1a1429] transition-colors hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <Icon className="text-lg md:text-3xl transition-transform group-hover:scale-110" style={{ color }} />
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-stone-300 pointer-events-none whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                    {name}
                </div>
            </div>
        )
    }

    // Orbit Component to handle rotation logic
    const Orbit = ({ radius, duration, icons, reverse = false }) => {
        return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 pointer-events-none"
                style={{ width: radius * 2, height: radius * 2 }}
            >
                <motion.div
                    className="w-full h-full relative"
                    animate={{ rotate: reverse ? -360 : 360 }}
                    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                >
                    {icons.map((item, i) => {
                        const count = icons.length;
                        const angle = (360 / count) * i;
                        const defaultOffset = -90; // Start from top
                        const finalAngle = angle + defaultOffset;

                        const angleRad = (finalAngle * Math.PI) / 180;

                        // We are rotating the CONTAINER, so the item just needs to be placed at the right spot 
                        // Actually, if we rotate the container, we place items absolutely.
                        // Standard circle param equations relative to center (radius, radius)
                        const x = radius * Math.cos(angleRad) + radius;
                        const y = radius * Math.sin(angleRad) + radius;

                        return (
                            <motion.div
                                key={i}
                                className="absolute pointer-events-auto"
                                style={{
                                    left: x,
                                    top: y,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <motion.div
                                    animate={{ rotate: reverse ? 360 : -360 }}
                                    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
                                >
                                    <SkillItem Icon={item.Icon} color={item.color} name={item.label} />
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        )
    }

    // Data Segments
    const innerIcons = [
        { Icon: SiReact, color: "#61DAFB", label: "React" },
        { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
        { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
        { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
    ];

    const middleIcons = [
        { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
        { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
        { Icon: SiExpress, color: "#ffffff", label: "Express" },
        { Icon: SiCplusplus, color: "#00599C", label: "C++" },
        { Icon: SiRedux, color: "#764ABC", label: "Redux" },
        { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
    ];

    const outerIcons = [
        { Icon: SiFigma, color: "#F24E1E", label: "Figma" },
        { Icon: SiGit, color: "#F05032", label: "Git" },
        { Icon: SiAdobexd, color: "#FF61F6", label: "Adobe XD" },
        { Icon: SiAdobeillustrator, color: "#FF9A00", label: "Illustrator" },
        { Icon: SiCss3, color: "#1572B6", label: "CSS3" },
        { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
        { Icon: SiGatsby, color: "#663399", label: "Gatsby" },
        { Icon: SiGithub, color: "#ffffff", label: "GitHub" },
    ];

    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center py-20 bg-[#050309] overflow-hidden">

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Header Text */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 relative z-20 px-4"
            >
                <h2 className="text-3xl md:text-5xl font-normal text-white mb-4 tracking-wide">
                    My Technical <span className="text-purple-500 font-bold">Universe</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl tracking-wide font-light max-w-2xl mx-auto">
                    The technologies and tools I use to bring ideas to life.
                </p>
            </motion.div>

            {/* Solar System Container */}
            <div className="relative w-[340px] h-[340px] md:w-[800px] md:h-[800px] flex items-center justify-center mt-[-40px]">

                {/* Central Core (Sun) */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-20 w-16 h-16 md:w-24 md:h-24 bg-[#2e1065] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)] border border-purple-500/50"
                >
                    <span className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-purple-400">S</span>
                </motion.div>

                {/* Orbits - Desktop */}
                <div className="hidden md:block">
                    {/* Inner Ring */}
                    <Orbit radius={130} duration={25} icons={innerIcons} />
                    {/* Middle Ring */}
                    <Orbit radius={230} duration={35} icons={middleIcons} reverse={true} />
                    {/* Outer Ring */}
                    <Orbit radius={330} duration={45} icons={outerIcons} />
                </div>

                {/* Mobile View - Scaled Orbits */}
                <div className="block md:hidden">
                    {/* Inner Ring - Mobile */}
                    <Orbit radius={55} duration={20} icons={innerIcons} />
                    {/* Middle Ring - Mobile */}
                    <Orbit radius={110} duration={30} icons={middleIcons} reverse={true} />
                    {/* Outer Ring - Mobile */}
                    <Orbit radius={165} duration={40} icons={outerIcons} />
                </div>

            </div>

            {/* Decorative Stars */}
            <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
            <div className="absolute top-1/2 left-10 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-150"></div>
            <div className="absolute top-1/3 right-10 w-[2px] h-[2px] bg-white/30 rounded-full animate-pulse delay-150"></div>


        </section>
    );
};

export default Skills;
