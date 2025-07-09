import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // react-scroll වලින් Link import කරලා
import logo from "../assets/logo.png"; // logo image එක import කරලා
import { FaXmark, FaBars } from "react-icons/fa6"; // menu icons import කරලා

const Navbar = () => {
  // menu එක විවෘතද/වහිනවාද කියලා හදන්න state එකක්
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // sticky navbar එකක්ද කියලා පාලනය කරන්න state එකක්
  const [isSticky, setIsSticky] = useState(false);

  // menu එක විවෘත/වහිනවා toggle කරන්න function එක
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // page එක scroll වුනාම navbar එක sticky කරන්න useEffect එකක්
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // 100px ට වඩා scroll වුනොත් sticky කරන්න
    };
    window.addEventListener("scroll", handleScroll); // scroll එකට listener එකක් දාන්න
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  // navbar එකේ තියෙන menu items (array එකක් විදියට)
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    // navbar එකේ header එක (fixed top එකට)
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50">
      {/* sticky class එක dynamic ලෙස දාන්න */}
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo එක සහ brand name එක */}
          <a href="#" className="text-2xl font-semibold flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 inline-block" />
            <span className="text-[#263238]">NEXCENT</span>
          </a>
          {/* විශාල screen වලට menu items */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* විශාල screen වලට login සහ signup buttons */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">Login</a>
            <button className="bg-brandPrimary hover:bg-gray-900 text-white py-2 px-4 rounded transition-all duration-300 hover:bg-neutralDGrey">Sign up</button>
          </div>
          {/* කුඩා screen වල menu button එක */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {/* menu open/close icon */}
              {isMenuOpen ? (<FaXmark className="h-6 w-6" />) : (<FaBars className="h-6 w-6" />)}
            </button>
          </div>
        </div>
        {/* කුඩා screen වල menu එක (hamburger menu) */}
        {isMenuOpen && (
          <ul className="md:hidden space-y-4 px-4 mt-16 py-7 bg-brandPrimary absolute left-0 right-0 top-0 z-50">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block text-base text-white hover:text-gray-900 first:font-medium"
                  onClick={() => setIsMenuOpen(false)} // link එක click කලොත් menu එක වහන්න
                >
                  {link}
                </Link>
              </li>
            ))}
            <li>
              <a href="/" className="block text-white hover:text-gray-900 py-2">Login</a>
            </li>
            <li>
              <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-neutralDGrey">Sign up</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
