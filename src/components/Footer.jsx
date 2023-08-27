import React from "react";
import { Link } from "react-router-dom";
import { BsYoutube, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#E5E4E2] w-full py-4 relatve bottom-0 left-0">
        <div  className="flex  flex-row justify-between md:mx-8 mx-6 text-center md:text-base text-xs">
          <div className="text-black">
            <h4 className="py-2 mb-1 font-semibold">About Us</h4>
            <div className="flex flex-col ">
              <Link className="py-2 mb-1 ">Careers</Link>
              <Link className=" py-2 mb-1">Community</Link>
              <Link className=" py-2 mb-1">Blog</Link>
              <Link className=" py-2 mb-1">Terms</Link>
              <Link className=" py-2 mb-1">Privacy</Link>
            </div>
          </div>
          <div className="text-black">
            <h4 className=" py-2 mb-1 font-semibold">Products</h4>
            <div className="footer-links flex flex-col">
              <Link  className="py-2 mb-1">
                Exchange
              </Link>
              <Link  className=" py-2 mb-1">
                Research
              </Link>
              <Link  className=" py-2 mb-1">
                Leverage Token
              </Link>
              <Link  className=" py-2 mb-1">
                Announcements
              </Link>
              <Link  className=" py-2 mb-1">
                Risk Warning
              </Link>
            </div>
          </div>
          <div className="text-black">
            <h4 className="y-2 py-2 mb-1 font-semibold">Support</h4>
            <div className="footer-links flex flex-col">
              <Link className=" py-2 mb-1">24/7 Chat Support</Link>
              <Link className=" py-2 mb-1">FAQs</Link>
              <Link className=" py-2 mb-1">Binance Legal</Link>
              <Link className=" py-2 mb-1">Support Center</Link>
              <Link className=" py-2 mb-1">
                Trading Rules
              </Link>
            </div>
          </div>
          <div className="text-black">
            <h4 className="py-2 mb-1 font-semibold">Contact Us</h4>
            <div className="flex flex-col">
              <div>
                H-47, Bandhan Palace, <br />
                Jampur, Mumbai,
                <br />
                PinCode: 110162
              </div>
              <div>+91-5081828384</div>
              <div>jirchi@hotmail.com</div>
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
