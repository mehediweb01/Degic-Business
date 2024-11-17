import Blog from "./components/Blog";
import Bomb from "./components/Bomb";
import Footer from "./components/Footer";
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
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
