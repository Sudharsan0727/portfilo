import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const PhoneFloat = () => {
    const phoneNumber = "+916374463248";
    const phoneUrl = `tel:${phoneNumber}`;

    return (
        <motion.a
            href={phoneUrl}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.7
            }}
            className="fixed bottom-48 md:bottom-24 right-8 z-[9999] bg-purple-600 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(147,51,234,0.4)] flex items-center justify-center group pointer-events-auto cursor-pointer"
            aria-label="Call Me"
        >
            <div className="absolute right-full mr-4 bg-zinc-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
                Call Me
            </div>
            <Phone size={28} />
            <span className="absolute inset-0 rounded-full border-2 border-purple-600 animate-ping opacity-20"></span>
        </motion.a>
    );
};

export default PhoneFloat;
