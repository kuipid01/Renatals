import React, { useState } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import Messages from "../components/Messages";
import { LuMessagesSquare } from "react-icons/lu";
import { FcEmptyTrash } from "react-icons/fc";
const Conversations = () => {
  const [messages, setMessage] = useState([]);
console.log(messages)
  return (
    <div className="w-full text-gray-800 p-5 md:px-[5rem] pt-[9rem] flex md:flex-row flex-col justify-between">
      <div className="md:w-[25%] w-full mr-[2rem] min-h-screen h-fit flex gap-3 flex-col">
        <div className="flex h-[70px] justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="text-xl font-medium ">All Conversation </span>
            <AiOutlineDown />
          </div>
          <AiOutlineSearch className="text-3xl" />
        </div>
        {messages.length ? (
          <Messages />
        ) : (
          <div className="w-full flex-1 rounded-md border shadow flex flex-col justify-center items-center">
            <LuMessagesSquare className="text-6xl" />
            <p className="text-3xl text-gray-500 font-medium">No Conversations </p>
          </div>
        )}
      </div>
      {messages.length ? (
        <Messages />
      ) : (
        <div className="flex-1 w-full min-h-screen h-fit gap-5  rounded-md border shadow flex flex-col justify-center items-center">
          <FcEmptyTrash className="text-[200px] " />
          <p className="text-gray-800 text-xl">Empty Inbox</p>
          <p className="font-bold text-gray-500">
            You haven’t started any conversations yet, but when you do, you’ll
            find them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Conversations;
