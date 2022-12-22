import './App.css';
import KakaoTest from './components/map/KakaoTest';

import Map from './components/map/Map';
import OnePage from './components/map/OnePage';

// function App() {
//   return (
//     <>
//       {/* <Map/> */}
//       <OnePage/>
//       {/* <KakaoTest/> */}
//     </>
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleListPage from './pages/ArticleList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/ArticleListPage" element={<ArticleListPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
