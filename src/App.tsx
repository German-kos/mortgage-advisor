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
import { AccessibilityControl } from "./features/accessibility/accessibility";
import { AccessibilityProvider } from "./features/accessibility/context/accessibility-context";
import { GlobalAccessibilityEffect } from "./features/accessibility/global-accessibility-effect";
import { FormStatusProvider } from "./features/form/context";

function App() {
  return (
    <>
      <AccessibilityProvider>
        <GlobalAccessibilityEffect />
        <AccessibilityControl />
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
      </AccessibilityProvider>
    </>
  );
}

export default App;
