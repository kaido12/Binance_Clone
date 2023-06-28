import React from "react";
import Switcher from "./Switcher";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";




function Header({showSidebar}) {
  

  
  return (
    <div className="w-full top-0">
      <div className="flex p-2 items-center bg-slate-950">       
        
        <Link to="/">
          <img src="./images/logo.png" width={120} alt="logo" />
        </Link>
        <div className="flex flex-row justify-between">
          <h3 className="text-white text-md px-4">Buy Crypto</h3>
          <h3 className="text-white text-md px-4">Earn</h3>
          <h3 className="text-white text-md px-4">Trade</h3>
          <h3 className="text-white text-md px-4">Market</h3>
          <h3 className="text-white text-md px-4">Feed</h3>
        </div>

        <div className="flex flex-grow justify-end items-center  ml-4 font-medium text-sm cursor-pointer">
          <div className="md:block hidden px-4">
            <Switcher className="text-white" />
          </div>
          <h3 className="text-white text-md px-4">USD</h3>
          <h3 className="text-white text-md px-4">Your Account</h3>
          {/* {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick=""
            className='bg-white px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
           */}
        </div>
      </div>
    </div>
  );
}

export default Header;
