// Messages Component
import React from "react";

const Messages = ({ data,handleRead, setConversationid }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  return (
    <>
      {data?.map((message) => (
        <div
          key={message._id}
          className={
            ((currentUser.isSeller && !message.readBySeller) ||
              (!currentUser.isSeller && !message.readByBuyer)) &&
            "flex w-full hover:bg-gray-200 transition-all cursor-pointer bg-gray-400 p-5 items-center gap-3"
          }
          style={{ border: "solid 1px black", width: "100%", padding: "0 10px", cursor: "pointer" }}
          onClick={() => { handleRead, setConversationid(message.id) } }
        >
          <img
            src="/assets/house1.jpg"
            className="w-[50px] h-[50px] rounded-full object-cover "
            alt=""
          />
          <div className="flex flex-col items-start">
            <h1 className="text-light text-gray-300">
              {(currentUser?.isSeller ? message?.buyerId : message?.sellerId).slice(0, 15)}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Messages;
