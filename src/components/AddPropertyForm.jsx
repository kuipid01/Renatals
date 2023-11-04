import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();
const AddPropertyForm = () => {
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
  return (
    <div className=" min-h-screen w-full flex justify-center items-center">
      <form className="w-1/2 h-fit p-3 " onSubmit={handleSubmit(onSubmit)} action="">
        <div className="flex text-gray-300 gap-2">
          <label htmlFor="propertyname">Property name</label>
          <input type="text" className="p-1  bg-transparent border-b border-gray-400" placeholder="Property Name" />
        </div>
      </form>
    </div>
  );
};

export default AddPropertyForm;
