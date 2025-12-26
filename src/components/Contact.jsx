import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 mt-20 relative">

            <div className="max-w-4xl mx-auto text-left md:text-center">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
                    I'm currently looking to join a cross-functional team that values working people's lives through accessible design. or have a project in mind? Let's connect.
                </p>
                <p className="text-lg text-white font-medium mb-12">
                    sudharsan@working-mail.com
                </p>

                <div className="flex gap-6 md:justify-center mb-20">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                </div>
            </div>

        </section>
    );
};

export default Contact;
