import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const data = [
    //서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종특별자치시, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주특별자치도
    { areaCode: "서울", },
    { areaCode: "부산", },
    { areaCode: "대구", },
    { areaCode: "인천", },
    { areaCode: "광주", },
    { areaCode: "대전", },
    { areaCode: "울산", },
    { areaCode: "세종특별자치시", },
    { areaCode: "경기", },
    { areaCode: "강원", },
    { areaCode: "충북", },
    { areaCode: "충남", },
    { areaCode: "전북", },
    { areaCode: "전남", },
    { areaCode: "경북", },
    { areaCode: "경남", },
    { areaCode: "제주특별자치도", },
  ];

  return (
    <>
      <div>Home</div>
      <br></br>
      <br></br>
      <div className='w-11 h-10 ml-8'>
      <Link to="/ArticleListPage">
        <Button>글목록</Button>
      </Link>
      </div>
      
      <br></br>
      <br></br>
      {data.map(({ areaCode }) => (
        <Link to="/ArticleListPage" state={{ from: { areaCode } }} key={areaCode}>
          <Button>{areaCode}</Button>
        </Link>
      ))}
      <br></br>
      <br></br>
      <div>
      <Link to="/ArticleCreatePage">
        <Button>리뷰추가</Button>
      </Link>
      <Link to="/ArticleInput">
        <Button>React-Quill</Button>
      </Link>
      </div>
    </>
  )
}

export default Home