
const Bomb = () => {
  return (
    <section className="bg-[#5F62E2] w-full">
      <div className="flex justify-around flex-col md:flex-row items-center gap-5 mt-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="md:text-[55px] text-4xl md:leading-[60px] text-white max-w-md">
            The quickest way to create awesome presentation
          </h1>
          <div className="flex gap-3 flex-wrap mb-10">
            <button className="bg-green-500 font-semibold py-3 px-6 rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black  mx-auto sm:mx-0">
              Learn More
            </button>

            <button className="bg-indigo-400 font-semibold py-3 px-6 rounded-lg transition duration-300 text-white flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black  mx-auto sm:mx-0">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex">
          <img className="w-full h-auto" src="/bomb.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Bomb
