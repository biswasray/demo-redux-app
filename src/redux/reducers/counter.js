import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase(state) {
      return { count: state.count+1 }
    },
    decrease(state) {
      return {
        count: state.count - 1,
      };
    },
    increase_(state,action){
      return {
        count: state.count + action.payload,
      };
    },
    decrease_(state,action){
      return {
        count: state.count - action.payload,
      };
    }
  }
});

export const {increase,decrease,increase_,decrease_} = countSlice.actions;
export default countSlice.reducer;
