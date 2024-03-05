import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Modal from './Modal'; // Import the Modal component

const RightSidebar = ({ currentCard }) => {

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

  const handleDownload = () => {
    const { groupinfo, terminfo } = currentCard.flashCardData;
    const pdf = generatePDF(groupinfo, terminfo);
    pdf.save('flashcards.pdf');
  };

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
    <div className="flex flex-col items-center">
      <button onClick={openModel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
        Share
      </button>
      <button onClick={handleDownload} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2">
        Download
      </button>
      <button onClick={handlePrint} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-2">
        Print
      </button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default RightSidebar;
