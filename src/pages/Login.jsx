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
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
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
        <form
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
        <p className="w-full text-center text-white md:text-black text-base">
          Don't have an account{" "}
          <Link to="/register " className="font-bold  text-lg text-primary">
            {" "}
            Sign Up now
          </Link>{" "}
        </p>
        <button onClick={console.log("test")} className="gsi-material-button">
          <div className="gsi-material-button-state"></div>
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: "block" }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className="gsi-material-button-contents">
              Sign in with Google
            </span>
            <span style={{ display: "none" }}>Sign in with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
