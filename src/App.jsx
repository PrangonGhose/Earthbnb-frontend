import { Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import './css/App.css';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row vh-100">
        <nav className="col-2" />
        <Routes>
          <Route path="/home" element={<Mainpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
