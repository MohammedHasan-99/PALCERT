import { React, useEffect, useState } from "react";
import Web3 from "web3";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaUserTie,
  FaSchool,
  FaMoneyBillWave,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import metamask_off from "../assets/images/metamask_off.png";
import metamask_on from "../assets/images/metamask_on.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideMenue = () => {
  const {
    activeMenue,
    setActiveMenue,
    screenSize,
    isMenueHovered,
    setIsMenueHovered,
    isConnectedMetaMask,
    setIsConnectedMetaMask,
    web3,
    setWeb3,
    account,
    setAccount,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenue && screenSize <= 900) {
      setActiveMenue(false);
    }
  };

  const toggleMenu = () => {
    setActiveMenue((prevActiveMenue) => !prevActiveMenue);
  };

  // const MetaMaskConnect = () => {

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      setErrorMessage("Please install MetaMask to interact with this feature.");
      toast.error('Please install MetaMask to interact with this feature.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    }
  }, []);

  const connectMetaMask = async () => {
    if (web3) {
      try {
        // Request account access if needed
        

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
        setErrorMessage(null);
        toast.success("Connected Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });

        setIsConnectedMetaMask(true);
      } catch (error) {
        setErrorMessage("User denied account access.");
        toast.error('User denied account access.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
          });
      }
    } else {
      setErrorMessage("Web3 not initialized.");
      toast.error('Web3 not initialized.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
        });
    }
  };
  const disconnectMetaMask = () => {
    setAccount(null);
    setIsConnectedMetaMask(false);
    setErrorMessage("Disconnected from MetaMask.");
    toast.info('Disconnected from MetaMask.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
  };

  const handleConnectionMetaMask = async () => {

    if (isConnectedMetaMask) {
      disconnectMetaMask();
      console.log(isConnectedMetaMask);
    } else {
      await connectMetaMask();
      console.log(isConnectedMetaMask);
    }
  };

  const activeLink =
    "flex items-center text-md hover:bg-[#0e94d4] bg-[#0e94d4] text-white text-xl";
  const normalLink =
    "flex items-center text-md hover:bg-[#0e94d4] text-white text-xl";

  const NavButton = ({ title, customFunc, icon, img, color, dotColor, to }) => (
    <button type="button" style={{ color }} className="text-xl border-b border-[#03374e]">
      <NavLink
        to={to}
        onClick={customFunc}
        onMouseEnter={() => setIsMenueHovered(true)}
        onMouseLeave={() => setIsMenueHovered(false)}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <span className="px-[23px] py-4 flex-shrink-0">
          {icon || <img src={img} className="w-6" alt="metamask_off" />}
        </span>

        {title}
      </NavLink>
    </button>
  );

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {/* {activeMenue && ( */}
      <>
        <div className="mt-[100px]">
          <div className="flex flex-col ">
            <button
              type="button"
              onClick={toggleMenu}
              className={`${normalLink}  border-b border-[#03374e]`}
            >
              <span className="px-[23px] py-4 flex-shrink-0">
                {<AiOutlineMenu className="text-2xl text-white" />}
              </span>
            </button>

            <button
              type="button"
              key={isConnectedMetaMask ? 'connected' : 'disconnected'}
              className={`${normalLink}  border-b border-[#03374e]`}
              onClick={handleConnectionMetaMask}
              onMouseEnter={() => setIsMenueHovered(true)}
              onMouseLeave={() => setIsMenueHovered(false)}
            >
              <span className="px-[23px] py-4 flex-shrink-0">
                <img src={isConnectedMetaMask? metamask_on : metamask_off} className="w[28px] h-[28px]" alt="" />

              </span>

              {isConnectedMetaMask ? "Disconnect" : "Connect"}
            </button>

            {/* <NavButton
              to="#"
              title="Connect"
              color="white"
              img={metamask_off}
            /> */}

            <NavButton
              to="/administrator"
              title="Administrator"
              color="white"
              icon={<FaUserTie className="text-2xl" />}
              customFunc={handleCloseSideBar}
            />

            <NavButton
              to="/hei"
              title="HEI"
              color="white"
              icon={<FaSchool className="text-2xl" />}
              customFunc={handleCloseSideBar}
            />

            <NavButton
              to="/recruiter"
              title="Recruiter"
              color="white"
              icon={<FaMoneyBillWave className="text-2xl" />}
              customFunc={handleCloseSideBar}
            />

            <NavButton
              to="/graduate"
              title="Graduate"
              color="white"
              icon={<FaUserGraduate className="text-2xl" />}
              customFunc={handleCloseSideBar}
            />

            <NavButton
              to="/certificate"
              title="Certificate"
              color="white"
              icon={<FaAward className="text-2xl" />}
              customFunc={handleCloseSideBar}
            />
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default SideMenue;
