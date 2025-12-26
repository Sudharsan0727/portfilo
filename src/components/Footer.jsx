import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-gray-400 text-sm flex items-center gap-1">
                    © {new Date().getFullYear()} Sudharsan. Made with <Heart size={14} className="text-red-500 fill-red-500" />.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
