import React from 'react'

const OnePage = () => {
  return (
<div>
    <div style={{height:"1000px", width:"1000px", display:"flex"}}>

        <div id="s1" style={{height:"100%", width:"100%", backgroundColor:"aliceblue"}}>
            <a href="#s3">s3으로 이동하기</a>
        </div>
        <div id="s2" style={{height:"100%", width:"100%", backgroundColor:"blanchedalmond"}}>
            <a href='#s4'>s4로 이동하기</a>
        </div>
    </div>

    <div id="s3" style={{height:"700px", width:"700px", backgroundColor:"aliceblue"}}>
            <a href="#s1">s1로 이동하기</a>
        </div>
        <div id="s4" style={{height:"700px", width:"700px", backgroundColor:"blanchedalmond"}}>
            <a href='#s2'>s2로 이동하기</a>
        </div>
        <div id="s4" style={{height:"700px", width:"700px", backgroundColor:"blanchedalmond"}}>
            <a href='#map'>map으로 이동하기</a>
        </div>
</div>
  )
}

export default OnePage