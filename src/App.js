import About from "./components/About";
import Contact from "./components/Contact";
import Myskills from "./components/Myskills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Myskills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;

