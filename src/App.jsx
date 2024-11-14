import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Slider from "./components/Slider";
import Video from "./components/Video";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Presentation />
        <Slider />
        <Video />
      </div>
    </>
  );
}

export default App;
