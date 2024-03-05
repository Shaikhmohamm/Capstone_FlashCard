import React, { useState, useEffect } from 'react';

const CardDetails = ({ terminfo, selectedCard }) => {
  const [currentTermIndex, setCurrentTermIndex] = useState(0);

  useEffect(() => {
    // Reset currentTermIndex when selectedCard changes
    const index = terminfo.findIndex(term => term === selectedCard);
    if (index !== -1) {
      setCurrentTermIndex(index);
    } else {
      setCurrentTermIndex(0);
    }
  }, [selectedCard, terminfo]);

  const nextTerm = () => {
    if (currentTermIndex < terminfo.length - 1) {
      setCurrentTermIndex(currentTermIndex + 1);
    } else {
      setCurrentTermIndex(0);
    }
  };

  const prevTerm = () => {
    if (currentTermIndex > 0) {
      setCurrentTermIndex(currentTermIndex - 1);
    } else {
      setCurrentTermIndex(terminfo.length - 1);
    }
  };

return (
  <div className="bg-white p-4 w-1/2">
  <div className="text-center">
    <p className="text-gray-700">{terminfo[currentTermIndex].termdescription}</p>
    {terminfo[currentTermIndex].termimage && (
      <div className="mt-5">
        <img
          src={terminfo[currentTermIndex].termimage}
          alt={terminfo[currentTermIndex].termname}
          className="mx-auto w-3/4 rounded-lg"
        />
      </div>
    )}
  </div>
  <div className="flex justify-center mt-4">
    <button onClick={prevTerm} className="px-2 py-1 mr-2 bg-gray-300 rounded-lg">
      {"<"}
    </button>
    <button onClick={nextTerm} className="px-2 py-1 bg-gray-300 rounded-lg">
      {">"}
    </button>
  </div>
</div>

);
};

export default CardDetails;
