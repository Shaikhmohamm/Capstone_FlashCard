import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateFlashCard from './pages/CreateFlashCard';
import ShowFlashCard from './pages/ShowFlashCard';
import ShowAllFlashCard from './components/ShowAllFlashCard';
import ShowCompleteSingleCard from './components/ShowCompleteSingleCard'; // Import the component
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
   <div className='bg-red-50 h-screen w-screen'>
    <Header />
      <Toaster/>
      <Routes>
        <Route path="/" element={<CreateFlashCard />} />
        <Route path="/showflashcard" element={<ShowFlashCard />}>
          <Route index element={<ShowAllFlashCard />} />
          <Route path=":id" element={<ShowCompleteSingleCard />} /> {/* Route for ShowCompleteSingleCard */}
        </Route>
      </Routes>
   </div>
  )
}

export default App;
