import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useLocation, NavLink } from "react-router-dom";

import PalCert from "../assets/images/palcert_logo.png";

import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    ></span>

    {icon}
  </button>
);

const Navbar = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/administrator":
        return "Administrator";
      case "/hei":
        return "HEI";
      case "/recruiter":
        return "Recruiter";
      case "/graduate":
        return "Graduate";
      case "/certificate":
        return "Certificate";
      case "/contact":
        return "Contact";
      default:
        return "My App";
    }
  };

  const {
    activeMenue,
    setActiveMenue,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    account,
  } = useStateContext();

  return (
    <nav className="flex justify-between items-center p-2 px-4 md:mx-1 relative">
      {/* <NavButton title="Menue" color="blue" icon={<AiOutlineMenu/>} customFunc={() => setActiveMenue((prevActiveMenue) => (!prevActiveMenue))}/> */}

      <div className="flex justify-start items-center">
        <div>
          <NavLink to="/" className="flex justify-center items-center mr-2">
            <img src={PalCert} className="max-h-[50px]" alt="" />
            <span className="text-white text-[20px] sm:text-[24px] md:text-[28px] uppercase font-semibold pr-2 sm:w-[165px] border-r">
              PalCert
            </span>
          </NavLink>
        </div>

        <h1 className="text-white text-[16px] md:text-[22px] uppercase">
          {getTitle()}
        </h1>
      </div>

      <span className="text-white text-[16px] md:text-[22px] ">
        {account ? account.slice(0, 4) + "..." + account.slice(-4) : ""}
      </span>
    </nav>
  );
};

export default Navbar;
