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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AnimatePresence, motion } from "framer-motion";
import ImagePlaceHolder from "../components/ImagePlaceHolder";
import { useParams } from "react-router-dom";
import newRequest from "../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
const Property = () => {
  const [bwidth, setBwidth] = useState({ value: "33.33333%", index: 1 });
  const [descwidth, setDescWidth] = useState({ value: "33.33333%", index: 1 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["properties", id], // Update the queryKey to include the property id
    queryFn: () =>
      newRequest.get(`/property/single/${id}`).then((res) => {
        return res.data;
      }),
  });
  
// Destructure property and similarProperties from the data object
const { property, similarProperties } = data || {};
  const userId = data?.userId;
  // console.log(property,similarProperties);
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const windowWidth = window.innerWidth;
      // Define your threshold values for mobile and medium screens
      const mobileThreshold = 768; // For example, consider screens below 768px as mobile
      const mediumThreshold = 1024; // For example, consider screens between 768px and 1024px as medium

      setIsMobile(windowWidth < mobileThreshold);
      setIsMedium(
        windowWidth >= mobileThreshold && windowWidth < mediumThreshold
      );
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
  const handleRelatedPropertyClick = async (relatedPropertyId) => {
 
    // Manually refetch the property data for the clicked related property
    await refetch(["properties", relatedPropertyId]);
  
    
  };
  
  const ScaledImage = ({ img }) => {
    // console.log(img);
    return (
      <div className=" fixed left-0 flex justify-center items-center top-0 w-full h-full  z-[99999] ">
        <div
          onClick={() => setImageScaled("")}
          className="w-full h-full absolute top-0 left-0 flex justify-center items-center blur-lg bg-white "></div>
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
  setTimeout(() => {
    setDataLoaded(true);
  }, 3000);
  return (
    <div className="mt-[7rem]">
      {imageScaled === "" ? "" : <ScaledImage img={imageScaled} />}
      <section className=" w-5/6  mx-auto gap-[2rem] h-fit min:h-[80vh] flex md:flex-row flex-col ">
        {property ? (
          <img
            className="md:w-2/5 h-[500px] w-full object-cover rounded-lg"
            src={property?.coverImage}
            alt=""
          />
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:w-2/5 w-full h-[500px] md:h-auto object-cover rounded-lg">
              <ImagePlaceHolder />
            </motion.div>
          </AnimatePresence>
        )}

        <div className="md:flex-1 w-full gap-4 flex flex-col">
          <div className="flex justify-between items-center">
            <span className="flex-1 text-xl  md:text-4xl text-primary font-light">
              {property?.title}
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
                <p className="py-3 text-base md:text-xl text-secondary capitalize">
                  {" "}
                  {property?.prices?.daily ||
                    "Type of rent range not available for this property"}
                </p>
              ) : bwidth.index === 2 ? (
                <p className="py-3 text-base md:text-xl text-secondary capitalize">
                  {property?.prices?.monthly ||
                    "Type of rent range not available for this property"}
                </p>
              ) : bwidth.index === 3 ? (
                <p className="py-3 text-base md:text-xl text-secondary capitalize">
                  {property?.prices?.yearly ||
                    "Type of rent range not available for this property"}
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
           
            <button className="bg-secondary pt-[20px] md:h-auto w-full md:flex-1 py-3 font-semibold gap-2 transition duration-200 ease-in-out justify-center  focus-within:outline focus-within:text-secondary hover:scale-95 focus-within:outline-secondary focus-within:bg-transparent flex items-center text-white rounded-md outline-none">
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
            onClick={() => handleDescWidth(1)}>
            Description
          </li>
          <li
            className={`cursor-pointer hover:text-secondary p-2 ${
              descwidth.index === 2 ? "text-black" : "text-gray-500"
            }`}
            onClick={() => handleDescWidth(2)}>
            Ratings
          </li>
          <li
            className={`cursor-pointer hover:text-secondary p-2 ${
              descwidth.index === 3 ? "text-black" : "text-gray-500"
            }`}
            onClick={() => handleDescWidth(3)}>
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
        <p className="py-3 w-full md:w-3/5 px-[1rem] md:pl-[5rem] text-base font-light leading-10 text-black capitalize">
          {" "}
         {property?.desc} <br/>
         {property?.amenities?.desc}
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
          <Amenities item={property?.amenities}/>
        </p>
      ) : (
        ""
      )}
      <p className="text-left pl-3 text-2xl text-primary font-light mb-4">
        Image Gallery
      </p>
      <div className="p-5">
        <Swiper
          className={`imageGallery  w-full p-5 ${
            isMobile ? " h-[150px]" : "h-[300px]"
          } gap-[24px] flex items-center justify-center flex-wrap `}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={isMobile ? 20 : 50}
          slidesPerView={isMobile ? 2 : 4}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          {property?.images?.map((item) => (
            <SwiperSlide
              className="w-full  md:w-[var(--card-width)] h-fit rounded overflow-hidden relative"
              key={item}>
              <div className="w-[30px] absolute bottom-3 right-3 text-2xl  z-[88888] text-white cursor-pointer hover:text-3xl transition-all flex items-center justify-center h-[30px]">
                <AiOutlineExpand
                  onClick={() => setImageScaled(item)}
                  className=""
                />
              </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/50">

            </div>
              {property?.images ? (
                <img
                  className="w-full h-full object-cover"
                  src={item}
                  alt=""
                />
              ) : (
                <div className="w-[300px] h-[300px] object-cover rounded-lg">
                  <ImagePlaceHolder />
                </div>
              )}
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
          {similarProperties?.map((item) => (
            <Card click={handleRelatedPropertyClick}  item={item} key={item._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Property;
