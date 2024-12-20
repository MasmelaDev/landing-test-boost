import { MobileNav } from "./mobile-nav";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="p-4 md:py-8 flex flex-col transition-all">
      <ul className="flex justify-between items-center uppercase">
        <li>
          <a href="#">
            <img src="/boost.svg" alt="Boost logo" />
          </a>
        </li>
        <div className="hidden lg:flex gap-8 items-center">
          <li className="hover:text-blueBoost">
            <a href="#">pages</a>
          </li>
          <li className="hover:text-blueBoost">
            <a href="#">style</a>
          </li>
          <li className="hover:text-blueBoost">
            <a  href="#">docs</a>
          </li>
          <li className=" ">
              <a className="bg-blueBoost text-white py-4 px-6 rounded-full tracking-wider text-sm shadow-md shadow-gray-600/40 hover:bg-[#0154ca] hover:shadow-none transition-all" href="#">buy now</a>
            </li>
        </div>
        <div className="lg:hidden flex items-center justify-center">
          <button onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        </div>
      </ul>

      <MobileNav isOpen={isOpen} />
    </nav>
  );
};
