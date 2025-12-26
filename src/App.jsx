import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import ValueProp from "./components/ValueProp";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lifestyle from "./components/Lifestyle";
import Testimonials from "./components/Testimonials";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";

function App() {
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
}

export default App;
