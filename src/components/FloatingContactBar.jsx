import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, ArrowUp, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingContactBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const phoneNumber = "+916374463248";
    const whatsappNumber = "916374463248";
    const email = "contactsudharsank@gmail.com";

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const actions = [
        {
            icon: Phone,
            href: `tel:${phoneNumber}`,
            color: "group-hover:text-blue-400",
            title: "Voice Call"
        },
        {
            icon: MessageCircle,
            href: `https://wa.me/${whatsappNumber}`,
            color: "group-hover:text-green-400",
            title: "WhatsApp"
        },
        {
            icon: Mail,
            href: `mailto:${email}`,
            color: "group-hover:text-purple-400",
            title: "Email"
        }
    ];

    return (
        <div className="fixed right-6 bottom-10 z-[10000] flex flex-col items-center gap-6">

            {/* Scroll to Top (Appears on Scroll) */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all shadow-2xl"
            >
                <ArrowUp size={20} />
            </motion.button>

            {/* Vertical Action Stripe */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="relative flex flex-col items-center p-2 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
                {/* Glow bar behind */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10 rounded-full -z-10 opacity-50"></div>

                {actions.map((action, index) => (
                    <motion.a
                        key={action.title}
                        href={action.href}
                        target={action.title === "WhatsApp" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 text-white/40 hover:text-white transition-all group relative flex items-center"
                    >
                        <action.icon size={22} className={`transition-colors ${action.color}`} />

                        {/* Magnetic Tooltip */}
                        <div className="absolute right-full mr-6 px-3 py-1.5 bg-zinc-900/90 text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap -translate-x-2 group-hover:translate-x-0">
                            {action.title}
                        </div>
                    </motion.a>
                ))}

                <div className="w-8 h-px bg-white/5 my-2"></div>

                {/* Share Toggle */}
                <motion.button
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="p-4 text-white/20 hover:text-white transition-colors"
                >
                    <Share2 size={20} />
                </motion.button>
            </motion.div>
        </div>
    );
};

export default FloatingContactBar;
