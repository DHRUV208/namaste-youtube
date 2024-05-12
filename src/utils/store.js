import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import chatSlice from "./slices/chatSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice
  },
});

export default store;
