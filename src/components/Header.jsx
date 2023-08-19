import React from "react";
// import Switcher from "./Switcher";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full hidden md:contents top-0 sticky z-50">
      <div className="flex justify-between py-4 bg-slate-100">
        <div className="flex flex-row items-center text-black text-base justify-between">
          <Link to="/">
            <img src="./images/logo.png" width={120} alt="logo" />
          </Link>
          <h3 className=" px-4">Buy Crypto</h3>
          <h3 className=" px-4">Earn</h3>
          <h3 className=" px-4">Trade</h3>
          <h3 className=" px-4">Market</h3>
          <h3 className=" px-4">Feed</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-base ml-8 cursor-pointer">
          {/* <div className="md:block hidden px-4">
            <Switcher className="text-white" />
          </div> */}
          <h3 className="px-4 mr-6">USD</h3>
          {/* <h3 className="px-4">Your Account</h3> */}

          {/* {user?.email ? (
            <div>
              <Link to="/account">
                <button className="text-white pr-4">Account</button>
              </Link>
              <button onClick="" className="bg-white px-6 py-2 rounded-md cursor-pointer text-white">
                Logout
              </button>
            </div>
          ) : ( */}
          <div className="flex items-center">
            <Link to="/login">
              <button className="text-black text-base mr-6">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-yellow-600 text-base px-4 py-2 mr-4 rounded-md cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
