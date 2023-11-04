import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineNotification,
  AiOutlineSearch,
} from "react-icons/ai";
const Navbar = () => {
  const [navTrans, setnavTrans] = useState(true);
  const [userOnline, setuserOnline] = useState(true);
  const [dropDown, setdropDown] = useState(false);
  useEffect(() => {
    return () => {
      const checkScroll = () => {
        if (window.scrollY === 0) {
          setnavTrans(true);
        } else {
          setnavTrans(false);
        }
      };
      window.addEventListener("scroll", checkScroll);
      return () => {
        window.removeEventListener("scroll", checkScroll);
      };
    };
  }, [window.scrollY]);

  return (
    <div
    className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-10 transition-all w-full sm:w-[95%] lg:w-[90%] h-16 px-4 ${
      navTrans ? "bg-primary" : "bg-white shadow-xl"
    } flex justify-between items-center`} >
     
  <img src="/assets/logo.png" alt="Logo" className="w-[100px] h-auto bg-black" />
      <ul
        className={`hidden lg:flex  gap-3 text-lg ${
          navTrans ? "text-white" : "text-black"
        } items-center font-medium uppercase`}
      > 
       
        <Link to='/'>
        <li className="cursor-pointer hover:text-secondary transition-all">
          Home
        </li>
        </Link>
        <li className="cursor-pointer hover:text-secondary transition-all">
          About
        </li>
        <li className="cursor-pointer hover:text-secondary transition-all">
          Properties
        </li>
        <li className="cursor-pointer hover:text-secondary transition-all">
          Agency
        </li>
        <li className="cursor-pointer hover:text-secondary transition-all">
          Blog
        </li>
        <li className="cursor-pointer hover:text-secondary transition-all">
          Contact
        </li>
        <Link to="/search">
          <AiOutlineSearch className="text-2xl cursor-pointer hover:text-secondary transition-all" />
        </Link>
      </ul>
      {userOnline ? (
        <div className="flex text-gray-600 gap-[30px] items-center">
          <div className="w-fit flex justify-center items-center relative  h-fit">
            <span className="w-1 h-1 rounded-full absolute -top-1 bg-secondary -right-1"></span>
            <AiOutlineNotification
              className={` ${!navTrans ? "" : "text-white"} text-xl font-bold`}
            />
          </div>
          <Link to='/inbox'>

          <div className="w-fit flex justify-center items-center relative  h-fit">
            <span className="w-1 h-1 rounded-full absolute -top-1 text-secondary text-xs -right-1">
              1
            </span>
            <AiOutlineMessage
              className={` ${!navTrans ? "" : "text-white"} text-xl font-bold`}
            />
          </div>
          </Link>
          <div onClick={() => setdropDown(!dropDown)} className="w-fit cursor-pointer flex justify-center items-center relative  h-fit">
            <div className="w-2 h-2 rounded-full absolute bottom-0  text-xs right-1 p-1 flex justify-center items-center  shadow bg-white">
              {" "}
              <span className="bg-primary absolute  rounded-full text-primary w-1 h-1"></span>{" "}
            </div>
            <img
              src="/assets/house1.jpg"
              className="w-[40px] h-auto rounded-full object-cover font-bold"
            />
          </div>
        </div>
      ) : (
        <Link
          className={`hover:border-2 transition-all ${
            !navTrans ? "hover:text-secondary" : ""
          } hover:border-secondary flex items-center hover:bg-transparent h-3/4 w-fit px-6 rounded-lg bg-secondary font-semibold text-white`}
          to="/login"
        >
          GET STARTED
        </Link>
      )}
      <AiOutlineMenu className={` lg:hidden text-3xl  ${
            !navTrans ? "text-gray-800" : ""
          } text-gray-200`} />
{
  dropDown && 

      <div className="flex flex-col gap-[20px] absolute  shadow border top-[90%] bg-white right-2 py-[20px] px-4">
        <Link to='/user/kuipid/dashboard' onClick={() => setdropDown(!dropDown)}>
        <div className="flex  gap-[20px] items-center justify-between">
          <img
            src="/assets/house1.jpg"
            className="w-[50px] h-[50px] object-cover rounded-full "
            alt=""
          />

          <div className="flex flex-col">
            <h1 className="text-black ">Kuipid Adegoke</h1>
            <p className="text-gray-600 text-sm ">Kuipid@gmail.com</p>
          </div>
        </div>
        </Link>
       
        <ul className=" border-y border-gray-200 py-4 flex flex-col gap-3 text-gray-500">
          <li onClick={() => setdropDown(!dropDown)} className="py-2 px-[15px] hover:bg-gray-300 hover:text-gray-700 cursor-pointer transition ease-in-out ">Profile</li>
          <li onClick={() => setdropDown(!dropDown)} className="py-2 px-[15px] hover:bg-gray-300 hover:text-gray-700 cursor-pointer transition ease-in-out ">Settings</li>
          <li onClick={() => setdropDown(!dropDown)} className="py-2 px-[15px] hover:bg-gray-300 hover:text-gray-700 cursor-pointer transition ease-in-out ">Billings aand Payment</li>
        </ul>
        <ul className=" border-y border-gray-200 py-4 gap-3 text-gray-500">
          <li onClick={() => setdropDown(!dropDown)} className="py-2 px-[15px] hover:bg-gray-300 hover:text-gray-700 cursor-pointer transition ease-in-out ">Logout</li>
        </ul>
      </div>
      }
    </div>
  );
};

export default Navbar;
