const Hero = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col-reverse justify-around lg:px-16 px-6 items-center gap-6 mt-16">
        <div>
          <h1 className="md:text-7xl text-4xl font-semibold md:leading-[87px] leading-[45px] md:tracking-[-4.5px] tracking-normal" >
            Simply explained with illustrations
          </h1>
          <p className="max-w-lg md:text-[21px] text-base md:leading-7 leading-4 text-[#00000080]/50 md:tracking-[-0.8px] tracking-normal md:my-6 my-3">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="text-white bg-[#5F62E2] rounded-md px-4 py-2 hover:bg-blue-800 transition-all duration-300">
              Get Started
            </button>
            <button className="bg-[#5F62E226]/15 text-[#5F62E2] rounded-md px-4 py-2 hover:bg-blue-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src="/Component-1.png" alt="" className="w-full h-auto max-w-lg" />
        </div>
      </section>
    </>
  );
};

export default Hero;
