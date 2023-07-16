import "./App.css";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <section className="h-screen dark:text-white dark:bg-black">
        <Nav />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
