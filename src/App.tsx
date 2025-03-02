import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";
import { FormSection } from "./components/FormSection";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Reasons } from "./components/Reasons";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FormSection />
      <Cards />
      <Reasons />
      <Footer />
    </>
  );
}

export default App;
