import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-second w-full mt-4 py-4 relatve bottom-0 left-0 right-0">
        <div className="flex flex-row justify-between mx-8">
          <div>
            <h4 className="text-white">Quick Links</h4>
            <div className="footer-links flex flex-col">
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watches</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white">Information</h4>
            <div className="footer-links flex flex-col">
              <Link to="/blog" className="text-white py-2 mb-1">
                Blogs
              </Link>
              <Link to="/privacy-policy" className="text-white py-2 mb-1">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">
                Refund Policy
              </Link>
              <Link to="/delivery-policy" className="text-white py-2 mb-1">
                Delivery Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-white py-2 mb-1">
                Terms and Conditions
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white">Account</h4>
            <div className="footer-links flex flex-col">
              <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">FAQ</Link>
              <Link to="/contact" className="text-white py-2 mb-1">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white">Contact Us</h4>
            <div className="flex flex-col">
              <div className="text-white">
                T-62, Bandhan Palace, <br />
                Jampur, Noida,
                <br />
                PinCode: 110162
              </div>
              <div className="text-white">+91-8081828384</div>
              <div className="text-white">jirachi@hotmail.com</div>
              <div className="social_media_icons flex align-items-center gap-8 mt-2">
                <span className="yellow-300">
                  <BsGithub className="fs-5 text-white" />
                </span>
                <span className="yellow-300">
                  <BsYoutube className="fs-5 text-white" />
                </span>
                <span className="yellow-300">
                  <BsInstagram className="fs-5 text-white" />
                </span>
                <span className="yellow-300">
                  <BsLinkedin className="fs-5 text-white" />
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
