import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateFlashCard from './pages/CreateFlashCard';
import ShowFlashCard from './pages/ShowFlashCard';
import ShowAllFlashCard from './components/ShowAllFlashCard';
import ShowCompleteSingleCard from './components/ShowCompleteSingleCard'; // Import the component
import Header from './components/Header';
import Error from './components/Error'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
   <div className='bg-red-50 w-screen overflow-x-hidden h-screen'>
    <Header />
      <Toaster/>
      <Routes>
        <Route path="/" element={<CreateFlashCard />} />
        <Route path="/showflashcard" element={<ShowFlashCard />}>
          <Route index element={<ShowAllFlashCard />} />
          <Route path=":id" element={<ShowCompleteSingleCard />} /> {/* Route for ShowCompleteSingleCard */}
        </Route>
        {/* Route for 404 Not Found */}
        <Route path="*" element={<Error />} />
      </Routes>
   </div>
  )
}

export default App;
