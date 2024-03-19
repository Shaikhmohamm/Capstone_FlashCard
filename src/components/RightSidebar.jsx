import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Modal from './Modal'; // Import the Modal component
import { GoShare } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PiPrinter } from "react-icons/pi";




const RightSidebar = ({ currentCard }) => {

  // Method to generate PDF onlclick
  const generatePDF = (groupinfo, terminfo) => {
    const pdf = new jsPDF();

    pdf.text(20, 20, "Flash Cards PDF");

    // Add group image
    const imgData = groupinfo.groupimage;
    pdf.addImage(imgData, 'JPEG', 15, 50, 40, 40);

    // Add group information
    pdf.text(20, 30, `Group Name: ${groupinfo.groupname}`);
    pdf.text(20, 40, `Group Description: ${groupinfo.groupdescription}`);

    // Add table for terminfo
    pdf.autoTable({
      startY: 100,
      head: [["Term Name", "Description"]],
      body: terminfo.map((term) => [
        term.termname,
        term.termdescription,
      ]),
      theme: "grid",
      styles: { halign: "center" },
      headStyles: { fillColor: [255, 31, 31] },
      alternateRowStyles: { fillColor: [255, 230, 230] },
      tableLineColor: [224, 0, 0],
      tableLineWidth: 0.1,
    });

    return pdf;
  };

   // Method to download file onlclick
  const handleDownload = () => {
    const { groupinfo, terminfo } = currentCard.flashCardData;
    const pdf = generatePDF(groupinfo, terminfo);
    pdf.save('flashcards.pdf');
  };

// Method to Print file onlclick
  const handlePrint = () => {
    const { groupinfo, terminfo } = currentCard.flashCardData;
    const pdf = generatePDF(groupinfo, terminfo);
    window.open(pdf.output('bloburl'), '_blank');
  };

  const [showModal, setShowModal] = useState(false);

  const openModel = ()=>{
    setShowModal(true)
  }


  return (
    <div className="w-full md:w-1/6 mt-12 md:mt-1 flex flex-row md:flex md:flex-col md:gap-8 justify-center bg-red-50 rounded-lg ">
      <button data-testid = 'test-model' onClick={openModel}
        className="flex justify-center bg-white font-bold md:w-full mx-1 md:mx-3 p-4 rounded-xl 
        transition-all transition-duration-500 ease-in hover:bg-red-500 hover:text-white">
        <GoShare className='hidden md:block mr-2 text-xl' />
        Share
      </button>

      <button
      data-testid = 'test-download-btn'
      className="flex justify-center bg-white font-bold  md:w-full mx-1 md:mx-3 p-4 rounded-xl 
      transition-all transition-duration-500 ease-in hover:bg-red-500 hover:text-white"
      onClick={handleDownload}>
        <IoCloudDownloadOutline className='hidden md:block mr-2 text-xl'/>
        Download
      </button>

      <button onClick={handlePrint}
       data-testid = 'test-print-btn'
        className="flex justify-center bg-white font-bold  md:w-full mx-1 md:mx-3 p-4 rounded-xl 
      transition-all transition-duration-500 ease-in hover:bg-red-500 hover:text-white">
        <PiPrinter className='hidden md:block mr-2 text-xl' />
        Print
      </button>
      {/* Modal component */}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default RightSidebar;
