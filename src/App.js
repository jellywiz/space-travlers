import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';

function App() {
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
