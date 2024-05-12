import { useDispatch, useSelector } from "react-redux";
import useApiPolling from "../hooks/useApiPolling";
import ChatMessage from "./ChatMessage";
import { useState } from "react";
import { addMessage } from "../utils/slices/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  const disptach = useDispatch();
  useApiPolling();
  return (
    <>
      <div className="ml-2 w-full h-[600px] bg-slate-100 rounded-lg p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border flex border-black rounded-lg"
        onSubmit={(e) => {
            e.preventDefault();
            disptach(addMessage({
                name: "Akshay SAINI",
                message: liveMessage
            }));
            setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-10/12"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            // e.preventDefault();
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
