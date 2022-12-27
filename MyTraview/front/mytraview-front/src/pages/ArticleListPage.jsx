import React from 'react'
import CategoryTabs from '../components/article/CategoryTabs'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

const ArticleListPage = (props) => {
  const location = useLocation()
  const { from } = location.state
  const areaCode = from.areaCode;

  // const [areaCode, setAreaCode] = useState(props.areaCode);

  return (
    <>
    <div onClick={() =>console.log(areaCode)}>ArticleListPage</div>
    <Link to="/">
        <Button>홈페이지</Button>
      </Link>
    <CategoryTabs areaCode={areaCode} />
    </>
  )
}

export default ArticleListPage