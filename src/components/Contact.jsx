import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Phone, Search, ChevronDown, CheckCircle } from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { countryCodes } from "../utils/countryCodes";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        country_code: "+91",
        phone: "",
        subject: "",
        message: ""
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef(null);
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = countryCodes.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.includes(searchQuery)
    );

    const selectedCountry = countryCodes.find(c => c.code === formState.country_code) || countryCodes[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = "service_nfdh2oh";
        const TEMPLATE_ID = "template_1lamrla";
        const PUBLIC_KEY = "LmzSXPaLczyjoorf9";

        // Create the template parameters object
        const templateParams = {
            name: formState.name,
            email: formState.email,
            country: selectedCountry.name,
            country_code: formState.country_code,
            phone: formState.phone,
            subject: formState.subject,
            message: formState.message,
            year: new Date().getFullYear()
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSubmitting(false);
                setIsSent(true);
                setFormState({ name: "", email: "", country_code: "+91", phone: "", subject: "", message: "" });

                // Hide success message after 5 seconds
                setTimeout(() => setIsSent(false), 5000);
            }, (error) => {
                console.log(error.text);
                setIsSubmitting(false);
                alert("Failed to send message. Please try again.");
            });
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
                            <ContactItem icon={Mail} title="Email" value="contactsudharsank@gmail.com" href="mailto:contactsudharsank@gmail.com" delay={0.3} />
                            <ContactItem icon={Phone} title="Phone" value="+91 63744 63248" href="tel:+916374463248" delay={0.4} />
                            <ContactItem icon={MapPin} title="Location" value="Chennai, India" delay={0.5} />
                        </div>

                        <div className="flex gap-4">
                            <SocialBtn icon={FaLinkedin} href="https://www.linkedin.com/in/sudharsan-k-1ab54930b/" delay={0.6} />
                            <SocialBtn icon={FaWhatsapp} href="https://wa.me/916374463248" delay={0.7} />
                            <SocialBtn icon={FaGithub} href="https://github.com/Sudharsan0727" delay={0.8} />
                            <SocialBtn icon={FaInstagram} href="https://www.instagram.com/__.sudharsan.xo._/" delay={0.9} />
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 relative backdrop-blur-sm min-h-[500px] flex flex-col justify-center"
                    >
                        <AnimatePresence mode="wait">
                            {!isSent ? (
                                <motion.form
                                    key="contact-form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-6 w-full"
                                >
                                    {/* Hidden fields for EmailJS template */}
                                    <input type="hidden" name="country" value={selectedCountry.name} />
                                    <input type="hidden" name="year" value={new Date().getFullYear()} />

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
                                            placeholder="contactsudharsank@gmail.com"
                                            value={formState.email}
                                            onChange={handleChange}
                                        />
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <label className="text-sm font-medium text-gray-400">Phone</label>
                                            <div className="flex gap-2">
                                                {/* Custom Searchable Country Selector */}
                                                <input type="hidden" name="country_code" value={formState.country_code} />
                                                <div className="relative" ref={dropdownRef}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                        className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all flex items-center gap-2 min-w-[120px] h-full"
                                                    >
                                                        <span className="text-xl">{selectedCountry.flag}</span>
                                                        <span className="font-medium">{selectedCountry.code}</span>
                                                        <ChevronDown size={16} className={`ml-auto transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isDropdownOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                animate={{ opacity: 1, y: 5, scale: 1 }}
                                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                className="absolute top-full left-0 z-50 w-[280px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden mt-1 backdrop-blur-xl"
                                                            >
                                                                <div className="p-3 border-b border-white/5">
                                                                    <div className="relative">
                                                                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Search country or code..."
                                                                            value={searchQuery}
                                                                            onChange={(e) => setSearchQuery(e.target.value)}
                                                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-all"
                                                                            autoFocus
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                                                                    {filteredCountries.length > 0 ? (
                                                                        filteredCountries.map((country) => (
                                                                            <button
                                                                                key={country.name}
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    setFormState({ ...formState, country_code: country.code });
                                                                                    setIsDropdownOpen(false);
                                                                                    setSearchQuery("");
                                                                                }}
                                                                                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left ${formState.country_code === country.code ? 'bg-purple-500/10' : ''}`}
                                                                            >
                                                                                <span className="text-xl">{country.flag}</span>
                                                                                <span className="text-white text-sm font-medium">{country.code}</span>
                                                                                <span className="text-gray-400 text-xs truncate">{country.name}</span>
                                                                            </button>
                                                                        ))
                                                                    ) : (
                                                                        <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                                                            No countries found
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>

                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="98765 43210"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all w-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <label className="text-sm font-medium text-gray-400">Subject</label>
                                            <select
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all appearance-none w-full cursor-pointer"
                                            >
                                                <option value="" disabled>Select a subject</option>
                                                <option value="project" className="bg-[#111]">I have a project</option>
                                                <option value="job" className="bg-[#111]">Job Opportunity</option>
                                                <option value="collab" className="bg-[#111]">Collaboration</option>
                                                <option value="other" className="bg-[#111]">Other</option>
                                            </select>
                                        </div>
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
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success-message"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center text-center py-20 w-full"
                                >
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                                    <p className="text-gray-400 max-w-[320px] leading-relaxed">
                                        Thank you, I've received your enquiry and will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSent(false)}
                                        className="mt-8 px-6 py-2 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
            <div className="border-t border-white/5 mt-20 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Sudharsan. All rights reserved.
                </p>
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
