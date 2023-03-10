import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-[#172A3A] min-w-full flex flex-row justify-center uppercase items-center h-24 max-w-[1240px] mx-auto px-4">
          <Link to="/">
            <p className="p-4 text-sm md:text-lg text-white hover:text-[#FFA737]">
              Home
            </p>
          </Link>
          <Link to="/about">
            <p className="p-4 text-sm md:text-lg  whitespace-nowrap text-white hover:text-[#FFA737]">
              About Us
            </p>
          </Link>
          <Link to="/services">
            {" "}
            <p className="p-4 text-sm md:text-lg text-white hover:text-[#FFA737]">
              Services
            </p>
          </Link>
          <Link to="/contact">
            {" "}
            <p className="p-4 text-sm md:text-lg whitespace-nowrap text-white hover:text-[#FFA737]">
              Contact Us
            </p>
          </Link>
        </div>
        <div className="bg-[#172A3A] text-white  uppercase flex justify-center pb-4">
          {" "}
          <p className="md:text-sm text-xs ">Copyright Hays Construction</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
