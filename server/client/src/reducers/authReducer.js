import { createReducer } from "@reduxjs/toolkit";
import { FETCH_USER } from "../actions/types";

const authReducer = createReducer(null, (builder) => {
  builder.addCase(FETCH_USER, (state, action) => {
    return action.payload || false;
  });
});

export default authReducer;
