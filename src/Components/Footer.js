import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-second w-full mt-4 py-4 relatve bottom-0 left-0 right-0">
        <div className="flex flex-row justify-between mx-8">
          <div className="text-black">
            <h4>Quick Links</h4>
            <div className="footer-links flex flex-col">
              <Link className="py-2 mb-1">Headphones</Link>
              <Link className=" py-2 mb-1">Laptops</Link>
              <Link className=" py-2 mb-1">Tablets</Link>
              <Link className=" py-2 mb-1">Watches</Link>
            </div>
          </div>
          <div>
            <h4 className="text-black">Information</h4>
            <div className="footer-links flex flex-col">
              <Link to="/blog" className="py-2 mb-1">
                Blogs
              </Link>
              <Link to="/privacy-policy" className=" py-2 mb-1">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className=" py-2 mb-1">
                Refund Policy
              </Link>
              <Link to="/delivery-policy" className=" py-2 mb-1">
                Delivery Policy
              </Link>
              <Link to="/terms-and-conditions" className=" py-2 mb-1">
                Terms and Conditions
              </Link>
            </div>
          </div>
          <div className="text-black">
            <h4>Account</h4>
            <div className="footer-links flex flex-col">
              <Link className=" py-2 mb-1">About Us</Link>
              <Link className=" py-2 mb-1">FAQ</Link>
              <Link className=" py-2 mb-1">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-black">
            <h4>Contact Us</h4>
            <div className="flex flex-col">
              <div>
                T-62, Bandhan Palace, <br />
                Jampur, Noida,
                <br />
                PinCode: 110162
              </div>
              <div>+91-8081828384</div>
              <div>jirachi@hotmail.com</div>
              <div className="text-2xl ml-0 flex items-center justify-evenly mt-2">
                <span className="text-yellow-600">
                  <BsFacebook />
                </span>                
                <span className="text-yellow-600">
                  <BsYoutube />
                </span>
                <span className="text-yellow-600">
                  <BsInstagram />
                </span>
                <span className="text-yellow-600">
                  <BsLinkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-third py-3 px-5">
          <div>
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()} |{"        "}Binance
            </p>
          </div>
        </footer>
      </footer>
    </>
  );
};

export default Footer;
