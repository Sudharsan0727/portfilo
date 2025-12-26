import { motion } from "framer-motion";
import { Layout, Smartphone, Globe, Cloud, Search, Shield } from "lucide-react";

const services = [
    {
        id: 1,
        title: "UI/UX Design",
        description: "Crafting intuitive and aesthetically pleasing interfaces that drive user engagement and satisfaction.",
        icon: Layout,
        color: "text-purple-400"
    },
    {
        id: 2,
        title: "Web Development",
        description: "Building robust, scalable, and high-performance web applications using modern technologies.",
        icon: Globe,
        color: "text-blue-400"
    },
    {
        id: 3,
        title: "Mobile Solutions",
        description: "Developing cross-platform mobile apps that provide seamless experiences on iOS and Android.",
        icon: Smartphone,
        color: "text-emerald-400"
    },
    {
        id: 4,
        title: "Cloud Infrastructure",
        description: "Designing secure and scalable cloud architectures to support your growing business needs.",
        icon: Cloud,
        color: "text-orange-400"
    },
    {
        id: 5,
        title: "SEO Optimization",
        description: "Improving your online visibility and ranking to attract more organic traffic to your site.",
        icon: Search,
        color: "text-pink-400"
    },
    {
        id: 6,
        title: "Security Audits",
        description: "Identifying vulnerabilities and implementing best practices to keep your data safe/secure.",
        icon: Shield,
        color: "text-red-400"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-500 font-semibold tracking-widest uppercase text-sm"
                    >
                        Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6"
                    >
                        What I Do
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        I combine design and technology to solve complex problems and build amazing digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:border-white/20 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                <Icon size={120} className={service.color} />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-white/30 transition-all ${service.color}`}>
                    <Icon size={28} />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
