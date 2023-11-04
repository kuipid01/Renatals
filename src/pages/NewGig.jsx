import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import Tab4 from "../components/Tab4";
import Tab5 from "../components/Tab5";

const NewGig = () => {
  const [active, setActive] = useState(0);
  const [tags, setTags] = useState([]);
  const [values, setValues] = useState("");
  const [pageIndex, setpageIndex] = useState(0);
  const addToarray = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (values) {
        setTags([...tags, values]);
        setValues(""); // Clear the input field
      }
    }
  };

  const addToTag = () => {
    if (values) {
      setTags([...tags, values]);
      setValues(""); // Clear the input field
    }
  };
  const deleteFromArray = (index) => {
    setTags(tags.filter((item, i) => i !== index));
  };
  const changePage = () => {
    if (active === 4) return
    setpageIndex((prevIndex) => prevIndex + 1);
    setActive((prevIndex) => prevIndex + 1);

  };
  console.log(active);
  return (
    <div className="pt-[7rem]">
      <ul className="w-full flex justify-evenly border-y border-gray-300 px-1 md:px-[10%] py-3 mx-auto ">
        <li className="flex gap-3 items-center font-semibold ">
          <div
            className={`w-[30px] h-[30px] grid place-content-center text-white ${
              active === 0 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}
          >
            1
          </div>
          <span
            className={` ${
              active === "1" ? "text-black" : "text-gray-400"
            } font-bold`}
          >
            Overview
          </span>
          <AiOutlineArrowRight className="text-gray-500" />
        </li>
        <li className="flex gap-3 items-center font-semibold ">
          <div
            className={`w-[30px] h-[30px] grid place-content-center text-white ${
              active === 1 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}
          >
            2
          </div>
          <span
            className={` ${
              active === "2" ? "text-black" : "text-gray-400"
            } font-bold`}
          >
            Desription
          </span>
          <AiOutlineArrowRight className="text-gray-500" />
        </li>
        <li className="flex gap-3 items-center font-semibold ">
          <div
            className={`w-[30px] h-[30px] grid place-content-center text-white ${
              active === 2 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}
          >
            3
          </div>
          <span
            className={` ${
              active === "3" ? "text-black" : "text-gray-400"
            } font-bold`}
          >
            Amenities
          </span>
          <AiOutlineArrowRight className="text-gray-500" />
        </li>
        <li className="flex gap-3 items-center font-semibold ">
          <div
            className={`w-[30px] h-[30px] grid place-content-center text-white ${
              active === 3 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}
          >
            4
          </div>
          <span
            className={` ${
              active === "4" ? "text-black" : "text-gray-400"
            } font-bold`}
          >
            Gallery
          </span>
          <AiOutlineArrowRight className="text-gray-500" />
        </li>
        <li className="flex gap-3 items-center font-semibold ">
          <div
            className={`w-[30px] h-[30px] grid place-content-center text-white ${
              active === 4 ? "bg-primary " : "bg-gray-300"
            } rounded-full`}
          >
            5
          </div>
          <span
            className={` ${
              active === "5" ? "text-black" : "text-gray-400"
            } font-bold`}
          >
            Pricing
          </span>
          <AiOutlineArrowRight className="text-gray-500" />
        </li>
        <button className="px-3  py-1 border rounded-md text-black font-bold hover:bg-gray-300 capitalize  text-2xl transition ease-in-out duration-200">
          save
        </button>
      </ul>

      {active === 0 && (
        <Tab1
          tags={tags}
          setTags={setTags}
          setValues={setValues}
          addToarray={addToarray}
          deleteFromArray={deleteFromArray}
          values={values}
        />
      )}
      {active === 1 && <Tab2 />}
      {active === 2 && <Tab3 />}
      {active === 3 && <Tab4 />}
      {active === 4 && <Tab5 />}
      <div className="w-full flex justify-end px-[3rem] my-[6rem] ">
        {active > 0 && (
          <button
            onClick={() => setActive((p) => p - 1)}
            className="px-5 py-2 h-[50px] mr-[20px] text-white rounded-md hover:bg-black/80 transition-all bg-black"
          >
            Back
          </button>
        )}
        <button
          onClick={() => changePage()}
          className="px-5 py-2 h-[50px] text-white rounded-md hover:bg-secondary/80 transition-all bg-secondary"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default NewGig;
