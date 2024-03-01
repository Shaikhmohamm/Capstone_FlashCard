import './App.css';
import Header from './components/Header';
import { Route, Routes, Outlet } from 'react-router-dom';
import CreateFlashCard from './pages/CreateFlashCard';
import ShowFlashCard from './pages/ShowFlashCard';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Sample from './components/Sample';

function App() {
let data = useSelector((state)=>state.flashcards)

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<CreateFlashCard />} />
        <Route  path='/showflashcard' element={<ShowFlashCard />}>
          <Route path={`/showflashcard/${data.id}`} element={<Sample/>} />
        </Route>
        <Route />
      </Routes>
      <Toaster />
      <Outlet/>
    </div>
  );
}

export default App;
