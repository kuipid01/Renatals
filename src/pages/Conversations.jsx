import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import Messages from "../components/Messages";
import { LuMessagesSquare } from "react-icons/lu";
import { FcEmptyTrash } from "react-icons/fc";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import newRequest from "../utils/newRequest";
const Conversations = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [conversationid, setConversationid] = useState("");
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });
  const mutation2 = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });
  const {
    isLoading: messagesLoading,
    error: messagesError,
    data: messagesData,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery({
    queryKey: [conversationid || "Messages"],
    queryFn: () =>
      newRequest.get(`/messages/${conversationid}`).then((res) => {
        return res.data;
      }),
    enabled: !!conversationid,
  });
  console.log(messagesData, isRefetching, data);
  const handleRead = (conversationid) => {
    refetch();
    mutation.mutate(conversationid);
    setConversationid(conversationid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation2.mutate({
      conversationId: conversationid,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="w-full text-gray-800 p-5 md:px-[5rem] pt-[9rem] flex md:flex-row flex-col gap-5 justify-between">
      <div className="md:w-[40%] w-full mr-[2rem] min-h-screen h-fit flex gap-3 flex-col">
        <div className="flex h-[70px] justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="text-base lg:text-xl font-medium ">
              All Conversation{" "}
            </span>
            <AiOutlineDown className="text-xs cursor-pointer" />
          </div>
          <AiOutlineSearch className="text-3xl cursor-pointer" />
        </div>
        {data?.length !== 0 ? (
          <div className="w-full flex-1 rounded-md gap-3 pt-3 shadow border border-black flex flex-col items-center">
            <Messages
              setConversationid={setConversationid}
              conversationid={conversationid}
              handleRead={handleRead}
              data={data}
            />
          </div>
        ) : (
          <div className="w-full flex-1 rounded-md  shadow border border-black flex flex-col justify-center items-center">
            <LuMessagesSquare className="text-6xl" />
            <p className="lg:text-3xl ext-lg text-gray-500 font-medium">
              No Conversations{" "}
            </p>
          </div>
        )}
      </div>
      {conversationid ? (
        <div className="flex-1 w-full min-h-screen h-fit gap-5  rounded-md border border-black shadow flex flex-col justify-center items-center">
          {messagesLoading || isRefetching ? (
            "loading"
          ) : messagesError || isRefetchError ? (
            "error"
          ) : (
            <div className="flex w-full item-end h-full  flex-col">
              {messagesData?.map((m) => (
                <div
                  className={
                    m.userId === currentUser._id
                      ? " w-full justify-end flex items-end p-2"
                      : "bg-white w-fit justify-start flex items-start p-2"
                  }
                  key={m._id}>
                  <div
                    className={`w-fit flex items-center gap-2 p-2 ${
                      m.userId === currentUser._id
                        ? "bg-green-500/20"
                        : "bg-gray-200"
                    } rounded-sm`}>
                    <img
                      src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    <p className="">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <form
            className="flex p-3 flex-col w-full gap-3"
            onSubmit={handleSubmit}>
            <textarea
              className="border border-gray-300 p-1"
              type="text"
              placeholder="write a message"
            />
            <button className="w-full py-2 bg-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      ) : (
        <div className="flex-1 w-full min-h-screen h-fit gap-5  rounded-md border border-black shadow flex flex-col justify-center items-center">
          <FcEmptyTrash className="text-[200px] " />

          <p className="lg:font-bold font-medium text-gray-500">
            Click on a conversation to chat
          </p>
        </div>
      )}
    </div>
  );
};

export default Conversations;
