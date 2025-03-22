import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="flex flex-col h-[90vh] p-4 bg-gray-50">
      {/* Messages List */}
      <div className=" overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Messages</h1>
        {[...Array(6)].map((_, index) => (
          <div
            className="flex items-center gap-4 mb-4 p-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            key={index}
          >
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-800">John Doe</span>
              <p className="text-sm text-gray-600 truncate">
                Lorem ipsum dolor sit amet...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Box */}
      {chat && (
        <div className="flex flex-col h-1/2 flex-grow bg-white border-t-2 border-gray-100 shadow-md rounded-lg p-2">
          {/* Chat Header */}
          <div className="flex justify-between">
            <div className="flex items-center gap-4 pb-2">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-medium text-lg text-gray-800">John Doe</span>
            </div>
            <span
              onClick={() => setChat(false)}
              className="text-gray-500 cursor-pointer hover:text-gray-800 text-lg font-bold"
            >
              X
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex flex-col flex-grow overflow-y-auto space-y-4 mb-4">
            {[...Array(10)].map((_, index) => (
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "self-start" : "self-end text-right"
                }`}
                key={index}
              >
                <p
                  className={`py-2 px-4 rounded-lg ${
                    index % 2 === 0
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  Lorem ipsum dolor sit amet
                </p>
                <span className="text-xs text-gray-500 mt-1">
                  1 hour ago
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex items-center gap-2">
            <input
              placeholder="Type a message..."
              className="flex-grow border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
