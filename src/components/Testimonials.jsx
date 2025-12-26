import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "The platform's performance exceeded our wildest expectations. Handling millions of concurrent users without a hiccup.",
        name: "Sarah Jenkins",
        role: "VP of Engineering @ Stripe",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "Sudharsan translated our vague vision into a high-fidelity, interactive masterpiece. The design system he built is still in use.",
        name: "Mark Thompson",
        role: "Head of Product @ Linear",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "We saw a 40% increase in conversion rates after launching the new landing page. The animations guide the user perfectly.",
        name: "Emily Chen",
        role: "Marketing Director @ Vercel",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 4,
        text: "Reliable, creative, and fast. The backend architecture is robust and the frontend is simply beautiful. A pleasure to work with.",
        name: "James Wilson",
        role: "Founder @ Supabase",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 5,
        text: "Every interaction feels premium. The attention to detail in the micro-interactions is what sets this work apart.",
        name: "Anna Polina",
        role: "UX Researcher @ Google",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start in the middle

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getCardStyles = (index) => {
        const diff = index - activeIndex;
        // Handle wrap-around for endless feeling (optional) or just simple indices
        // Let's stick to simple indices for stability first, or better, calculate visual position

        // Visual position logic for centered active item
        if (index === activeIndex) {
            return {
                x: 0,
                scale: 1,
                zIndex: 10,
                opacity: 1,
                rotateY: 0,
                filter: "brightness(1)",
                pointerEvents: "auto"
            };
        } else if (index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)) {
            // Left Card
            return {
                x: -320,
                scale: 0.85,
                zIndex: 5,
                opacity: 0.6,
                rotateY: 15,
                filter: "brightness(0.5)",
                pointerEvents: "none"
            };
        } else if (index === activeIndex + 1 || (activeIndex === testimonials.length - 1 && index === 0)) {
            // Right Card
            return {
                x: 320,
                scale: 0.85,
                zIndex: 5,
                opacity: 0.6,
                rotateY: -15,
                filter: "brightness(0.5)",
                pointerEvents: "none"
            };
        } else {
            // Hidden/Far away cards
            const side = index < activeIndex ? -1 : 1;
            return {
                x: side * 800,
                scale: 0.5,
                zIndex: 0,
                opacity: 0,
                rotateY: 0,
                filter: "brightness(0)",
                pointerEvents: "none"
            };
        }
    };

    return (
        <section className="py-24 bg-background relative overflow-hidden" style={{ perspective: "1000px" }}>

            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
                <div className="flex justify-center gap-4">
                    <button onClick={handlePrev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                        <ArrowLeft size={20} />
                    </button>
                    <button onClick={handleNext} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div className="relative h-[450px] w-full flex items-center justify-center">
                {testimonials.map((item, index) => {
                    // Logic to handle cyclic wrapping for visual positions
                    // We need to map the current index relative to active index to determine position
                    // 0 1 [2] 3 4

                    let position = 0; // 0 = active, -1 = left, 1 = right, 2 = hidden
                    const len = testimonials.length;

                    // distance going forward
                    const forwardDist = (index - activeIndex + len) % len;
                    // distance going backward
                    const backwardDist = (activeIndex - index + len) % len;

                    if (index === activeIndex) position = 0;
                    else if (backwardDist === 1) position = -1; // It's immediately to the left
                    else if (forwardDist === 1) position = 1; // It's immediately to the right
                    else position = 2; // Hidden

                    return (
                        <Card
                            key={item.id}
                            item={item}
                            position={position}
                            onClick={() => {
                                if (position === -1) handlePrev();
                                if (position === 1) handleNext();
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const Card = ({ item, position, onClick }) => {

    const variants = {
        center: {
            x: 0,
            scale: 1,
            zIndex: 20,
            opacity: 1,
            rotateY: 0,
            filter: "blur(0px) brightness(1)",
        },
        left: {
            x: "-60%",
            scale: 0.8,
            zIndex: 10,
            opacity: 0.7,
            rotateY: 25,
            filter: "blur(2px) brightness(0.7)",
        },
        right: {
            x: "60%",
            scale: 0.8,
            zIndex: 10,
            opacity: 0.7,
            rotateY: -25,
            filter: "blur(2px) brightness(0.7)",
        },
        hidden: {
            x: 0,
            scale: 0.5,
            zIndex: 0,
            opacity: 0,
            rotateY: 0,
            filter: "blur(10px) brightness(0)",
        }
    };

    const state = position === 0 ? "center" : position === -1 ? "left" : position === 1 ? "right" : "hidden";

    return (
        <motion.div
            animate={state}
            variants={variants}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={onClick}
            className={`absolute w-[350px] md:w-[500px] h-[350px] bg-[#0F0F0F] border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl cursor-pointer`}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Content */}
            <div>
                <div className="flex gap-1 mb-6 text-yellow-500">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-200 text-lg sm:text-xl font-medium leading-relaxed">
                    "{item.text}"
                </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/20">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-white font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonials;
