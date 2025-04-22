import { WhatsappButton } from "./components/whatsapp-button";
import { About } from "./features/about";
import { Footer } from "./features/footer";
import { FormSection } from "./features/form";
import { FormStatusProvider } from "./features/form/context/form-status-context";
import { Hero } from "./features/hero";
import { Highlights } from "./features/highlights";
import { Navbar } from "./features/navbar";
import { Testimonials } from "./features/testimonials";

function App() {
  return (
    <>
      <FormStatusProvider>
        <div className="relative bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <Highlights />
        <FormSection />
        <About />
        <Testimonials />
        <Footer />
        <WhatsappButton />
      </FormStatusProvider>
    </>
  );
}

export default App;
