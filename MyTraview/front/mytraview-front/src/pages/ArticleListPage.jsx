import React from 'react'
import CategoryTabs from '../components/article/CategoryTabs'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

const ArticleListPage = (props) => {
  const location = useLocation()
  const { from } = location.state
  const areaCode = from.areaCode;
  return (
    <>
    <div>ArticleListPage</div>
    <Link to="/">
        <Button>홈페이지</Button>
      </Link>
    <CategoryTabs areaCode={areaCode} />
    </>
  )
}

export default ArticleListPage