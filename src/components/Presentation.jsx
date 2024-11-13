
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Presentation = () => {
  const CartData = [
    {
      src: "/Group-1.png",
      heading: "Managment",
      text: "Software platform for running your new internet business",
    },
    {
      src: "/Group-2.png",
      heading: "Entertainment",
      text: "Software platform for running your new internet business",
    },
    {
      src: "/Group-3.png",
      heading: "Marketing",
      text: "Software platform for running your new internet business",
    },
    {
      src: "/Group-4.png",
      heading: "References",
      text: "Software platform for running your new internet business",
    },
  ];
  const SocialIcon = [
    {
      link: "/fb.png",
      alt: "facebook",
    },
    {
      link: "/twiterr.png",
      alt: "twitter",
    },
    {
      link: "/instra.png",
      alt: "instagram",
    }
  ]
  return (
    <>
      <section className="container flex md:flex-row flex-col justify-around items-center gap-24 max-w-[1400px] mx-auto mt-32 lg:px-16 md:px-12 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CartData.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white hover:bg-gray-100 transition-all duration-200 rounded-lg text-center"
            >
              <div className="flex justify-center items-center">
                <img src={item.src} alt={item.heading} />
              </div>
              <div className="mt-6">
                <h2 className="text-[24px] leading-7 font-[500] text-black">
                  {item.heading}
                </h2>
                <p className="text-[#00000080]/50 text-[17px] text-center leading-6">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-full">
          <div>
            <div className="flex flex-col justify-center md:items-start items-center md:mx-0 mx-6">
              <h1 className="md:text-[55px] text-4xl font-[500] text-black md:leading-[60px] leading-10 md:text-start text-center">
                The quickest way to create modern presentation
              </h1>
              <p className="my-3 md:text-[21px] text-base leading-4 md:leading-7 text-[#00000080]/50 md:text-start text-center">
                Best software platform for running an internet business. We
                build the most powerful and flexible tools for internet
                commerce.
              </p>
              <button className="bg-[#5F62E226] text-[#5F62E2] rounded-[10px] font-[500] text-base leading-7 px-4 py-2 hover:bg-[#5F62E226]/50 hover:text-white transition-all duration-150 flex items-center justify-center">
                Explore All <span className="ms-3">{<ArrowForwardIcon />}</span>
              </button>
            </div>
            <div className="mt-16">
              <p className="text-base leading-7 text-[#00000080] md:text-start text-center mb-4">Follow us</p>
              <div className="flex md:justify-start justify-center items-center gap-3">
                {SocialIcon.map((socialIcon, index) => (
                  <div key={index}>
                    <div>
                      <img src={socialIcon.link} alt={socialIcon.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Presentation
