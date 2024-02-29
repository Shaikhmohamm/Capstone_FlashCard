import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  flashCards: [], // Initialize as an array
};

const flashCardSlice = createSlice({
  name: "flashCard",
  initialState,
  reducers: {
    addFlashCardData: (state, action) => {
      state.flashCards.push(action.payload);
      localStorage.setItem("flashcards", JSON.stringify(state.flashCards));
    },
    getLocalFlashcardData: () => {
      const data = JSON.parse(localStorage.getItem("flashcards"));
      if (data) {
        return { flashCards: data };
      }
      return initialState; // Return initial state if data not found
    },
    deleteFlashcard: (state, action) => {
      const data = JSON.parse(localStorage.getItem("flashcards"));
      if (data) {
        const filterFlashCards = data.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem("flashcards", JSON.stringify(filterFlashCards));
        toast.success("Flashcard deleted successfully");
        return { flashCards: filterFlashCards };
      }
      return state; // Return current state if data not found
    },
  },
});

export const { addFlashCardData, getLocalFlashcardData, deleteFlashcard } =
  flashCardSlice.actions;

export default flashCardSlice.reducer;
