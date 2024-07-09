import Image from "next/image";
import ProductsEach from "../products/ProductsEach";

const RecentlyViewed = () => {
  return (
    <div>
      <div className="text-[1.2=4rem] lg:text-[1.5rem] text-myBlack pb-4">
        Recently Viewed
      </div>
      <div className="grid grid-cols-2 justify-between gap-4 basis-4 lg:grid-cols-3">
        <ProductsEach />
        <ProductsEach />
        <ProductsEach />
      </div>
    </div>
  );
};
export default RecentlyViewed;
