// import React, { useEffect, useState } from 'react'
// import { useAtom } from 'jotai'
// import curBoardAtom from '../atoms/curBoardAtom'
// import ColouredHeartImg from "../assets/coloured_heart.png"
// import VacantHeartImg from "../assets/empty_heart.png"


// const CountHeart = () => {

//   const [heartCount, setHeartCount] = useState("")
//   const [curBoard, setCurBoard] = useAtom(curBoardAtom)
//   const [flag2, setFlag2] = useState(false)
//   const [heartFlag, setHeartFlag] = useState('')

//   const heartHandler = () => {
//     setFlag2(!flag2);
//     setHeartFlag(!heartFlag);

//     // if (setFlag2 === !flag2) {
//     //     const accessToken = sessionStorage.getItem("ACCESS_TOKEN")

//     //     const req = {
//     //         articleId: curBoard,
//     //         email: "test@test.com",
//     //         flag: heartFlag
//     //     }

//     //     const options = {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //             "Authorization": "Bearer " + accessToken
//     //         },
//     //         body: JSON.stringify(req),
//     //     };
//     //     fetch(`http://localhost:8100/heart/coloured`, options)
//     //         .then((res) => {
//     //             res.json()
//     //         })
//     //         .then((res) => {
//     //             console.log(res);
//     //         })
//     // }
//     // .catch((error) => {
//     //     console.log("제대로 입력되지 않았습니다.");
//     // })

//     const accessToken = sessionStorage.getItem("ACCESS_TOKEN")

//     const req = {
//       articleId: curBoard,
//       email: "test@test.com",
//       flag: heartFlag
//     }

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer " + accessToken
//       },
//       body: JSON.stringify(req),
//     };
//     fetch(`http://localhost:8100/heart/coloured`, options)
//       .then((res) => {
//         res.json()
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log("제대로 입력되지 않았습니다.");
//       })
//   }

//   useEffect(() => {
//     fetch(`http://localhost:8100/heart=${curBoard}`)
//       .then(response => response.json())
//       .then(response => {
//         console.log(response);
//         setHeartCount(response)
//         setHeartFlag(response.flag)
//         if (flag2 === false) {
//           setFlag2(!flag2)
//         }
//       })
//       .catch(error => console.error(error))
//   }, [flag2])


//   return (

//     <div className='flex'>
//       {/* img src="./public/images/coloured_heart.png" or img src="./assets/coloured_heart.png" 이렇게 가져오면 사진을 읽지 못함 */}
//       {/* <img src={flag2 === true?ColouredHeartImg:VacantHeartImg} img className='object-scale-down w-6 h-4 pt-[5px] mx-2 my-2' onClick={() => {setFlag2(!flag2)}} /> */}
//       <div onClick={() => { heartHandler() }} className='object-scale-down w-4 h-4 pt-[5px] mx-2 my-2'>
//         <img src={flag2 === true ? ColouredHeartImg : VacantHeartImg} />
//       </div>
//       <div className='my-2 mr-2'>{heartCount.length}</div>
//     </div>

//   )
// }

// export default CountHeart