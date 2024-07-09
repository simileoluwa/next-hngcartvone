import CartPageComp from "../components/cart/CartPageComp";
import Image from "next/image";
const page = () => {
  return (
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
  );
};
export default page;
