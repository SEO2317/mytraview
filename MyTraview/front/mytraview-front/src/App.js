import './index.css';
import './App.css';
// import KakaoTest from './components/map/KakaoTest';
import Map from './components/map/Map';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapArea from './components/map/MapArea';
import ArticleCreatePage from './pages/ArticleCreatePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleUpdatePage from './pages/ArticleUpdatePage';
import LandingPage from './components/map/LandingPage';
import SeventeenDistrict from './components/main/SeventeenDistrict';
import Nav from './components/main/Nav';
import ArticleMainListPage from './pages/ArticleMainListPage';
import ArticleSubListPage from './pages/ViewAllArticles';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import ViewAllArticles from './pages/ViewAllArticles';
import SinglePage from './components/main/SinglePage';
import UserMypage from './pages/UserMyPage';
import UserUpdateMyPage from './pages/UserUpdateMyPage';
import BestArticles from './pages/BestArticles';
import ArticleInput from './pages/ArticleInput';
import Pagination from './components/article/Pagination';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path="/SinglePage" element={<SinglePage />} />
          {/* 유저 관련 */}
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/UserMypage" element={<UserMypage />} />
          <Route path="/UserUpdateMyPage" element={<UserUpdateMyPage />} />
          {/* 추천글 관련 */}
          <Route path="/BestArticles" element={<BestArticles />} />
          {/* 지도 관련 */}
          <Route path="/myMap" element={<Map />} />
          <Route path="/myMapArea" element={<MapArea />} />
          {/* 게시판 확인용 */}
          <Route path="/ArticleDetailPage" element={<ArticleDetailPage />} />
          {/* 게시판 관련 */}
          <Route path="/ViewAllArticles" element={<ViewAllArticles />} />
          <Route path="/ArticleMainListPage" element={<ArticleMainListPage />} />
          <Route path="/ArticleCreatePage" element={<ArticleCreatePage />} />
          <Route path="/ArticleUpdatePage" element={<ArticleUpdatePage />} />
          <Route path="/Pagination" element={<Pagination />} />
          <Route path="/SearchMap" element={<LandingPage />} />
          <Route path="/SeventeenDistrict" element={<SeventeenDistrict />} />
          {/* 게시판 조회 */}
          <Route path="/ArticleSubListPage" element={<ArticleSubListPage />} />
          {/* 테스트용 페이지 */}
          <Route path="/ArticleInput" element={<ArticleInput />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
