import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Rockets from './Redux/Rockets/RocketList';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
