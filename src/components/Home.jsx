import Navbar from "./Navbar";
import Hero from "./Hero";
import Work from "./Work";
import Services from "./Services";
import ValueProp from "./ValueProp";
import Skills from "./Skills";
import Projects from "./Projects";
import Lifestyle from "./Lifestyle";
import Testimonials from "./Testimonials";
import Terminal from "./Terminal";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="bg-background text-white min-h-screen selection:bg-purple-500 selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Work />
                <Services />
                <ValueProp />
                <Skills />
                <Projects />
                <Lifestyle />
                <Testimonials />
                <Terminal />
                <Contact />
            </main>
        </div>
    );
};

export default Home;
