import './index.css';
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
import ArticleListPage from './pages/ArticleListPage';
import Home from './pages/Home';
import ArticleCreatePage from './pages/ArticleCreatePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleInput from './pages/ArticleInput';
import ArticleUpdatePage from './pages/ArticleUpdatePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/ArticleListPage" element={<ArticleListPage />} /> 
          <Route path="/ArticleCreatePage" element={<ArticleCreatePage />} /> 
          <Route path="/ArticleDetailPage" element={<ArticleDetailPage />} />
          <Route path="/ArticleUpdatePage" element={<ArticleUpdatePage />} />
          <Route path="/ArticleInput" element={<ArticleInput />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
