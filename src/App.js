import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import SpecificItemPage from './components/specificItemPage/SpecificItemPage';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/specificItemPage" element={<SpecificItemPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;