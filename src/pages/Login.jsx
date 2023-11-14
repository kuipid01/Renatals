import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import newRequest  from '../utils/newRequest'
import PulseLoader from "../components/PulseLoader";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  })
  .required();

const Login = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
 
    try {
      setLoading(true)
      const res = await newRequest.post("/auth/login", { email, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      setLoading(false)
      navigate("/")
    } catch (err) {
     
      setError('An Error occured Try again')
    }
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  return (
    <div className="w-full relative h-screen flex justify-center items-center md:justify-between">
      <AiOutlineArrowLeft onClick={() => navigate(-1)} className='absolute z-[9999] left-4 top-4  cursor-pointer  text-3xl font-semibold text-secondary'/>
      <div className="w-full absolute top-0 left-0 md:relative md:w-1/2  flex justify-center items-center h-full ">
        <img
          src="/assets/house1.jpg"
          className="w-full h-full absolute top-0 left-0 object-cover object-center"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full bg-black h-full opacity-80"></div>
        <div className="hidden md:flex items-center justify-center relative z-30 flex-col gap-5">
          <img src="/assets/logo.png" className="w-3/4 h-auto" alt="" />
        </div>
      </div>
      <div className="flex w-[90%] relative md:w-1/2 flex-col gap-10  justify-center items-center">
        <h1 className="uppercase text-white md:text-primary text-5xl font-bold">
          Sign In
        </h1>
        {
          loading ? <PulseLoader/> : <form
          className="flex w-full md:w-3/5 flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-full relative">
              <AiOutlineMail className="absolute left-2  text-white md:text-primary top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="p-2 pl-[30px]  text-white md:text-gray-500  bg-gray-300/20 border-2 border-white rounded-md md:rounded-[0] py-2 px-2 md:border-b-2 w-full md:border-gray-400 outline-none"
                {...register("email")}
              />
            </div>

            {errors.email && (
              <p className="w-full p-1 capitalize text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-full relative">
              <AiOutlineLock className="absolute left-2  text-white md:text-primary top-1/2 transform -translate-y-1/2" />
              <input
                type={!passwordVisible ? "password" : "text"}
                id="password"
                name="password"
                {...register("password")}
                placeholder="Enter Password"
                className="p-2 pl-[30px] text-white md:text-gray-500  bg-gray-300/20 border-2 py-2 border-white rounded-md md:rounded-[0] px-2 md:border-b-2 w-full md:border-gray-400 outline-none"
              />
              {passwordVisible ? (
                <AiOutlineEye
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute text-white md:text-black right-2 top-1/2 cursor-pointer transform -translate-y-1/2"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute text-white md:text-black right-2 top-1/2 cursor-pointer transform -translate-y-1/2"
                />
              )}
            </div>

            {errors.password && (
              <p className="w-full p-1 capitalize text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            className="w-full bg-secondary text-white py-2 h-[50px] md:h-auto rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
        }
        
        <p className="w-full text-center text-white md:text-black text-base">
          Don't have an account{" "}
          <Link to="/register " className="font-bold  text-lg text-primary">
            {" "}
            Sign Up now
          </Link>{" "}
        </p>
       <p>{error}</p>
      </div>
    </div>
  );
};

export default Login;
