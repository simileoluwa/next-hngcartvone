import Image from "next/image";

import {
  MdStarRate,
  MdStarOutline,
  MdOutlineShoppingCart,
  MdOutlineFavorite,
} from "react-icons/md";

const ProductsEach = () => {
  return (
    <div>
      <section className="">
        <div className="rounded-lg border mb-[3rem]">
          <div role="group" className="group relative space-y-6">
            <div className="overflow-hidden rounded-t-lg">
              <Image
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src="/images/products/product2.png"
                alt="logo"
                width={100}
                height={100}
              />
              <span className="absolute right-4 top-4 bg-white px-2 py-2 rounded-full">
                <MdOutlineFavorite className="text-[#DD2E44] w-4 h-4" />
              </span>
            </div>
          </div>

          <div className="px-4 py-4 bg-[#F9F3FD]">
            <div className="flex justify-between ">
              <div>
                <h1 className="font-bold text-[1.1rem] text-[#635B69]">
                  Rosy Grown
                </h1>
              </div>
              <div className="text-[0.6rem] bg-[#E1C3F6] rounded-md text-myPink px-2 py-2">
                -12%
              </div>
            </div>
            <div className="font-bold text-[.8rem] text-[#5B595F]">
              N180,000
            </div>
            <p className="my-3 text-sm">
              A ball dress with sparking lace placement on short tulle skirt{" "}
            </p>
            <div>
              <div className="hidden text-[#FFAC33] my-3 ">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarOutline />
              </div>
              <button className="prodBtn rounded-lg w-full flex justify-center items-center gap-3">
                <span className="w-4 h-4">
                  <MdOutlineShoppingCart />
                </span>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductsEach;
