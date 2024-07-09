import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPageComp = () => {
  return (
    <div>
      <main className="">
        <div className="bg-white px-4 py-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <h2>Rosy Gown</h2>
              <p className="text-myGray text-sm">
                A ball dress with sparking lace placement on short tulle skirt{" "}
              </p>
              <p>Size: XL - M</p>
              <p> 180,000</p>
              <p>Total: N180,000</p>
            </div>
            <div className="flex-col justify-between basis-1 bg-slate-500">
              <div className="flex gap-2">
                <button className=" bg-myLightPink w-8 h-8 rounded-sm ">
                  -
                </button>
                <div className="px-2 text-center text-myGray">1</div>
                <button className=" bg-myLightPink  w-8 h-8  rounded-sm ">
                  +
                </button>
              </div>
              <div>
                <RiDeleteBin6Line />
              </div>
            </div>
            <div>
              <Image
                src="/images/products/product2.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CartPageComp;
