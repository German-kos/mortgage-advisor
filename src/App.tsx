import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
// import { Testimonials } from "./components/Testimonials";
import { WhatsappButton } from "./components/WhatsappButton";
import { About } from "./features/about";
import { Footer } from "./features/footer";
import { FormSection } from "./features/form";
import { FormStatusProvider } from "./features/form/context/form-status-context";
import { Navbar } from "./features/navbar";

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
