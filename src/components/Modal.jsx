import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { RiShareLine } from 'react-icons/ri';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPageLink, setCurrentPageLink] = useState(window.location.href);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentPageLink).then(() => {
      alert('Link copied to clipboard!');
    }).catch((error) => {
      console.error('Error copying link: ', error);
    });
  };

  return (
    <div>
      <div className="text-center h-[25vh]">
        <h1>Share</h1>
        <div className="flex justify-center">
          <h1>Link</h1>
          <input type="text" value={currentPageLink} readOnly />
          <IoCopyOutline className="text-2xl cursor-pointer" onClick={copyLink} />
          <RiShareLine className="text-2xl cursor-pointer" onClick={openModal} />
        </div>
      </div>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg transform transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Share this link</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <input type="text" value={currentPageLink} readOnly className="w-full mb-2 bg-gray-100 px-3 py-1 rounded" />
            <div className="flex justify-around items-center">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageLink)}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-4xl text-blue-700 hover:text-blue-900 cursor-pointer" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentPageLink)}`} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-4xl text-blue-500 hover:text-blue-700 cursor-pointer" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentPageLink)}`} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-4xl text-blue-800 hover:text-blue-900 cursor-pointer" />
              </a>
            </div>
            <button onClick={copyLink} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Copy Link</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
