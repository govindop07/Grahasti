import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../lib/axios";

function Chat({chats}) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  console.log(chats);

  const handleOpenChat = async (_id, receiver)=>{
    try {
      const res = await axiosInstance.get("/chats/"+_id);
      setChat({ ...res, receiver });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col h-[90vh] p-4 bg-gray-50">
      <div className="overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>

        {
          chats.map((c) => (
          <div
            className="flex items-center cursor-pointer gap-4 mb-4 p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{
              backgroundColor: c.seenBy.includes(currentUser._id)? "white": "#fecd514e"
            }}
            key={c._id}
            onClick={() => handleOpenChat(c._id, c.receiver)}
          >
            <img
              src={c.receiver.avatar || "noavatar.jpg"}
              alt="User"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-800">{c.receiver.username}</span>
              <p className="text-sm text-gray-600 truncate">
                {c.lastMessage}
              </p>
            </div>
          </div>
          ))
        }
      </div>

      {chat && (
        <div className="flex flex-col h-[92%] flex-grow bg-white border-t-2 border-gray-100 shadow-md rounded-lg p-2">
          <div className="flex justify-between items-center h-24 px-2 -m-2 mb-1 bg-amber-300 rounded-sm shadow-gray-300 shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={ chat.receiver.avatar || "noavatar.jpg" }
                alt="User"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-medium text-lg text-gray-800">{chat.receiver.username}</span>
            </div>
            <span
              onClick={() => setChat(false)}
              className="text-gray-500 cursor-pointer hover:text-gray-800 text-lg font-bold"
            >
              X
            </span>
          </div>

          <div className="flex flex-col flex-grow overflow-y-auto space-y-4 mb-4">
            {chat.messages.map((message) => (
              <div
                className={`flex flex-col ${
                  message.userId === currentUser._id ? "self-start" : "self-end text-right"
                }`}
                key={message._id}
              >
                <p
                  className={`py-2 px-4 rounded-lg ${
                    currentUser._id === message.userId
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {message.text}
                </p>
                <span className="text-xs text-gray-500 mt-1">
                  1 hour ago
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              placeholder="Type a message..."
              className="flex-grow border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <button className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
