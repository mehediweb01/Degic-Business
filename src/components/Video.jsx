import ReactPlayer from "react-player";

const Video = () => {
  return (
    <>
      <section className="mt-24">
        <h1 className="md:text-[55px] text-4xl md:leading-[60px] leading-10 font-semibold text-black text-center">
          Use illustrations in UI design
        </h1>
        <div className="flex justify-center items-center mt-8 md:mx-16 mx-8 my-24 rounded-lg md:h-[555px] sm:h-[255px] h-[200px]">
          <ReactPlayer
            url="https://www.youtube.com/embed/mRFZ_uX9LQ4?si=oCe2-_iZ9win9fri"
            light="/video.png"
            width="100%"
            height="100%"
            controls
            playing
            playIcon =" "
          />
        </div>
      </section>
    </>
  );
};

export default Video;
