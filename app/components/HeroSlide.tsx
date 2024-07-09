import Image from "next/image";

const HeroSlide = () => {
  return (
    <div className="">
      <main>
        <div className="">
          <div className="relative h-screen bg-hero-image bg-no-repeat bg-cover bg-center px-6 py-32  ">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container mx-auto lg:w-[80%] space-y-6 relative z-10 flex-col items-center justify-center h-full text-white px-4">
              <h1 className=" leading-tigh text-[1.5rem] leading-[130%] tracking-[0.02rem] transition-all duration-500 ease-in-out md:text-[3rem] md:leading-[4.3rem] md:tracking-[0.0225rem] text-4xl md:text-5xl font-bold mb-4">
                Discount up to 60%
              </h1>
              <p className="italic lg:max-w-xl lg:text-[1.75rem] ">
                Explore and pick your dream outfit from our Collection and be
                happy with it
              </p>
              <button className="text-white bg-myPink px-10 py-3 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* <footer>
        <div className="container mx-auto"></div>
      </footer> */}
    </div>
  );
};
export default HeroSlide;
