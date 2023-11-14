import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  AiFillCompass,
  AiOutlineCodepen,
  AiOutlineCompass,
  AiOutlinePlus,
} from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import PulseLoader from '../components/PulseLoader'
const Sellerdashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createConvo = async () => {
    const res = await newRequest.post("/conversations", { to: id });

    navigate("/inbox");
  };
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${id}`).then((res) => {
        return res.data;
      }),
  });
  const {
    isLoading: loadingProducts,
    error: loadingError,
    data: loadingData,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      newRequest.get(`/property?userId=${id}`).then((res) => {
        return res.data;
      }),
  });

  return isLoading ? (
    < PulseLoader/>
  ) : error ? (
    "An Error Occured Try reloading"
  ) : (
    <div className="w-full py-[12vh] bg-gray-100/50 min-h-screen  flex flex-col md:flex-row  justify-between px-[2rem] h-fit">
      <div className="w-full md:w-2/6 flex flex-col">
        <div className="w-full border-[1px] border-gray-400 p-[2rem] shadow gap-2 items-center  flex flex-col">
          <img
            src={data?.img || "/assets/house1.jpg"}
            className="w-3/6 h-auto rounded-full object-cover"
            alt=""
          />
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-black text-2xl">{data?.username} </p>{" "}
            <AiOutlineCodepen className="text-gray-300" />{" "}
            <span className="p-1 text-white text-xs rounded-md bg-pink-500">
              Verified
            </span>
          </div>
          <p className="font-medium text-gray-400">@{data?.username}</p>
          <AiOutlineCodepen className="text-gray-300" /> {/* list starts */}
          <div className="border-t py-5 gap-[10px] flex flex-col w-full text-lg font-medium border-b border-gray-300">
            <div className="flex w-full justify-between">
              <div className="flex gap-3 items-center">
                <AiOutlineCompass className="text-gray-500" />
                <span className="text-gray-500">From</span>
              </div>
              <span className="text-gray-700 font-bold">@{data?.country}</span>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex gap-3 items-center">
                <AiOutlineCompass className="text-gray-500" />
                <span className="text-gray-500">Property Listed</span>
              </div>
              <span className="text-gray-700 font-bold">{loadingData?.length}</span>
            </div>
          </div>
        </div>

        <button
          onClick={createConvo}
          className="w-full py-3 mt-3 text-white bg-secondary rounded-dm">
          Message User
        </button>

        {/* desc */}
        <div className="w-full mt-[4rem]  border-[1px] border-gray-400 p-[2rem] shadow gap-2 items-center  flex flex-col">
          <div className="flex  w-full justify-between">
            <h1 className="text-black font-bold">Description</h1>{" "}
            <Link className="text-primary font-medium">Edit Description</Link>
          </div>
          <p className="text-sm font-bold text-gray-600 mt-[2rem]">
            {data?.desc}
          </p>
        </div>
      </div>

      {/* left side */}
      {loadingProducts ? (
       < PulseLoader/>
      ) : loadingError ? (
        "Loading Error"
      ) : (
        <div className="flex-1 mt-[2rem] md:mt-[0] md:ml-[2rem] h-fit">
          <div className="flex mb-[3rem] items-start justify-start p-2 border shadow">
            <button className="pb-2 border-b-4 border-secondary">
              Active Properties
            </button>
          </div>
          <div className="flex w-full flex-wrap gap-5 md:gap-3 justify-start">
            {loadingData?.map((item) => (
              <Link className="w-full md:w-[250px]" key={item._id} to={`/property/${item._id}`}>
                <div className="w-full p-2  border cursor-pointer shadow h-[300px] flex flex-col ">
                  <img
                    src={item?.coverImage || "/assets/house2.jpg"}
                    className="w-full h-3/4 object-cover"
                    alt=""
                  />
                  <p className="capitalize font-medium  mt-2 text-gray-700">
                   {item?.title}
                  </p>
                </div>
              </Link>
            ))}
            <Link className="w-full" to="/user/12/rental/new">
              <div className="w-full md:w-[250px]  border cursor-pointer  justify-center items-center gap-2 shadow h-[300px] flex flex-col ">
                <div className="p-3 rounded-full bg-primary/20">
                  <AiOutlinePlus className="text-5xl font-extrabold" />
                </div>

                <h1 className="font-bold">Add New Product</h1>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sellerdashboard;
