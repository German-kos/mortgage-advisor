import { About } from "./components/About";
import { Features } from "./components/Features";
import { FormSection } from "./components/FormSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
// import { Testimonials } from "./components/Testimonials";
import { WhatsappButton } from "./components/WhatsappButton";
import { Footer } from "./features/footer";
import { FormStatusProvider } from "./features/form/context/form-status-context";

function App() {
  return (
    <>
      <FormStatusProvider>
        <div className="relative bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <Features />
        <FormSection />
        <About />
        {/* <Testimonials /> */}
        <Footer />
        <WhatsappButton />
      </FormStatusProvider>
    </>
  );
}

export default App;
