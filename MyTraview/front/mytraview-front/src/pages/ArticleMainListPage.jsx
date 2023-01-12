import React from 'react'
import { useLocation } from 'react-router-dom'
import NavOthers from '../components/main/NavOthers'
import NavOthersAfter from '../components/main/NavOthersAfter'
import MapList from '../components/map/MapList'

const ArticleMainListPage = (props) => {
  const location = useLocation()
  const { from } = location.state
  const areaCode = from.areaCode;

  // const [areaCode, setAreaCode] = useState(props.areaCode);

  const accessToken = sessionStorage.getItem("ACCESS_TOKEN")
  

  return (
    <>
    {accessToken == null ? <NavOthers /> : <NavOthersAfter />}
    <div className="bg-[url('/public/images/starSky.jpg')] bg-cover opacity-95" style={{height: "100%"}}>
      <br /><br /><br /><br />
      {window.scrollTo(0, 0)}
      <div className='mx-72'>
      <MapList areaCode={areaCode} />
      <div onClick={() => console.log(areaCode)}></div>
      </div>
      </div>
    </>
  )
}

export default ArticleMainListPage