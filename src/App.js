import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import CreateFlashCard from './pages/CreateFlashCard';
import ShowFlashCard from './pages/ShowFlashCard';
import ShowAllFlashCard from './components/ShowAllFlashCard'; // Import ShowAllFlashCard
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<CreateFlashCard />} />
        <Route path='/showflashcard' element={<ShowFlashCard />}>
          {/* Nested route for ShowAllFlashCard */}
          <Route index element={<ShowAllFlashCard />} />
        </Route>
        <Route />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
