import CartPageComp from "../components/cart/CartPageComp";
import Image from "next/image";
import RecentlyViewed from "../components/cart/RecentlyViewed";
import HotList from "../components/cart/HotList";
const page = () => {
  return (
    <div>
      <div className="bg-[#F5ECFC]">
        <main className="my-6 px-6 py-6 container lg:w-[80%] mx-auto">
          <aside className="flex-col justify-center items-center flex space-y-6">
            <div>
              <Image src="/images/cartNum.png" width={50} height={50} alt="" />
            </div>
            <div>
              <div className="w-80 h-2 bg-[#E1C3F6] rounded-full">&nbsp;</div>
            </div>
          </aside>
          <CartPageComp />
          <CartPageComp />
          <CartPageComp />
          <aside>
            <div className="flex items-center justify-center gap-4">
              <button className="text-myPink border border-myPink px-4 py-2 rounded-md">
                Continue Shopping
              </button>
              <button className="bg-myPink text-white px-4 py-2 rounded-md">
                Checkout
              </button>
            </div>
          </aside>
        </main>
      </div>
      <section className="border-b-2 border-gray-300">
        <div className="my-6 px-6 py-6 container lg:w-[80%] mx-auto">
          <RecentlyViewed />
        </div>
      </section>
      <section className="border-b-2 border-gray-300">
        <div className="my-6 px-6 py-6 container lg:w-[80%] mx-auto">
          <HotList />
        </div>
      </section>
    </div>
  );
};
export default page;
