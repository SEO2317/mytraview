import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import ArticleDetailPage from '../../pages/ArticleDetailPage'
import ArticleSubListPage from '../../pages/ArticleSubListPage'
// import Best from '../../pages/Best'
import Section from './Section'
import SeventeenDistrict from './SeventeenDistrict'
import TPostCarousel from './TPostCarousel'


// const Base = styled.div`
//   width: 100%;
//   height: 100vh;
// `;

// const SliderObject = styled.div`
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;


const SinglePage = () => {
    /*  원페이징 스크롤 구현을 하려 했으나,
        다른 페이지에서 스크롤 제어가 안되어 미정*/

    // const wholePage = document.getElementsByClassName("slider");
    // const totalPageNumber = wholePage[0]?.children?.length;

    // const [currentInputs, setCurrentInputs] = useState({
    //     currentWindowHeight: window.innerHeight,
    //     currentPage: 0,
    // });

    // // 윈도우 리사이즈 시, 윈도우 사이즈를 조정한다
    // const setPageSize = () => {
    //     setCurrentInputs({ currentWindowHeight: window.innerHeight });
    // };

    // // 현재 페이지가 몇페이지인지 구하는 함수
    // const setPage = () => {
    //     for (var i = 1; i < totalPageNumber; i++) {
    //         if (window.scrollY < currentInputs.currentWindowHeight * i) {
    //             setCurrentInputs({ ...currentInputs, currentPage: i });
    //             return;
    //         }
    //     }
    // };

    // // Scroll Event와 Resize시 무한 반복을 피하기 위함
    // useEffect(() => {
    //     window.addEventListener("scroll", setPage);
    //     window.addEventListener("resize", setPageSize);
    //     return () => {
    //         window.removeEventListener("scroll", setPage);
    //         window.removeEventListener("resize", setPageSize);
    //     };
    // });

    // window.addEventListener("wheel", (e) => {
    //     // 마우스 휠을 내릴때
    //     if (e.deltaY > 0) {
    //         let p = 1;
    //         while (p < totalPageNumber) {
    //             if (currentInputs.currentPage === p) {
    //                 window.scrollTo({
    //                     top: currentInputs.currentWindowHeight * p,
    //                     behavior: "smooth",
    //                 });
    //             }
    //             p++;
    //         }
    //     }
    //     // 마우스 휠을 올릴때
    //     if (e.deltaY < 0) {
    //         let p = 1;
    //         while (p < totalPageNumber) {
    //             if (currentInputs.currentPage === p) {
    //                 window.scrollTo({
    //                     top: currentInputs.currentWindowHeight * (p - 1),
    //                     behavior: "smooth",
    //                 });
    //             }
    //             p++;
    //         }
    //     }
    // });

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div id="s1" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
                <Section />
            </div>

            <div id="s2" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
                <SeventeenDistrict />
            </div>
            <div id="s3" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
                {/* <Best /> */}
                {/* <TPostCarousel /> */}
                <ArticleSubListPage />
            </div>
            <div id="s4" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
                {/* <ArticleDetailPage /> */}
            </div>
            <div id="s5" style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
            </div>
        </div>
    )
}

export default SinglePage