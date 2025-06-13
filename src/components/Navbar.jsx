import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Assuming you're using react-scroll
import logo from "../assets/logo.png";

import { FaXmark,FaBars} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Proper cleanup
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "Testimonial", path: "testimonial" },
    { link: "FAQ", path: "faq" },
  ];

  return (
    <header className ='w-full bg-white md:bg-transport fixed top-0 left-0 right-0' >
      <nav className={'py-4 lg:px-14 px-4 $(isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300": ""}'}>
        <div className="flex justify-between items-center text-base gap-8">
        <a href="#" className="text-2xl font-semibold flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 inline-block" />
          <span className="text-[#263238]">NEXCENT</span>
        </a>

        {/* Nav items for large devices */}
        <ul className="md:flex space-x-12 hidden">
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        {/* btn for large device */}
        <div className="space-x-12 hidden lg:flex items-center ">
            <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900">Login</a>
            <button className="bg-brandPrimary hover:bg-gray900 text-white py-2 px-4 rounded transition-all duration-300 hover:bg-neutralDGrey">Sign up</button>
        </div> 

        {/* menu button for mobile device           */}
        <div className="md:hidden">
            <button
            onClick={toggleMenu}
             className=" text-neutralDGrey focus:outline-none focus:text-gray-500">
                {
                    isMenuOpen ? (<FaXmark className="h-6 w-6 "/>) : (<FaBars className="h-6 w-6 " />)
                }
            </button>

 
        </div>
        </div>






        {/* Add toggleMenu button for mobile here if needed */}
      </nav>
    </header>
  );
};

export default Navbar;
