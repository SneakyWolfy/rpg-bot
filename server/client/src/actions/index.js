import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = createAsyncThunk(FETCH_USER, async (_, thunk) => {
  const res = await axios.get("/api/user");
  const payload = res.data;

  thunk.dispatch({ type: FETCH_USER, payload });
});
