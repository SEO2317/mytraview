import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import PrevArrowImg from '../assets/prev_arrow.png';
import NextArrowImg from '../assets/next_arrow.png';

const SeventeenDistrict = () => {
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
  // 캐러셀 셋팅함수

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", left: '0px', zIndex: '9', before: { content: 'none' } }}
      >
        <img src={PrevArrowImg} alt='PrevArrow' className='bg-black'/>
        {/* 기호에 맞게 화살표 색깔 변경가능 */}
      </button>
    );
  }

const StyledSlider = styled(Slider)`
  
  position: relative;
   .slick-prev::before,
   .slick-next::before {
     opacity: 0;
     display: none;
   }
 `;
 // 기존 Slider를 StyledSlider로 스타일링 적용

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", right: '0px', zIndex: '9' }} 
      >
        <img src={NextArrowImg} alt='NextArrow' className='bg-black'/>
        {/* 기호에 맞게 화살표 색깔 변경가능 */}
      </button>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <div className="text-center">Home
        <br /><br />
        {/* ArticleSubListPage */}
        <Link to="/ArticleSubListPage">
          <button className="px-5 py-2 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300">글목록</button>
        </Link>
        <br /><br />
        {/* ArticleMainListPage */}
        <StyledSlider {...settings}>
          {data.map(({ areaCode }) => (
            <div key={areaCode}>
              <div className='ml-10' style={{ width: "80%" }} >
                <Link to="/ArticleMainListPage" state={{ from: { areaCode } }} >
                  <div className='box-content h-64 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300'>
                    <button>{areaCode}</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </StyledSlider>

        <br /><br />
        <div>
          {/* ArticleCreatePage */}
          <Link to="/ArticleCreatePage">
            <button className="px-5 py-2 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300">리뷰추가</button>
          </Link>
          {/* ArticleInput */}
          <Link to="/ArticleInput">
            <button className="px-5 py-2 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300">React-Quill</button>
          </Link>
          {/* Carousel */}
          <Link to="/Carousel">
            <button className="px-5 py-2 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300">React-slick</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SeventeenDistrict