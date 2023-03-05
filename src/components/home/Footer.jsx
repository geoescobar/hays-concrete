import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-[#969696] min-w-full flex justify-center uppercase items-center h-24 max-w-[1240px] mx-auto px-4">
          <ul className="hidden md:flex">
            <Link to="/">
              <li className="p-4 text-white">Home</li>
            </Link>
            <Link to="/about">
              <li className="p-4 whitespace-nowrap text-white">About Us</li>
            </Link>
            <Link to="/services">
              {" "}
              <li className="p-4 text-white">Services</li>
            </Link>
            <Link to="/contact">
              {" "}
              <li className="p-4 whitespace-nowrap text-white">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="bg-[#969696] text-white  uppercase flex justify-center pb-4">
          <p>Copyright Hays Construction</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
