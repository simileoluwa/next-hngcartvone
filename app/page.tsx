// import Image from "next/image";
import HeroSlide from "./components/HeroSlide";
import ProductsComp from "./components/products/ProductsComp";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <HeroSlide />
      <ProductsComp />
    </div>
  );
}
