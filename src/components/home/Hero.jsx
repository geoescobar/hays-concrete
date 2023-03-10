import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen relative">
        <img
          className="top-0 left-0 w-full h-screen object-cover z-0 md:z-0"
          src="https://admin.azbigmedia.com/wp-content/uploads/2020/02/How-to-pour-concrete.png"
          alt="hero"
        />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-screen z-0" />
        <div className="absolute top-0 w-full h-3/4 flex flex-col justify-center text-white">
          <div className=" max-w-[1100px] m-auto text-center p-4">
            <h1 className="md:text-7xl uppercase sm:text-6xl text-4xl pb-4">
              <span className="font-bold">Hays</span> Construction
            </h1>
            <p className="uppercase text-2xl pb-6">concrete contractor</p>

            <Link to="/contact">
              <button className="bg-[#FFA737] hover:bg-[#bb7a25] p-4 rounded text-black uppercase font-bold">
                Get Started{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
