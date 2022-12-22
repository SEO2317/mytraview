import React from 'react'
import TagTabs from '../components/article/TagTabs'
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
    <TagTabs areaCode={areaCode} />
    </>
  )
}

export default ArticleListPage