import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { showMissions } from './Redux/Missions/Missions';
import NavBar from './Components/Navbar';
import Rockets from './Redux/Rockets/RocketList';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMissions());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="space-travlers/" element={<Rockets />} />
        <Route path="space-travlers/missions" element={<Missions />} />
        <Route path="space-travlers/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
