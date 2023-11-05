import React from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
const Choose = () => {
  return (
    <div className="w-full my-[2rem] md:min-h-screen h-fit flex flex-col items-center">
      <div className="md:w-4/5 w-full items-center mx-auto flex md:flex-row flex-col justify-between">
        <div className="flex w-[95%] md:w-auto mx-auto flex-col gap-5">
          <small className=" tracking-wide font-bold uppercase">Why choose us</small>
          <p className="md:text-2xl text-lg font-bold  text-primary">
            We Provide the best and trusted rent <span className="hidden md:flex"> <br /> </span>  apartments for our
            clients
          </p>
        </div>
        <div>
          <p className=" w-[95%] md:w-auto mx-auto  md:max-w-md font-light md:font-medium leading-8 text-gray-600">
            {" "}
            Explore an extensive selection of rental properties at your
            fingertips. We offer a wide range of rental options, ensuring you'll
            find the perfect home for your needs.{" "}
          </p>
        </div>
      </div>
      <div className="w-[95%] h-fit mt-[3rem] lg:mt-[0] lg:h-screen  items-center mx-auto flex md:flex-row flex-col justify-between ">
       {/* hidden on smalll screen images collages  */}
        <div className="w-1/2 hidden   h-full relative lg:flex justify-center items-center">
          <div className="w-[500px] p-2  relative rounded-tl-[150px] rounded-bl-md border-[3px] border-solid rounded-br-md rounded-tr-md h-[300px] bg-white">
            <div className="absolute -left-3 rounded-lg w-1 h-1/4 bg-gray-400/50 bottom-2"></div>
            <div className="absolute right-10 rounded-lg w-1/4 h-1 bg-gray-400/50 -top-3"></div>
            <img
              src="/assets/bgHouse.jpg"
              className=" rounded-tl-[150px] rounded-bl-md rounded-br-md rounded-tr-md object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="w-[400px] bottom-[15%] right-[2%] p-1  absolute rounded-tl-[70px] rounded-bl-md border-[3px] border-solid rounded-br-[70px] overflow-hidden rounded-tr-md h-[200px] bg-white">
            <div className="absolute -left-3 rounded-lg w-1 h-1/4 bg-gray-400/50 bottom-2"></div>
            {/* <div className="absolute right-10 rounded-lg w-1/4 h-1 bg-gray-400/50 -top-3"></div> */}
            <img
              src="/assets/bgHouse.jpg"
              className="  rounded-tl-[70px] rounded-bl-md border-[3px] border-solid rounded-br-[70px] object-cover w-full h-full"
              alt=""
            />
          </div>
          <div className="w-[200px] bottom-[35%] -right-[7%] p-1  absolute rounded-tl-[70px] rounded-bl-md border-[3px] border-solid rounded-br-[70px] overflow-hidden rounded-tr-md h-[150px] bg-white">
            <div className="absolute -left-3 rounded-lg w-1 h-1/4 bg-gray-400/50 bottom-2"></div>
            {/* <div className="absolute right-10 rounded-lg w-1/4 h-1 bg-gray-400/50 -top-3"></div> */}
            <img
              src="/assets/bgHouse.jpg"
              className="  rounded-tl-[70px] rounded-bl-md border-[3px] border-solid rounded-br-[70px] object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>

        {/* end of images */}
        <div className="w-full lg:w-1/2 h-full justify-center flex-col items-center flex ">
          <div className="flex gap-2">
            <AiOutlineMoneyCollect className="text-5xl"/>{" "}
            <div className="flex flex-col gap-3">
              <h1 className='text-primary text-2xl'>Budget Friendly</h1>
              <p className='text-sm text-primary w-fit max-w-[400px] font-light leading-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                quisquam!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <AiOutlineMoneyCollect className="text-5xl"/>{" "}
            <div className="flex flex-col gap-3">
              <h1 className='text-primary text-2xl'>Budget Friendly</h1>
              <p className='text-sm text-primary w-fit max-w-[400px] font-light leading-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                quisquam!
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <AiOutlineMoneyCollect className="text-5xl"/>{" "}
            <div className="flex flex-col gap-3">
              <h1 className='text-primary text-2xl'>Budget Friendly</h1>
              <p className='text-sm text-primary w-fit max-w-[400px] font-light leading-6'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                quisquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
