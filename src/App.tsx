import { About } from "./components/About";
import { Features } from "./components/Features";
import { FormSection } from "./components/FormSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="relative bg-hero-pattern">
        <Navbar />
        <Hero />
      </div>
      <Features />
      <FormSection />
      <About />
    </>
  );
}

export default App;
