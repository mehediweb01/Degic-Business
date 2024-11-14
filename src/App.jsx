import Bomb from "./components/Bomb";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Slider from "./components/Slider";
import Video from "./components/Video";
import WorkTime from "./components/WorkTime";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Presentation />
        <Slider />
        <Video />
        <WorkTime />
        <Bomb />
      </div>
    </>
  );
}

export default App;
