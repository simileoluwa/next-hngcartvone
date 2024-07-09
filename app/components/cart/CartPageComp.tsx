import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartPageComp = () => {
  return (
    <div>
      <main className="my-6 bg-white">
        <div className="flex lg:gap-6">
          {/* <!-- Left div with text and counter --> */}
          <div className="bg-white p-4 flex flex-row justify-between w-full">
            <div>
              <h2 className="text-xl text-gray-700 font-semibold">Rosy Gown</h2>
              <p className="text-gray-600">
                A ball dress with sparkling lace placement on short tulle skirt
              </p>
              <p>Size: XL - M</p>
              <p> 180,000</p>
            </div>
            <div className="flex-col items-center space-x-2 justify-end  space-y-12">
              <div className="flex items-center space-x-2">
                <button className="bg-myLightPink hover:bg-myLightPink text-white px-2 py-1 rounded">
                  -
                </button>
                <span id="counter" className="text-gray-700">
                  1
                </span>
                <button className="bg-myLightPink hover:bg-myLightPink text-white px-2 py-1 rounded">
                  +
                </button>
              </div>
              <div className="flex justify-end">
                <button className=" text-white px-2 py-1 rounded">
                  <RiDeleteBin6Line color="#9137CE" size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Right div with an image --> */}
          <div className="flex-none bg-white">
            <Image
              width={100}
              height={100}
              src="/images/products/product2.png"
              alt="Product Image"
              className=" w-fit h-auto rounded-r-lg lg:w-48"
            />
            {/* <!-- Adjust the image width (w-48) as needed --> */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default CartPageComp;
