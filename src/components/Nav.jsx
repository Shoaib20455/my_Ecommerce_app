import { useEffect, useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-scroll";
const Nav = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="padding-x  py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                smooth
                duration={50}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red relative transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25}
          className="cursor-pointer" />
        </div>
      </nav>
      {showBackToTop && (
        <div
          className=" back-to-top fixed bottom-8 right-8 p-2 bg-gray-800
        text-white rounded-full cursor-pointer hover:bg-gray-600 transition"
        onClick={scrollToTop}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
/>
          </svg>

        </div>
      )}
    </header>
  );
};

export default Nav;
