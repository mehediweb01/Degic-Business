import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  const FooterData = [
    {
      Title: "Home",
      links: ["Become Affiliate", "Go Unlimited", "Services"],
    },
    {
      Title: "Product",
      links: [
        "Design Systems",
        "Themes & Templates",
        "Mockups",
        "Presentations",
        "Wireframes Kits",
        "UI Kits",
      ],
    },
    {
      Title: "Legals",
      links: ["License", "Refund Policy", "About Us", "Contacts"],
    },
    {
      Title: "Blog",
      links: ["Business Stories", "Digital Store", "Learning", "Social Media"],
    },
  ];

  const SocialIcons = [
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Instagram />, href: "#" },
  ];

  return (
    <footer className="bg-gray-950 pb-4">
      <section className="flex lg:flex-row flex-col justify-around items-start gap-14 p-10">
        <div>
          <img src="/WhiteLogo.png" alt="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-start gap-14">
          {FooterData.map((item, index) => (
            <div key={index}>
              <h1 className="text-white font-semibold text-[20px] leading-6 mb-5">
                {item.Title}
              </h1>
              <p className="flex flex-col">
                {item.links.map((link, index) => (
                  <div key={index} className="my-1">
                    <p>
                      <a
                        href={link}
                        className="text-base leading-5 text-[#FFFFFF80] hover:p-1 hover:rounded-lg transition-all duration-300 hover:text-white"
                      >
                        {link}
                      </a>
                    </p>
                  </div>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
      <hr className="bg-[#C4C4C4] my-2 w-[80%] mx-auto " />
      <section className="flex flex-col-reverse gap-5 justify-center items-center">
        <div>
          <p className="text-[#FFFFFF80] text-[18px] leading-5">
            Copyright Degic © {new Date().getFullYear()}
          </p>
        </div>
        <div>
          {SocialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className="text-white mx-2 hover:text-blue-400 transition-all duration-150"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
