import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Presentation />
        <Slider />
      </div>
    </>
  );
}

export default App;
