import { useReducer, useState } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import Tab4 from "../components/Tab4";
import Tab5 from "../components/Tab5";
import { INITIAL_STATE, rentalReducer } from "../../reducers/rentalReducer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useNavigate } from "react-router-dom";
import upload from "../utils/upload";
const NewGig = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [tags, setTags] = useState([]);
  const [values, setValues] = useState("");
  const [pageIndex, setpageIndex] = useState(0);
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [state, dispatch] = useReducer(rentalReducer, INITIAL_STATE);

  const addToarray = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (values) {
        dispatch({
          type: "ADD_FEATURE",
          payload: values,
        });
        setValues("");
      }
    }
  };
  console.log(state);
  const handleChange = (e) => {

    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const deleteFromArray = (index) => {
    setTags(tags.filter((item, i) => i !== index));
  };
  const changePage = (e) => {
    if (active === 4) {
      handleSubmit(e);
      return
    }
    setpageIndex((prevIndex) => prevIndex + 1);
    setActive((prevIndex) => prevIndex + 1);
  };
  const handleAmenities = (e) => {
    dispatch({
      type: "CHANGE_AMENITIES",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handlePrices = (e) => {
    dispatch({
      type: "CHANGE_PRICES",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const coverImage = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      console.log(coverImage, images);
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { coverImage, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (property) => {
      return newRequest.post("/property", property);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myProperties"]);
      dispatch({
        type: "CLEAR_STATE", // Add a new action type to clear the state
      });
      navigate("/user/kuipid/dashboard")
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    state.title=''
   
  
  };
  return (
    <div className="pt-[13vh]">
      <ul className="w-full flex justify-evenly border-y border-gray-300 px-1 md:px-[10%] py-3 mx-auto ">
        <li className="flex gap-1 md:gap-3 items-center font-semibold ">
          <div
            className={`md:w-[30px] md:h-[30px] px-1 text-[10px] grid place-content-center text-white ${
              active === 0 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}>
            1
          </div>
          <span
            className={` ${
              active === "1" ? "text-black" : "text-gray-400"
            } text-xs font-light md:font-bold`}>
            Overview
          </span>
          <AiOutlineArrowRight className="text-gray-500 hidden md:flex" />
        </li>
        <li className="flex gap-1 md:gap-3 items-center font-semibold ">
          <div
            className={`md:w-[30px] md:h-[30px] px-1 text-[10px] grid place-content-center text-white ${
              active === 1 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}>
            2
          </div>
          <span
            className={` ${
              active === "2" ? "text-black" : "text-gray-400"
            } text-xs font-light md:font-bold`}>
            Desription
          </span>
          <AiOutlineArrowRight className="text-gray-500 hidden md:flex" />
        </li>
        <li className="flex gap-1 md:gap-3 items-center font-semibold ">
          <div
            className={`md:w-[30px] md:h-[30px] px-1 text-[10px] grid place-content-center text-white ${
              active === 2 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}>
            3
          </div>
          <span
            className={` ${
              active === "3" ? "text-black" : "text-gray-400"
            } text-xs font-light md:font-bold`}>
            Amenities
          </span>
          <AiOutlineArrowRight className="text-gray-500 hidden md:flex" />
        </li>
        <li className="flex gap-1 md:gap-3 items-center font-semibold ">
          <div
            className={`md:w-[30px] md:h-[30px] px-1 text-[10px] grid place-content-center text-white ${
              active === 3 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}>
            4
          </div>
          <span
            className={` ${
              active === "4" ? "text-black" : "text-gray-400"
            } text-xs font-light md:font-bold`}>
            Gallery
          </span>
          <AiOutlineArrowRight className="text-gray-500 hidden md:flex" />
        </li>
        <li className="flex gap-1 md:gap-3 items-center font-semibold ">
          <div
            className={`md:w-[30px] md:h-[30px] px-1 text-[10px] grid place-content-center text-white ${
              active === 4 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}>
            5
          </div>
          <span
            className={` ${
              active === "5" ? "text-black" : "text-gray-400"
            } text-xs font-light md:font-bold`}>
            Pricing
          </span>
          <AiOutlineArrowRight className="text-gray-500 hidden md:flex" />
        </li>
        <button className="px-3 hidden md:flex  py-1 border rounded-md text-black font-bold hover:bg-gray-300 capitalize  text-2xl transition ease-in-out duration-200">
          save
        </button>
      </ul>
      <button className="px-3 mt-[1rem] ml-[1rem] flex md:hidden  py-1 border rounded-md text-black font-bold hover:bg-gray-300 capitalize  text-2xl transition ease-in-out duration-200">
        save
      </button>
      {active === 0 && (
        <Tab1
          tags={tags}
          setTags={setTags}
          setValues={setValues}
          addToarray={addToarray}
          deleteFromArray={deleteFromArray}
          values={values}
          state={state}
          handleChange={handleChange}
        />
      )}
      {active === 1 && <Tab2 state={state} handleChange={handleChange} />}
      {active === 2 && <Tab3 handleAmenities={handleAmenities} state={state} />}
      {active === 3 && (
        <Tab4
          state={state}
          setFiles={setFiles}
          setSingleFile={setSingleFile}
          handleUpload={handleUpload}
        />
      )}
      {active === 4 && <Tab5 state={state} handlePrices={handlePrices} />}
      <div className="w-full flex justify-end px-[3rem] my-[6rem] ">
        {active > 0 && (
          <button
            onClick={() => setActive((p) => p - 1)}
            className="px-5 py-2 h-[50px] mr-[20px] text-white rounded-md hover:bg-black/80 transition-all bg-black">
            Back
          </button>
        )}
        <button
          disabled={(active === 3 && files.length === 0) || uploading}
          onClick={(e) => changePage(e)}
          className={`px-3 md:px-5 py-2 h-[50px] text-sm md:text-base text-white rounded-md hover:bg-secondary/80 transition-all ${
            active === 3 && files.length === 0 ? "bg-gray-300" : "bg-secondary"
          }`}>
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default NewGig;
