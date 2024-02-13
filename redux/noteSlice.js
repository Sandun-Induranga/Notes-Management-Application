import { createSlice } from "@reduxjs/toolkit";
import {
  createNote,
  deleteNote,
  readNotes,
} from "../repository/notesRepository";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    selectedImage: "",
  },
  reducers: {
    addNote: (state, action) => {
      createNote({
        title: action.payload.title,
        content: action.payload.content,
        image: action.payload.image,
      });
      state.notes = readNotes();
      alert("Note added successfully");
    },
    deleteNote: (state, action) => {
      deleteNote(action.payload);
      state.notes = readNotes();
      alert("Note deleted successfully");
    },
    fetchNotes: (state, action) => {
      state.notes = readNotes();
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
      console.log(state.selectedImage);
      alert("Image selected successfully");
    },
  },
});

export const { reducer: notesReducer, actions: notesActions } = noteSlice;
