import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLocalFlashcardData } from "../Redux/flashcardReducers";
import ShowAllFlashCard from "../components/ShowAllFlashCard";

const ShowFlashCard = () => {
  // Retrieve flashcard data from Redux store
  const flashCardData = useSelector((state) => state.flashCard) || [];
  console.log("Flash Card Data:", flashCardData);


  // Initialize Redux dispatch function
  const dispatch = useDispatch();

  // Fetch local flashcard data when the component mounts
  useEffect(() => {
    dispatch(getLocalFlashcardData());
  }, [dispatch]);

  return (
    <div className="mx-auto w-11/12 h-[82vh] flex flex-wrap gap-10 justify-center py-3 overflow-y-scroll overflow-x-hidden scrollbar-thumb-red-500 scrollbar-thin scrollbar-thumb-rounded-full">
      {/* Display a message when no flashcards are found */}
      {flashCardData.length === 0 && (
        <div className="w-full h-2/3 flex flex-col gap-6 justify-center items-center">
          <h1 className="text-3xl font-bold">No FlashCard Found</h1>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to={"/"}>
            Go to Create Flashcard Page
          </Link>
        </div>
      )}

      {/* Render flashcards using ShowAllFlashCard component */}
      {flashCardData.length > 0 && (
        <div>
          {/* Additional content for ShowFlashCard if needed */}
          <h1>Show Flash Card Component</h1>
          {/* Render ShowAllFlashCard */}
          <ShowAllFlashCard />
        </div>
      )}
    </div>
  );
};

export default ShowFlashCard;
