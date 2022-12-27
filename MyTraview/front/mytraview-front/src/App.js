import './index.css';
import './App.css';
import KakaoTest from './components/map/KakaoTest';

import Map from './components/map/Map';
import OnePage from './components/map/OnePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleListPage from './pages/ArticleListPage';
import Home from './pages/Home';
import MapArea from './components/map/MapArea';
import ArticleCreatePage from './pages/ArticleCreatePage';
import JoinPage from './components/users/JoinPage';
import LoginPage from './components/users/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="myMap" element={<Map />} />
          <Route path="myMapArea" element={<MapArea />} />
          <Route path="/" element={<Home />} />
          <Route path="/ArticleListPage" element={<ArticleListPage />} />
          <Route path="/ArticleCreatePage" element={<ArticleCreatePage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/JoinPage" element={<JoinPage />} />
          <Route path="/ArticleDetailPage" element={<ArticleDetailPage />} />
          <Route path="/ArticleUpdatePage" element={<ArticleUpdatePage />} />
          <Route path="/ArticleInput" element={<ArticleInput />} />

        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
