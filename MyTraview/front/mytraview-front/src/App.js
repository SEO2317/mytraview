import logo from './logo.svg';
import './App.css';

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
