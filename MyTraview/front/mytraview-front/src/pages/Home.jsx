import React from 'react'
import { Link } from 'react-router-dom'
import ArticleCreateButton from '../components/main/ArticleCreateButton';
import OnePage from '../components/main/OnePage';
import SeventeenDistrict from '../components/main/SeventeenDistrict';

const Home = () => {
  return (
    <>
      <OnePage />
      <SeventeenDistrict />
      <Link to='/SeventeenDistrict'>17도</Link>
      <ArticleCreateButton />
    </>
  )
}

export default Home