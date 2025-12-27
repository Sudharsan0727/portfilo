import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContactBar from "./components/FloatingContactBar";

function App() {
  return (
    <>
      <ScrollToTop />
      <FloatingContactBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default App;
