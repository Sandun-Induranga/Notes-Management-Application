import { createSlice } from "@reduxjs/toolkit";
import {
  createNote,
  deleteNote,
  updateNote,
  readNotes,
} from "../repository/notesRepository";

export const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: [],
    selectedImage: "",
    nickname: "",
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
    updateNotes: (state, action) => {
      updateNote({
        title: action.payload.title,
        content: action.payload.content,
        image: action.payload.image,
      });
      state.notes = readNotes();
      alert("Note updated successfully");
    },
    deleteNote: (state, action) => {
      deleteNote(action.payload);
      state.notes = readNotes();
      alert("Note deleted successfully");
    },
    fetchNotes: (state, action) => {
      readNotes();
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { reducer: notesReducer, actions: notesActions } = noteSlice;
