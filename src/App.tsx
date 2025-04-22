import { WhatsappButton } from "./components/whatsapp-button";
import {
  Navbar,
  Hero,
  Highlights,
  FormSection,
  About,
  // Testimonials, //uncomment when testimonials are ready
  Footer,
} from "./features";
import { FormStatusProvider } from "./features/form/context";

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
        {/* <Testimonials /> */} {/*uncomment when testimonials are ready */}
        <Footer />
        <WhatsappButton />
      </FormStatusProvider>
    </>
  );
}

export default App;
