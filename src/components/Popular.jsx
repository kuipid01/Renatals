import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import getCurrentUser from "../utils/getCurrentUser";

import PlaceCard from "./PlaceholderCard";
const Popular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const currentUser = getCurrentUser();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["property"],
    queryFn: () =>
      newRequest.get(`/property`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  return (
    <motion.div className="flex py-6 min-h-screen flex-col items-center ">
      <small ref={ref} className="text-gray tracking-wider uppercase">
        Best Choice
      </small>
      <motion.h1
        style={{
          transform: isInView ? "none" : "translateY(-10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
        className="text-3xl md:text-5xl text-secondary">
        Popular Properties
      </motion.h1>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="flex w-full my-6 p-3 md:p-8 flex-wrap justify-center gap-6">
        {isLoading
          ? [0, 2, 3, 4].map((item) => <PlaceCard key={item} />) : error ? 'An error Occured' 
          : data?.slice(0,50).map((item) => <Card item={item} key={item._id} />)}
      </motion.div>
    </motion.div>
  );
};

export default Popular;
