import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  data_setting: [],
};

// Slice creation
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setDataSetting(state, action) {
      state.data_setting = action.payload;
    },
  },
});

export const { setDataSetting } = settingSlice.actions;
export default settingSlice.reducer;
