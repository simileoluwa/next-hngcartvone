const Subscribe = () => {
  return (
    <div className="flex flex-col items-center space-y-6 justify-center px-6 py-6">
      <h1 className="text-2xl text-myGray font-bold lg:text-3xl">
        Be the First to Know
      </h1>
      <p className="text-sm text-myGray text-center lg:text-base lg:text-balance xl:text-balance 2xl:text-balance">
        Join our email list and be the first to know about new limited edition
        product, stay updated with whats trending and lots of other fun updates
      </p>
      <div>
        <form className="flex space-x-2">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className=" flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#9EA2AA] focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-myPink text-white font-semibold rounded-r-lg hover:bg-myLightPink focus:outline-none focus:ring-2 focus:ring-myPink focus:ring-opacity-10 whitespace-nowrap lg:whitespace-normal"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Subscribe;
