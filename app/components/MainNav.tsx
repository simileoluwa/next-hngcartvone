import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
const MainNav = () => {
  return (
    <div className="">
      <div className="container lg:w-[80%] mx-auto">
        <header className="flex justify-between px-6 py-6 items-center">
          <div className="">
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-16"
              />
            </a>
          </div>
          <div className="relative w-full max-w-md hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none placeholder-myLightPink"
            />
            <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-myLightPink" />
            <LuListFilter className="absolute right-3 top-2/4 transform -translate-y-1/2  text-myLightPink" />
          </div>
          <div>
            <ul className="hidden justify-between items-center gap-6 lg:flex text-myPink">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Contact Us
                </a>
              </li>
              <li className="">
                <a className="hover:text-gray-500 " href="#">
                  Cart
                  <sup className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold border border-myPink rounded-full">
                    3
                  </sup>
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <HiOutlineMenu className="text-3xl cursor-pointer " />
          </div>
        </header>
      </div>
    </div>
  );
};
export default MainNav;
