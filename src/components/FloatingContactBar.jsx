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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[10000] flex flex-col items-end gap-4">

            {/* Scroll to Top (Appears on Scroll) */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0.5,
                    y: isVisible ? 0 : 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all shadow-2xl"
            >
                <ArrowUp size={20} />
            </motion.button>

            {/* Action Bar Container */}
            <div className="flex flex-col items-center">

                {/* Desktop Menu (Always Visible on md+) */}
                <div className="hidden md:flex flex-col items-center p-2 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl">
                    {actions.map((action) => (
                        <motion.a
                            key={action.title}
                            href={action.href}
                            target={action.title === "WhatsApp" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 text-white/40 hover:text-white transition-all group relative flex items-center justify-center"
                        >
                            <action.icon size={20} className={`transition-colors ${action.color}`} />
                            <div className="absolute right-full mr-6 px-3 py-1.5 bg-zinc-900/90 text-white text-[10px] uppercase font-bold tracking-[0.2em] rounded-lg border border-white/5 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap -translate-x-2 group-hover:translate-x-0">
                                {action.title}
                            </div>
                        </motion.a>
                    ))}
                    <div className="w-8 h-px bg-white/10 my-2"></div>
                    <motion.button
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="p-4 text-white/20 hover:text-white transition-colors"
                        onClick={() => navigator.share && navigator.share({ title: 'Sudharsan', url: window.location.href })}
                    >
                        <Share2 size={20} />
                    </motion.button>
                </div>

                {/* Mobile Menu (Toggleable) */}
                <motion.div
                    initial={false}
                    animate={isOpen ? { opacity: 1, y: 0, scale: 1, display: "flex" } : { opacity: 0, y: 20, scale: 0.8, transitionEnd: { display: "none" } }}
                    className="md:hidden flex flex-col items-center p-2 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl mb-4"
                >
                    {actions.map((action) => (
                        <a
                            key={action.title}
                            href={action.href}
                            target={action.title === "WhatsApp" ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="p-4 text-white hover:text-white transition-all flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <action.icon size={22} className={action.color.replace('group-hover:', '')} />
                        </a>
                    ))}
                    <div className="w-8 h-px bg-white/10 my-2"></div>
                    <button
                        className="p-4 text-white/60 hover:text-white"
                        onClick={() => {
                            setIsOpen(false);
                            if (navigator.share) navigator.share({ title: 'Sudharsan', url: window.location.href });
                        }}
                    >
                        <Share2 size={20} />
                    </button>
                </motion.div>

                {/* Mobile Trigger Button */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(59,130,246,0.5)] border border-white/20 z-[10001]"
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        className="flex items-center justify-center"
                    >
                        <MessageCircle size={26} />
                    </motion.div>
                </motion.button>
            </div>
        </div>
    );
};

export default FloatingContactBar;
