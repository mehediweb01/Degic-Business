import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Blog = () => {
  const cartData = [
    {
      id: 1,
      imgSrc: "/blogImg1.png",
      title: "Make myspace your best designed space",
      description:
        "A lot of different components that will help you create the perfect look for your project",
      buttonLabel: "Design",
    },
    {
      id: 2,
      imgSrc: "/blogImg2.png",
      title: "My company culture has changed today",
      description:
        "A lot of different components that will help you create the perfect look for your project",
      buttonLabel: "3D illustrations",
    },
    {
      id: 3,
      imgSrc: "/blogImg3.png",
      title: "Professionals in craft! All products were super great",
      description:
        "A lot of different components that will help you create the perfect look for your project",
      buttonLabel: "development",
    },
  ];
  return (
    <section className="max-w-[1400px] mx-auto mt-16">
      <div className="flex md:flex-row flex-col justify-between p-16 md:items-end items-center">
        <div>
          <h2 className="font-semibold md:text-[55px] text-4xl leading-[60px] md:text-start text-center">
            Get more from our blog
          </h2>
          <p className="max-w-md text-[22px] text-gray-500 my-1 md:text-start text-center">
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
        </div>
        <button className="bg-[#5F62E226] text-[#5F62E2] rounded-[10px] font-[500] text-base leading-7 px-4 py-2 hover:bg-indigo-500 hover:text-white transition-all duration-150 flex items-center justify-center">
          Learn More <span className="ms-3">{<ArrowForwardIcon />}</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16 pt-0 ">
        {cartData.map((card) => (
          <div
            key={card.id}
            className="my-6 p-6 bg-teal-50 hover:shadow-xl transition-all duration-300"
          >
            <img src={card.imgSrc} alt="" />
            <div>
              <h3 className="max-w-md font-semibold md:text-[28px] text-2xl text-gray-800 leading-[34px] ">
                {card.title}
              </h3>
              <p className="my-5 text-[17px] leading-6 text-gray-500">
                {card.description}
              </p>
              <button className="max-w-md bg-teal-100 hover:bg-green-300 text-green-600 px-4 py-2 rounded-md ">
                {card.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
