import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarData } from "./SidebarData";
import { VscAccount } from "react-icons/vsc";

function Header() {
  const [isShowBurger, setIsShowBurger] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [isToShow, setToShow] = useState(true);

  useEffect(() => {
    showHeaderFooter();
  }, [window.location.pathname]);

  const showHeaderFooter = () => {
    const pathName = window.location.pathname;
    if (pathName == "/signup" || pathName == "/login") {
      setToShow(false);
    } else {
      setToShow(true);
    }
  };

  const showBurgerMenu = () => {
    if (screenSize.width <= 768) {
      setIsShowBurger(true);
    } else {
      setIsShowBurger(false);
    }
  };

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);
    showBurgerMenu();

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  // console.log(screenSize, isShowBurger);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(isToShow)

  return (
    <>
      {isToShow ? (
        <div className="w-full  md:contents top-0 sticky z-50">
          <div className="flex justify-between py-5 bg-slate-100">
            <div className="flex flex-row cursor-pointer items-center text-black text-base justify-left">
              <Link to="/">
                <img src="./images/logo.png" width={120} alt="logo" className="mx-4" />
              </Link>
              <div className="hidden md:contents">
                <h3 className="md:px-2 px-4">Buy Crypto</h3>
                <h3 className="md:px-2 px-4">Earn</h3>
                <h3 className="md:px-2 px-4">Trade</h3>
                <h3 className="md:px-2 px-4">Market</h3>
                <h3 className="md:px-2 px-4">Feed</h3>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center text-base ml-4 cursor-pointer">
              <h3 className="px-4 hidden md:flex lg:mr-2 md:mr-2">USD</h3>

              {user?.email ? (
                <div className="flex items-center ">
                  <Link className="flex flex-row gap-[2px]">
                    <VscAccount className=" text-yellow-600 font-bold text-2xl" />
                    <button className=" text-black capitalize text-base md:mr-2 pr-4">
                      {user.email.split("@")[0]}
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      onClick={handleLogout}
                      className="bg-black text-base md:mr-2 mr-4 px-6 py-2 rounded-md cursor-pointer text-white"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center  ">
                  <Link to="/login" className="mr-4">
                    <button className="text-black text-base md:mr-2">Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="bg-yellow-600 text-base px-4 mr-4 py-2 md:mr-2 rounded-md cursor-pointer text-white">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}

              {isShowBurger ? (
                <>
                  <div className="flex flex-row justify-end ">
                    <GiHamburgerMenu
                      onClick={() => setOpenMenu(!openMenu)}
                      className="mr-2 hover:text-red-500 text-2xl"
                    />
                    <Menu
                      isOpen={openMenu}
                      onClose={() => setOpenMenu(!openMenu)}
                      right
                      width={"100%"}
                      className="bg-slate-50"
                    >
                      {SidebarData.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                      <Link className=" px-4">Buy Crypto</Link>
                      <Link className=" px-4">Earn</Link>
                      <Link className=" px-4">Trade</Link>
                      <Link className=" px-4">Market</Link>
                      <Link className=" px-4">Feed</Link>
                    </Menu>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden flex-row justify-between items-center text-base ml-8 cursor-pointer">
                    <h3 className="px-4 lg:mr-4 md:mr-2">USD</h3>
                    {/* <h3 className="px-4">Your Account</h3> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
