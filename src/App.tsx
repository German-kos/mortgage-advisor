import { useRef } from "react";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { FormSection } from "./components/FormSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";

function App() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="relative bg-hero-pattern">
        <Navbar
          featuresRef={featuresRef}
          formRef={formRef}
          aboutRef={aboutRef}
          testimonialsRef={testimonialsRef}
        />
        <Hero />
      </div>
      <Features ref={featuresRef} />
      <FormSection ref={formRef} />
      <About ref={aboutRef} />
      <Testimonials ref={testimonialsRef} />
      <Footer />
    </>
  );
}

export default App;
