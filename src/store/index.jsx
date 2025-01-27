// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./reducers/setting"; // Import your reducer

const store = configureStore({
  reducer: {
    setting: settingReducer, // Add your reducers here
  },
});

export default store; // Ensure the store is exported correctly
