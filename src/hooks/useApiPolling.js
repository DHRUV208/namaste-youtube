import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slices/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const useApiPolling = () => {
  const dispatch = useDispatch();
//   const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName,
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
};

export default useApiPolling;
