import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];
const Nav = ({ onOpenSidebar }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      <button
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden"
        onClick={() => setIsMobileMenuShown((prev) => !prev)}
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!isMobileMenuShown ? "hidden" : ""} mb-4 w-full lg:block lg:w-auto`}
      >
        <ul className="relative flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-left text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent">
          {ROUTES.map((route, index) => (
            <li
              className={`cursor-pointer rounded px-3 py-2 first:bg-blue-500 first:text-white hover:bg-gray-100 first:hover:bg-blue-600 lg:first:bg-transparent lg:first:text-blue-500 lg:hover:bg-transparent lg:hover:text-blue-500 ${index >= 3 && "lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={onOpenSidebar}
        className="btn-press-anim fixed bottom-4 left-4 z-10 lg:static lg:mr-8"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
