import Image from "next/image";
import { FiInstagram, FiFacebook, FiMail, FiBell } from "react-icons/fi";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <div className="">
      <Subscribe />
      <footer className="bg-myPink py-10 px-10 text-white mt-20">
        <div className="my-6 container lg:w-[80%] mx-auto">
          <div className="mb-4">
            <Image src="/images/logo-white.png" width={50} height={50} alt="" />
          </div>
          <div className="flex flex-col justify-between lg:flex-row">
            <ul className="flex flex-col gap-3 mb-4 mt-4 lg:mb-0 lg:flex-row lg:mt-0">
              <li>About Us</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Order Tracking</li>
              <li>Contact</li>
              <li>&copy; friendz</li>
            </ul>
            <div className="flex gap-3">
              <FiInstagram />
              <FiFacebook />
              <FiMail />
              <FiBell />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
