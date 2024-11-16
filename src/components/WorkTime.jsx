import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const WorkTime = () => {
  return (
    <>
      <section className="max-w-[1400px] mx-auto my-36">
        <div className="flex justify-around items-center  md:flex-row flex-col">
          {/* left side */}
          <div className="flex flex-1">
            <img src="/Group-17.png" alt="" />
          </div>
          {/* right side */}
          <div className="flex flex-1 flex-col gap-5">
            <div>
              <h1 className="font-bold text-black md:text-[55px] text-4xl max-w-lg">
                Make more time for the work
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-black md:text-[21px] text-base leading-7">
                <CheckCircleOutlineIcon className="text-green-500 me-3" /> Many
                ways to use illustrations in design
              </p>
              <p className="text-black md:text-[21px] text-base leading-7">
                <CheckCircleOutlineIcon className="text-green-500 me-3" />
                Simply explained with illustrations
              </p>
              <p className="text-black md:text-[21px] text-base leading-7">
                <CheckCircleOutlineIcon className="text-green-500 me-3" />
                Make more time for the work
              </p>
            </div>
            <div className="flex md:justify-start justify-center">
              <button className="bg-[#5F62E226] text-[#5F62E2] rounded-[10px] font-[500] text-base leading-7 px-4 py-2 hover:bg-indigo-500 hover:text-white transition-all duration-150 flex items-center justify-center">
                Learn More <span className="ms-3">{<ArrowForwardIcon />}</span>
              </button>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex justify-around items-center md:flex-row flex-col-reverse mt-24">
          {/* left side */}
          <div className="flex flex-col gap-5 ms-3 sm:ms-3">
            <div>
              <h1 className="font-bold text-black md:text-[55px] text-4xl max-w-lg">
                Make more time for the work
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-black md:text-[21px] text-base leading-7">
                <CheckCircleOutlineIcon className="text-green-500 me-3" /> Many
                ways to use illustrations in design
              </p>
              <p className="text-black md:text-[21px] text-base leading-7">
                <CheckCircleOutlineIcon className="text-green-500 me-3" />
                Simply explained with illustrations
              </p>
              <p className="text-black md:text-[21px] text-base leading-7">
                <CheckCircleOutlineIcon className="text-green-500 me-3" />
                Make more time for the work
              </p>
            </div>
            <div className="flex md:justify-start justify-center">
              <button className="bg-[#5F62E226] text-[#5F62E2] rounded-[10px] font-[500] text-base leading-7 px-4 py-2 hover:bg-indigo-500 hover:text-white transition-all duration-150 flex items-center justify-center">
                Learn More <span className="ms-3">{<ArrowForwardIcon />}</span>
              </button>
            </div>
          </div>
          {/* right side */}
          <div>
            <img src="/Group-18.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTime;
