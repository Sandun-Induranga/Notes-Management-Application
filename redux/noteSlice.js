import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    selectedImage: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    fetchNotes: (state, action) => {
      state.notes = action.payload;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
      console.log(state.selectedImage);
    },
  },
});

export const { reducer: notesReducer, actions: notesActions } = noteSlice;
