import React from 'react'
import CategoryTabs from '../components/article/CategoryTabs'
import { useLocation } from 'react-router-dom'

const ArticleMainListPage = (props) => {
  const location = useLocation()
  const { from } = location.state
  const areaCode = from.areaCode;

  // const [areaCode, setAreaCode] = useState(props.areaCode);

  return (
    <>
    {/* 배경추가 및 이 페이지에 들어왔을 때 scroll (0,0)으로 세팅되게 했으며, 카테고리별 글이 먼저 상단에 있고 밑에 맵을 배치해둠 */}
    <div className="bg-[url('/public/images/lumn.jpg')] bg-cover opacity-95" style={{height: "100%"}}>
      <br /><br />
      <br /><br />
      {window.scrollTo(0, 0)}
      <CategoryTabs areaCode={areaCode} />
      <div onClick={() => console.log(areaCode)}></div>
      {/* <Link to="/">
        <button>홈페이지</button>
      </Link> */}
      </div>
    </>
  )
}

export default ArticleMainListPage