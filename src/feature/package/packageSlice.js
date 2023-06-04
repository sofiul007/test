import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  package:undefined,
};

const packageSlice = createSlice({
  name: "packageSlice",
  initialState,
  reducers: {
    bookedPackage: (state, action) => {
      state.package = action.payload;
    
    },
  },
});
export const { bookedPackage } = packageSlice.actions;
export default packageSlice.reducer;
