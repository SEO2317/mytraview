import React from 'react'
// import ArticleDetailPage from '../../pages/ArticleDetailPage'
// import ArticleSubListPage from '../../pages/ArticleSubListPage'
// import Best from '../../pages/Best'
import Section from './Section'
import SeventeenDistrict from './SeventeenDistrict'
import TPostCarousel from './TPostCarousel'


const SinglePage = () => {

    return (
        <div>
            <div style={{ height: "100vh", width: "200vh", display: "vertical" }}>

                <div id="s1" style={{ height: "100vh", width: "200vh" }}>
                    <Section />
                </div>

                <div id="s2" style={{ height: "100vh", width: "200vh", backgroundColor: "DarkNavy" }}>
                    <SeventeenDistrict />
                </div>

                <div id="s3" style={{ height: "100vh", width: "200vh", backgroundColor: "gray" }}>
                    {/* <Best /> */}
                    {/* <TPostCarousel /> */}
                    {/* <ArticleSubListPage /> */}
                </div>

                <div id="s4" style={{ height: "100vh", width: "200vh", backgroundColor: "peach" }}>
                    {/* <ArticleDetailPage /> */}
                </div>

            </div>
        </div>
    )
}

export default SinglePage