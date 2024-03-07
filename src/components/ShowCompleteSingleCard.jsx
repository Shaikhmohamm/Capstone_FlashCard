import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import CardDetails from './CardDetails';
import RightSidebar from './RightSidebar';
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ShowCompleteSingleCard = () => {
  // Getting the data using useSelector hook
  const data = useSelector((state) => state.flashcards);
  const { id } = useParams();

  // To match the id
  const idToMatch = parseInt(id);
  const currentCard = data.find((card) => card.id === idToMatch);

  // Destructuring to get groupinfo, terminfo
  const { groupinfo, terminfo } = currentCard.flashCardData;


  // for showing active term
  const [active, setActive] = useState(0)


  return (
    <div>
      <div className='flex'>
        <Link to='/showflashcard'>
          <MdOutlineKeyboardBackspace className='mt-2 text-slate-500 text-4xl hover:text-red-500' />
        </Link>
        <div className='ml-5'>
          <h1 className="text-3xl font-bold mb-4">{groupinfo.groupname}</h1>
          <p className="mb-4 block">{groupinfo.groupdescription}</p>
        </div>
      </div>
      <div className="flex gap-5 h-[60vh]">
        <Sidebar
          terminfo={terminfo}
          active={active}
          setActive={setActive}         
        />
        <CardDetails
          terminfo={terminfo}
          active={active}
          setActive={setActive} 
        />
        <RightSidebar currentCard={currentCard} />
      </div>
    </div>
  );
};

export default ShowCompleteSingleCard;
