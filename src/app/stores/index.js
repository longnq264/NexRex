"use client";
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducer";

const reducer = {
  todos: todoSlice,
};

export const store = configureStore({
  reducer,
});
