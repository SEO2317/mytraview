import React from 'react'
import CategoryTabs from '../components/article/CategoryTabs'
import { Link, useLocation } from 'react-router-dom'

const ArticleMainListPage = (props) => {
  const location = useLocation()
  const { from } = location.state
  const areaCode = from.areaCode;

  // const [areaCode, setAreaCode] = useState(props.areaCode);

  return (
    <>
      <div onClick={() => console.log(areaCode)}></div>
      {/* <Link to="/">
        <button>홈페이지</button>
      </Link> */}
      <CategoryTabs areaCode={areaCode} />
    </>
  )
}

export default ArticleMainListPage