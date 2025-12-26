import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
        alert("Message sent successfully!");
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Info */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-purple-500 font-sans text-sm tracking-widest uppercase"
                        >
                            Get in Touch
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
                        >
                            Let's build something <span className="text-gray-500">extraordinary.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg mb-12 leading-relaxed"
                        >
                            I'm currently available for freelance projects and full-time roles. If you have any questions or just want to say hi, feel free to drop me a message!
                        </motion.p>

                        <div className="flex flex-col gap-8 mb-12">
                            <ContactItem icon={Mail} title="Email" value="sudharsan@portfolio.com" href="mailto:sudharsan@portfolio.com" delay={0.3} />
                            <ContactItem icon={Phone} title="Phone" value="+91 63744 63248" href="tel:+916374463248" delay={0.4} />
                            <ContactItem icon={MapPin} title="Location" value="Chennai, India" delay={0.5} />
                        </div>

                        <div className="flex gap-4">
                            <SocialBtn icon={Github} href="https://github.com/Sudharsan0727" delay={0.6} />
                            <SocialBtn icon={Linkedin} href="#" delay={0.7} />
                            <SocialBtn icon={Twitter} href="#" delay={0.8} />
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput
                                    label="Name"
                                    name="name"
                                    placeholder="Sudharsan"
                                    value={formState.name}
                                    onChange={handleChange}
                                />
                                <FormInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="sudharsan@example.com"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Subject</label>
                                <select
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all appearance-none"
                                >
                                    <option value="" disabled>Select a subject</option>
                                    <option value="project" className="bg-[#111]">I have a project</option>
                                    <option value="job" className="bg-[#111]">Job Opportunity</option>
                                    <option value="collab" className="bg-[#111]">Collaboration</option>
                                    <option value="other" className="bg-[#111]">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-500 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon: Icon, title, value, href, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="flex items-center gap-4 group"
    >
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            {href ? (
                <a href={href} className="text-white text-lg font-semibold hover:text-purple-400 transition-colors">{value}</a>
            ) : (
                <p className="text-white text-lg font-semibold">{value}</p>
            )}
        </div>
    </motion.div>
);

const SocialBtn = ({ icon: Icon, href, delay }) => (
    <motion.a
        href={href}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring" }}
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all"
    >
        <Icon size={20} />
    </motion.a>
);

const FormInput = ({ label, type = "text", placeholder, name, value, onChange }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-400">{label}</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
            className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
        />
    </div>
);

export default Contact;
