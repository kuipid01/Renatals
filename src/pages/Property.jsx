import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineBook,
  AiOutlineClose,
  AiOutlineExpand,
  AiOutlineMessage,
} from "react-icons/ai";
import "./property.css";
import Rating from "../components/Rating";
import Amenities from "../components/Amenities";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Property = () => {
  const [bwidth, setBwidth] = useState({ value: "33.33333%", index: 1 });
  const [descwidth, setDescWidth] = useState({ value: "33.33333%", index: 1 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const windowWidth = window.innerWidth;
      // Define your threshold values for mobile and medium screens
      const mobileThreshold = 768; // For example, consider screens below 768px as mobile
      const mediumThreshold = 1024; // For example, consider screens between 768px and 1024px as medium

      setIsMobile(windowWidth < mobileThreshold);
      setIsMedium(windowWidth >= mobileThreshold && windowWidth < mediumThreshold);
    };

    // Initial check
    checkScreenSize();

    // Add a listener to check and update screen size on resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  const handleWidth = (num) => {
    const val = (num / 3) * 100;
    setBwidth({ ...bwidth, value: val + "%", index: num });
    // setBwidth(val + "%");
  };
  const handleDescWidth = (num) => {
    const val = (num / 3) * 100;
    setDescWidth({ ...descwidth, value: val + "%", index: num });
    // setBwidth(val + "%");
  };
  const totalStarsGotten = 45;
  const totalStarsAvailable = 50;
  const decimalStar = (totalStarsGotten / totalStarsAvailable) * 5;
  const widthReview = (totalStarsGotten / totalStarsAvailable) * 100 + "%";
  const [imageScaled, setImageScaled] = useState("");
  const ScaledImage = ({ img }) => {
    // console.log(img);
    return (
      <div className=" fixed left-0 flex justify-center items-center top-0 w-full h-full  z-[99999] ">
        <div
          onClick={() => setImageScaled("")}
          className="w-full h-full absolute top-0 left-0 flex justify-center items-center blur-lg bg-white "
        ></div>
        <img
          className="w-[80%] h-[80%] relative z-[99999] shadow-lg rounded object-cover"
          src={img}
          alt="img"
        />
        <AiOutlineClose
          onClick={() => setImageScaled("")}
          className="absolute cursor-pointer hover:scale-110 right-2 top-2 text-xl font-old text-red-500"
        />
      </div>
    );
  };
  //   console.log(imageScaled)
  return (
    <div className="mt-[7rem]">
      {imageScaled === "" ? "" : <ScaledImage img={imageScaled} />}
      <section className=" w-5/6 mx-auto gap-[2rem] h-fit min:h-[80vh] flex md:flex-row flex-col ">
        <img
          className="md:w-2/5 w-full object-cover rounded-lg"
          src="/assets/house2.jpg"
          alt=""
        />
        <div className="md:flex-1 w-full gap-4 flex flex-col">
          <div className="flex justify-between items-center">
            <span className="flex-1 text-xl md:text-4xl text-primary font-light">
              Two Bedroom flat detached apartment
            </span>
            <div className="w-1/4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <AiFillStar className="text-xl text-yellow-400" />
              ))}
            </div>
          </div>
          <div>
            <small className="capitalize text-lg font-light leading-10">
              choose price by range of stay
            </small>
            <div className="w-3/4 transition-all">
              <ul className=" flex justify-between text-gray-600 w-full  p-3  ">
                <li onClick={() => handleWidth(1)} className="cursor-pointer">
                  Daily
                </li>
                <li onClick={() => handleWidth(2)} className="cursor-pointer">
                  Monthly
                </li>
                <li onClick={() => handleWidth(3)} className="cursor-pointer">
                  Yearly
                </li>
              </ul>
              <div className="w-full h-fit bg-gray-200 rounded-lg">
                <hr
                  className=" transition-all border-primary rounded-lg border-2"
                  style={{ width: bwidth.value }}
                />
              </div>

              {bwidth.index === 1 ? (
                <p
                  className="py-3 text-base md:text-xl text-secondary capitalize"
                  ame
                >
                  {" "}
                  Type of rent range not available for this property
                </p>
              ) : bwidth.index === 2 ? (
                <p className="py-3 text-5xl text-secondary capitalize">
                  #100000
                </p>
              ) : bwidth.index === 3 ? (
                <p className="py-3 text-5xl text-secondary capitalize" ame>
                  #900000{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <p className="text-xl text-primary mb-1">
              Location: <span>Ajegunle, Lagos Nigeria</span>
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full  gap-2 ">
            {" "}
            <button className="bg-secondary h-[50px] md:h-auto w-full md:w-1/3 py-2 font-semibold gap-2 transition duration-200 ease-in-out justify-center   focus-within:outline focus-within:text-secondary hover:scale-95 focus-within:outline-secondary focus-within:bg-transparent flex items-center text-white rounded-md outline-none">
              {" "}
              <AiOutlineBook /> Book Apartment
            </button>{" "}
            <button className="bg-secondary h-[50px] md:h-auto w-full md:w-1/3 py-3 font-semibold gap-2 transition duration-200 ease-in-out justify-center  focus-within:outline focus-within:text-secondary hover:scale-95 focus-within:outline-secondary focus-within:bg-transparent flex items-center text-white rounded-md outline-none">
              {" "}
              <AiOutlineMessage />
              Message Lister
            </button>
          </div>
        </div>
      </section>
      <div className="md:w-3/5 w-full mt-[2rem] md:mt-[5rem] px-4 md:pl-[5rem]">
        <ul className="w-full flex py-2 justify-between  mx-auto">
          <li
            className={`cursor-pointer hover:text-secondary p-2 ${
              descwidth.index === 1 ? "text-black" : "text-gray-500"
            }`}
            onClick={() => handleDescWidth(1)}
          >
            Description
          </li>
          <li
            className={`cursor-pointer hover:text-secondary p-2 ${
              descwidth.index === 2 ? "text-black" : "text-gray-500"
            }`}
            onClick={() => handleDescWidth(2)}
          >
            Ratings
          </li>
          <li
            className={`cursor-pointer hover:text-secondary p-2 ${
              descwidth.index === 3 ? "text-black" : "text-gray-500"
            }`}
            onClick={() => handleDescWidth(3)}
          >
            Amenities
          </li>
        </ul>
        <div className="w-full h-fit bg-gray-200 rounded-lg">
          <hr
            className=" transition-all border-primary rounded-lg border-2"
            style={{ width: descwidth.value }}
          />
        </div>
      </div>

      {descwidth.index === 1 ? (
        <p
          className="py-3 w-full md:w-3/5 px-[1rem] md:pl-[5rem] text-base font-light leading-10 text-black capitalize"
          ame
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          architecto quo natus quisquam. Recusandae eligendi nesciunt possimus
          ipsam expedita consequatur beatae eum, soluta nam illum sapiente quas
          deserunt fugiat vero.
        </p>
      ) : descwidth.index === 2 ? (
        <div className=" overflow-y-auto p-1 py-3 w-[99%] md:w-[90%] flex flex-col  px-[1rem] md:pl-[5rem] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200 h-auto  max-h-[60vh] ">
          <div className="flex mb-[3rem] justify-between items-center">
            <span className="w-fit text-xl sm:text-2xl  md:text-5xl font-extrabold p-2">
              Reviews
            </span>{" "}
            <span className="w-full md:w-[60%] h-fit rounded-full bg-gray-200 items-end justify-end">
              <hr
                className="h-[7px] rounded-full bg-secondary"
                style={{ width: widthReview }}
              />
            </span>
            <span className="md:text-2xl text-base w-[20%] flex md:w-[10%] relative font-semibold">
              4.8/ <span className="md:absolute md:top-2">5</span>{" "}
            </span>
          </div>
          <div className="w-full px-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((rating) => (
              <Rating />
            ))}
          </div>
        </div>
      ) : descwidth.index === 3 ? (
        <p className="py-3 w-full md:w-3/5 px-[1rem]  md:pl-[5rem] text-2xl md:text-5xl text-black capitalize">
          <Amenities />
        </p>
      ) : (
        ""
      )}
      <p className="text-left pl-3 text-2xl text-primary font-light mb-4">
        Image Gallery
      </p>
      <div className="p-5" >
        <Swiper
        className={`imageGallery  w-full p-5 ${isMobile ? ' h-[150px]' :  'h-[300px]'} gap-[24px] flex items-center justify-center flex-wrap `}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={isMobile ? 20 : 50}
            slidesPerView={isMobile ? 2 : 4}
            navigation
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide   className="w-full md:w-[var(--card-width)] h-fit rounded overflow-hidden relative" key={item}>
             <div className="w-[30px] absolute bottom-3 right-3 text-2xl  z-[88888] text-white cursor-pointer hover:text-3xl transition-all flex items-center justify-center h-[30px]">
             <AiOutlineExpand
                 onClick={() => setImageScaled("/assets/house2.jpg")} 
                  className=""
                />
             </div>
                
                <img
                  className="w-full h-full object-cover"
                  src="/assets/house1.jpg"
                  alt=""
                />
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* propertydetails  */}
      {/* description */}
      {/* amenities */}
      {/* bookings   */}
      {/* ratings */}
      {/* contactowner */}
      {/* additionalinfo   */}
      {/* relatedproperties */}
      <section>
        <h1 className="md:text-5xl text-2xl text-center md:text-auto text-secondary md:pl-[3rem] my-[1rem] md:my-[5rem]">
          Related Propeerties
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Property;
