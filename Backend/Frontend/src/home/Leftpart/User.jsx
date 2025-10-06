import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

export default function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-6 py-2 hover:bg-slate-700 duration-300 cursor-pointer items-center">
        
       
        <div className="relative w-14 h-14 flex-shrink-0">
          <div className="bg-neutral text-neutral-content w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-xl">AI</span>
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></div>
          )}
        </div>

        
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span className="text-sm">{user.email}</span>
        </div>
      </div>
    </div>
  );
}
