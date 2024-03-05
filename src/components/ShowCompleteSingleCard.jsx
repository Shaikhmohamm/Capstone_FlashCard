import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import CardDetails from './CardDetails';
import RightSidebar from './RightSidebar';

const ShowCompleteSingleCard = () => {
  // Getting the data using useSelector hook
  const data = useSelector((state) => state.flashcards);
  const { id } = useParams();

  // To match the id
  const idToMatch = parseInt(id);
  const currentCard = data.find((card) => card.id === idToMatch);
  console.log(currentCard)

  // Destructuring to avoid complexity
  const { groupinfo, terminfo } = currentCard.flashCardData;

  // useState to handle currentcard
  const [selectedCard, setSelectedCard] = useState(currentCard);

  // 
  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };


  return (
    <div>
      <div className='text-center'>
        <h1 className="text-2xl font-bold mb-4">{groupinfo.groupname}</h1>
        <p className="mb-4">{groupinfo.groupdescription}</p>
      </div>
      <div className="flex gap-5 h-[60vh]">
        <Sidebar cards={terminfo} onSelectCard={handleSelectCard} selectedCard={selectedCard} />
        <CardDetails terminfo={terminfo} selectedCard={selectedCard} />
        <RightSidebar currentCard={currentCard} />
      </div>
    </div>
  );
};

export default ShowCompleteSingleCard;
