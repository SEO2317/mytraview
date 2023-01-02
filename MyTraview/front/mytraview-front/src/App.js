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
import ArticleInput from './pages/ArticleInput';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleUpdatePage from './pages/ArticleUpdatePage';
import ViewAllArticles from './pages/ViewAllArticles';
import ArticlePaging from './pages/ArticlePaging';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<Home />} />
          {/* 지도 관련 */}
          <Route path="/myMap" element={<Map />} />
          <Route path="/myMapArea" element={<MapArea />} />
          {/* 로그인 관련 */}
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/JoinPage" element={<JoinPage />} />
          {/* 게시판 관련 */}
          <Route path="/ArticleListPage" element={<ArticleListPage />} />
          <Route path="/ArticleCreatePage" element={<ArticleCreatePage />} />
          <Route path="/ArticleUpdatePage" element={<ArticleUpdatePage />} />
          <Route path="/ArticleInput" element={<ArticleInput />} />
          <Route path="/ArticlePaging" element={<ArticlePaging />} />
          {/* 게시판 확인용 */}
          <Route path="/ArticleDetailPage" element={<ArticleDetailPage />} />
          {/* 게시판 조회 */}
          <Route path="/ViewAllArticles" element={<ViewAllArticles />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
