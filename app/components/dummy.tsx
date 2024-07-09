// import logo from "@/public/images/hero-image.png";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuListFilter } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";

const MainHeader: React.FC = () => {
  return (
    <header className=" ">
      <div className="w-full max-w-7xl mx-auto">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
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
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none placeholder-myLightPink"
            />
            <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-myLightPink" />
            <LuListFilter className="absolute right-3 top-2/4 transform -translate-y-1/2  text-myLightPink" />
          </div>
          <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8 text-black">
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
              <li>
                <a className="hover:text-gray-500" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <HiOutlineMenu className="text-3xl cursor-pointer md:hidden" />
          </div>
        </nav>
      </div>
      <section className="bg-hero-image bg-cover w-full bg-no-repeat">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col bg-black bg-opacity-20">
            <h1 className="text-black text-4xl font-bold">
              Discount up to 60%
            </h1>
            <p>
              Explore and pick your dream outfit from our Collection and be
              happy with it
            </p>
            <button className="text-white bg-myPink px-4 py-2">Shop Now</button>
          </div>
        </div>
      </section>
    </header>
    // <header className="bg-teal-700">
    //   <nav className="">
    //     <section className="container relative h-14 flex justify-between items-center">
    //       <div>
    //         <a href="#">
    //           <Image src="/images/logo.png" alt="logo" width={45} height={24} />
    //         </a>
    //       </div>
    //       <div>
    //         <a href="">
    //           <MdOutlineShoppingCart size={48} className="text-myPink" />
    //         </a>
    //       </div>
    //     </section>
    //     <section className="container relative h-14 flex justify-between items-center">
    //       <div className="absolute top-0 left-0 w-full py-14 bg-red-500 border-b border-secondary">
    //         <ul className="flex flex-col text-center gap-4">
    //           <li>
    //             <a href="#">Products</a>
    //           </li>
    //           <li>
    //             <a href="#">Contact Us</a>
    //           </li>
    //           <li>
    //             <a href="#">Cart</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
            // <div className="relative w-full max-w-md">
            //   <input
            //     type="text"
            //     placeholder="Search"
            //     className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none placeholder-myLightPink"
            //   />
            //   <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-myLightPink" />
            //   <LuListFilter className="absolute right-3 top-2/4 transform -translate-y-1/2  text-myLightPink" />
            // </div>
    //       </div>
    //     </section>
    //   </nav>
    // </header>
  );
};
export default MainHeader;
