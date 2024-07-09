import Image from "next/image";
import ProductsEach from "./ProductsEach";
import LoadMore from "../LoadMore";

const ProductsComp = () => {
  return (
    <main className="my-6 px-6 py-6 container lg:w-[80%] mx-auto">
      <div className="hidden text-myGray  text-[1.25rem] justify-between mb-4 lg:flex ">
        <div className="">
          All / Fashion / Men / <span>Women</span> /
        </div>
        <div>1 -18 of 200 results</div>
      </div>
      <div className="mb-4 text-[1.2rem] text-myBlack">Wedding Wears</div>

      <div className="flex justify-between font-bold lg:hidden">
        <div className="text-gray-600">Products</div>
        <div>Filter</div>
      </div>
      <div className="flex justify-between text-myGray my-4 lg:w-2/4  lg:mx-auto lg:gap-16 lg:my-6 lg:justify-center">
        <div>
          <a href="">Men</a>
        </div>
        <div className=" text-myBlack border-b-2 border-y-myPink">
          <a href="">Women</a>
        </div>
        <div>
          <a href="">Wedding Wears</a>
        </div>
      </div>

      {/* Each Product */}
      <div className="grid grid-cols-2 justify-between gap-4 basis-4 lg:grid-cols-3">
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
      </div>
      <LoadMore />
    </main>
  );
};
export default ProductsComp;
