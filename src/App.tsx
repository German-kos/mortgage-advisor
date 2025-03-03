import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="relative bg-hero-pattern">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
