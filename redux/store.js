import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export const useAppDispatch = () => useDispatch();
export default store;
