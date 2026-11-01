import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import Header from "./components/ui/Header";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// ✅ Import Projects page
import Projects from "./pages/Projects";

function App() {
  return (
    <Flex direction="column" minH="100vh" width="100vw">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> {/* New route */}
      </Routes>
    </Flex>
  );
}

export default App;
