/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Slider = () => {
    const slides = [
      {
        id: 1,
        image: "/sliderImage.png",
        heading: "Make more time for the work that matters most",
        description: "Best software platform for running an internet business.",
      },
      {
        id: 2,
        image: "/Group-17.png",
        heading: "Build more time for the work that matters most",
        description: "Best software platform for running an internet business.",
      },
      {
        id: 3,
        image: "/Component-1.png",
        heading: "Take more time for the work that matters most",
        description: "Best software platform for running an internet business.",
      },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === slides.length - 1 ? 0 : prevIndex + 1 );
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
    }
    const {image, heading, description } = slides[currentIndex];
  return (
    <>
      <section className="mt-16 bg-gray-100">
        <div className="flex flex-col md:flex-row px-12 py-24 max-w-[1400px] justify-between">
          {/* left section */}
          <div className="flex flex-col gap-6">
            <div className="mb-6">
              <img src="/logo.png" alt="" />
            </div>
            <div>
              <h2 className="text-[55px] leading-[60px] text-black font-semibold max-w-md">
                {heading}
              </h2>
              <p className="text-[21px] leading-7 text-[#00000080] max-w-md">
                {description}
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={prevSlide}
                className="bg-[#C4C4C4] rounded-full p-1"
              >
                {<KeyboardArrowLeftIcon />}{" "}
              </button>
              <button
                onClick={nextSlide}
                className="bg-[#C4C4C4] rounded-full p-1"
              >
                {<KeyboardArrowRightIcon />}
              </button>
            </div>
          </div>
          {/* right section */}
          <div>
            <img className="w-full md:w-[75%] text-center" src={image} alt="" />
          </div>
        </div>
        {/* logos */}
        <div>
          <marquee behavior="scroll" direction="left">
            <div className="flex justify-between items-center max-w-full">
              <img src="/google.png" alt="" />
              <img src="/stripe.png" alt="" />
              <img src="/jber.png" alt="" />
              <img src="/stripe2.png" alt="" />
              <img src="/Path.png" alt="" />
              <img src="/airbnb.png" alt="" />
              <img src="/nastercar.png" alt="" />
            </div>
          </marquee>
        </div>
      </section>
    </>
  );
};

export default Slider;
