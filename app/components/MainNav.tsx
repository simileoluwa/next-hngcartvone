import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
const MainNav = () => {
  return (
    <div className="">
      <div className="container lg:w-[80%] mx-auto">
        <header className="flex justify-between px-6 py-6 items-center">
          <div className="">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-16"
              />
            </Link>
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
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us </Link>
              </li>
              <li>
                <Link href="/cart">Cart </Link>
                <sup className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold border border-myPink rounded-full">
                  3
                </sup>
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
