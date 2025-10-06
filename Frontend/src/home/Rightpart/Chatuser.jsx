import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

export default function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  const isOnline =
    selectedConversation?._id && onlineUsers.includes(selectedConversation._id);

  return (
    <div className="flex space-x-3 items-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 px-4">
      <div className="relative w-14 h-14 flex-shrink-0">
        <div className="bg-neutral text-neutral-content w-14 h-14 flex items-center justify-center rounded-full">
          <span className="text-xl">AI</span>
        </div>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></div>
        )}
      </div>

      <div>
        <h1 className="text-xl">{selectedConversation?.fullname}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation?._id)}
        </span>
      </div>
    </div>
  );
}
