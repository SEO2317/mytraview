import React from 'react'
import CategoryTabs from '../components/article/CategoryTabs'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material' // 메터리얼-테일윈드

const ArticleListPage = (props) => {
  const location = useLocation()
  const { from } = location.state
  const areaCode = from.areaCode;

  // const [areaCode, setAreaCode] = useState(props.areaCode);

  return (
    <>
      <div onClick={() => console.log(areaCode)}>ArticleListPage</div>
      <Link to="/">
        <button>홈페이지</button>
      </Link>
      <CategoryTabs areaCode={areaCode} />
    </>
  )
}

export default ArticleListPage