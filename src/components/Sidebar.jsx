import React from 'react';

const Sidebar = ({ cards, onSelectCard, selectedCard }) => {
  return (
    <div className="md:w-1/6 mt-5 bg-white p-4 md-rounded ">
      <h2 className="text-xl font-bold mb-4">Flash Cards</h2>
      <ul>
        {cards.map((term, index) => (
          <li
            key={index}
            onClick={() => onSelectCard(term)}
            className={`cursor-pointer rounded-lg py-1 px-2 mb-2 ${selectedCard === term ? 'bg-gray-300' : ''}`}
          >
            {term.termname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
