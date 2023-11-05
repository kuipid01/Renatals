import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineCaretDown,
  AiOutlineCopyrightCircle,
  AiOutlineFacebook,
  AiOutlineInbox,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full relative bg-black h-fit ">
      <div className="w-[95%] flex flex-col  text-gray-400  mx-auto h-fit py-[2rem]">
        <div className="w-full mb-[2rem] h-full items-center flex md:flex-row flex-col justify-between ">
          <div className="flex gap-3 w-full  md:w-[30%] flex-col">
            <h1 className="text-xl md:text-3xl">Be Apartment Ready</h1>
            <p className="text-sm font-light">
              Get Exclusive <span className="text-white">updates </span>   
              straight to your mail box
            </p>
            <div className="w-full h-[50px] rounded  overflow-hidden border border-gray-400 relative">
              <input
                className="w-full bg-transparent  pl-4 h-full"
                placeholder="Email Address"
                type="text"
              />
              <div className="flex absolute hover:bg-secondary/70 transition-all  right-0 top-0 items-center cursor-pointer  text-2xl justify-center bg-secondary text-white rounded h-full w-[40px]">
                {" "}
                <AiOutlineArrowRight />{" "}
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-full flex flex-col md:flex-row mt-3  md:mt-auto justify-between">
            <ul className="flex my-[2rem] md:my-auto flex-col gap-1">
              <li className="text-white mb-[1rem]">About</li>
              <li className="text-gray-400">Team</li>
              <li className="text-gray-400"></li>
              <li className="text-gray-400">Blog</li>
            </ul>
            <ul className="flex my-[2rem] md:my-auto flex-col gap-3">
              <li className="text-white  mb-[1rem]">Links</li>
              <li className="text-gray-400">Dev Forum</li>
              <li className="text-gray-400">Verification process</li>
              
            </ul>
            <ul className="flex my-[2rem] md:my-auto flex-col gap-3">
              <li className="text-white  mb-[1rem]">Contact Us</li>
              <li className="text-gray-400 flex gap-2 items-center text-base "> <AiOutlinePhone className="text-white text-xl"/> +234-915701-66-9 </li>
              <li className="text-gray-400 flex gap-2 items-center text-base"> <AiOutlineInbox className="text-white text-xl"/> hello@Rental@gmail.com</li>
              <li className="text-gray-400 flex gap-2 items-center text-base"> <AiOutlineCaretDown className="text-white text-xl"/>  Federal Capital Territtory Abuja.</li>
            </ul>
          </div>
        </div>
        <div className="w-full relative text-sm  py-2 mb-[2rem] h-full flex md:flex-row flex-col gap-3 md:gap-auto justify-between border-t border-gray-400 ">
          <span className="flex items-center">
            {" "}
            <AiOutlineCopyrightCircle /> Kuipid Technologies Ltd . All Rights
            Reserved{" "}
          </span>
          <div className="flex items-center w-fit gap-3">
            <div className="w-[30px] hover:bg-gray-700 text-white transition-all cursor-pointer h-[30px] rounded-full border border-gray-300 flex items-center justify-center">
              <AiOutlineFacebook />
            </div>
            <div className="w-[30px] hover:bg-gray-700 text-white transition-all cursor-pointer h-[30px] rounded-full border border-gray-300 flex items-center justify-center">
              <AiOutlineInstagram />
            </div>
            <div className="w-[30px] hover:bg-gray-700 text-white transition-all cursor-pointer h-[30px] rounded-full border border-gray-300 flex items-center justify-center">
              <AiOutlineTwitter />
            </div>
          </div>
          <div className="flex  h-fit gap-3 text-gray-400 ">
            <Link>Terms of service</Link>
            <Link>Privacy</Link>
          </div>
        </div>
      </div>
      <div
        onClick={goTop}
        className="md:w-[80px]  cursor-pointer absolute right-0 bottom-0 md:h-[80px] w-[40px] h-[40px] rounded-full border-white border-2 flex justify-center items-center"
      >
        <AiOutlineArrowUp className=" text-xl md:text-3xl text-white relative z-[99999]" />
      </div>
    </div>
  );
};

export default Footer;
