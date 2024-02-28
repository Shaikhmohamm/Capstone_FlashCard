import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalFlashcarData } from '../Redux/flashCardslice'; // Correct import statement

function ShowFlashCard() {
  // Retrieve data using useSelector
  const flashCardsData = useSelector(state => state.flashcards);

  // Initialize Redux dispatch function
  const dispatch = useDispatch();

  // Fetch local flashcard data when the component mounts
  useEffect(() => {
    dispatch(getLocalFlashcarData()); // Corrected function name
  }, [dispatch]);

  return (
    <div>
      {flashCardsData.length === 0 ? ( // Added ternary operator
        <div className='flex flex-col gap-5 text-center '>
          <h1 className="text-3xl font-bold">No FlashCard Found</h1>
          <Link to="/">Go to Create Flashcard Page</Link>
        </div>
      ) : (
        // Render your flashcards here
        <div>
          <h1>
            Lol
          </h1>
        </div>
      )}
    </div>
  );
}

export default ShowFlashCard;
