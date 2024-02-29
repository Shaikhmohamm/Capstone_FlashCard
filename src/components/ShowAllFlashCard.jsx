import React from 'react';
import RenderCard from './RenderCard';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function ShowAllFlashCard() {
  // Fetching flash card data from Redux store
  const allFlashCardData = useSelector((state) => state.flashCard) || [];

  // State to determine whether to show all cards or a subset
  const [showAllCards, setShowAllCards] = useState(false);

  // Check if allFlashCardData is defined before slicing
  const sliceAllFlashCardData = allFlashCardData
    ? (showAllCards ? allFlashCardData : allFlashCardData.slice(0, 6))
    : [];

  return (
    <div className="w-full h-full flex flex-wrap lg:justify-center">
      <h1>This will be display when there is a flash card</h1>
      {/* Mapping over the sliced flash card data and rendering each card */}
      {sliceAllFlashCardData.map((data, index) => (
        <RenderCard key={data.id} data={data} index={index}></RenderCard>
      ))}

      {/* Button to toggle between showing all cards and a subset */}
      <button
        onClick={() => setShowAllCards(!showAllCards)}
        className={
          "w-full lg:w-11/12 p-4 text-lg md:text-right text-red-500 hover:text-red-700 font-bold " +
          (allFlashCardData && allFlashCardData.length <= 6 ? "hidden" : "")
        }>
        {showAllCards ? "See Less" : "See All"}
      </button>
    </div>
  );
};

export default ShowAllFlashCard;
