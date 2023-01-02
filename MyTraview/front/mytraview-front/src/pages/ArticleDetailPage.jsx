import { upload } from '@testing-library/user-event/dist/upload'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { call } from '../api_config/ApiService'
import curBoardAtom from '../components/atoms/curBoardAtom'

const ArticleDetailPage = () => {
    // const [category, setCategory] = useState("")
    const [article, setArticle] = useState('')
    const [articleId, setArticleId] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState()
    const [uploadDate, setUploadDate] = useState("") // 작성일자
    const [viewCount, setViewCount] = useState("") // 조회수
    const [heartCount, setHeartCount] = useState("") // 좋아요 수
    const [writer, setWriter] = useState("") // 닉네임
    const [curBoard, setCurBoard] = useAtom(curBoardAtom);
    const [comments, setComments] = useState(""); // 댓글들
    const [commentId, setCommentId] = useState("") // 댓글 고유 번호
    const [commentContent, setCommentContent] = useState("")
    const [postSeq, setPostSeq] = useState("") // 게시글 번호(프론트 단)

    const writeComment = (e) => {
        setCommentContent(e.target.value);
        e.preventDefault();
        
    }



    const handleDetail = () => {
        const req = {
            // category,
            articleId: curBoard,
            title: article.title,
            content: article.content,
            uploadDate: article.uploadDate,
            viewCount: article.viewCount,
            heartCount: article.heartCount
        }

        const accessToken = sessionStorage.getItem("ACCESS_TOKEN") 

        console.log(curBoard);
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + accessToken
            },
            body: JSON.stringify(req),
        };

        fetch('http://localhost:8100/article', options)
            .then(response => response.json())
            .catch(error => console.error('실패', error));
        console.log("handleDetail clicked button")
    }

    const commentCreate = () => {
        
        const req = {
            // commentId,
            articleId: curBoard,
            content: commentContent,
            writer: "Alex"
        }

        console.log("댓글을 다는 현재 게시글의 번호:" + curBoard);

        const accessToken = sessionStorage.getItem("ACCESS_TOKEN");
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
            body: JSON.stringify(req)


        };

        fetch('http://localhost:8100/comment/create', options)
            .then(response => response.json())
            .then((res) => {

                console.log("-----백엔드 응답-----");
                console.log(res);
                console.log("-----백엔드 응답-----");
                
            })
            // .then(data => console.log(data))
            .catch(error => console.error('실패', error));
        console.log("handleDetail clicked button")

    } // 댓글 컴포넌트


    useEffect(() => {
        fetch(`http://localhost:8100/article/articleId=${curBoard}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                // setArticleId(response.articleId)
                // setTitle(response.title)
                // setWriter(response.writer)
                // setUploadDate(response.uploadDate)
                // setViewCount(response.viewCount)
                // setHeartCount(response.heartCounitt)
                // setContent(response.content)
                setArticle(response)
                // setComments(response.comments)
            })
            .catch(error => console.error(error))
    }, [comments])

    return (
        <>
            <div className="bg-[url('/public/images/10.jpg')] opacity-80 bg-cover">
                <div onClick={() => { console.log("현재보드 수 :" + curBoard) }}>ddddddddddddd</div>
                <div className='max-w-2xl px-6 py-10 m-auto bg-white rounded-md'>
                    <div className="mb-6 text-2xl font-bold text-left text-gray-500 border-4">
                        <Link to="/" className='text-gray-500'>
                            홈으로
                        </Link>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-center text-gray-500 border-4">
                        제목
                        <div className="px-30 py-4 text-sm w-full text-left text-gray-900 border-t-4">
                            {article.title}
                        </div>
                    </div>
                    <div className='text-amber-700 font-semibold border-4'>
                        작성일자
                        <span className="px-2 py-4 text-sm font-light text-center text-gray-900">{"" + article.uploadDate}</span>
                        조회수
                        <span className='px-2 py-4 text-sm font-light text-center text-gray-900'>{"" + article.viewCount}</span>
                        사용자
                        <span className="px-2 py-4 text-sm font-light text-center text-gray-900">{"" + article.writer}</span>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-center text-gray-500 border-b-4">
                        내용
                    </div>
                    <div className="items-center w-full h-full border-4 bg-gray-100 rounded-md resize-none mb-9" >

                        {/* html 강제 적용 컴포넌트 */}
                        <div dangerouslySetInnerHTML={{ __html: article.content }} /> 
                    </div>
                    {/* 댓글창 */}
                    <div className="mb-6">
                        <input name="message" placeholder="댓글입력" onChange={()=>{writeComment()}} className="resize-none focus:outline-none w-full rounded-lg p-2 text-[20px] bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" />
                        <div className="flex justify-between mt-2">
                            {/* <Link to='/ArticleDetailPage'> */}
                                <button type="submit" onClick={()=>{commentCreate()}} className="float-right flex items-center py-2 px-4 rounded-md text-sm bg-blue-600 text-white shadow-lg">댓글 작성
                                    <svg className="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>
                            {/* </Link> */}
                        </div>
                    </div>

                    {/* 댓글창 시작*/}
                    <table className="table-auto border-collapse w-full">
                        <tbody className="text-sm font-normal text-center text-gray-100">
                            {comments && comments.map(comment => (
                                <tr key={comment.id} className="text-center py-20 border-opacity-10 border-b-2 border-gray-200 bg-[#94bee654] hover:bg-[#8ab4e97d]">
                                    <td className="px-4 py-4 text-center text-gray-100">{comment.writer}</td>
                                    <td className="px-4 py-4 text-left text-gray-100">{comment.content}</td>
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </table>

                    {/* 댓글창 끝 */}

                    <Link to='/ArticleUpdatePage'>
                        <button type='modify' onClick={handleDetail} className='px-5 py-2 mx-3 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200 '>수정</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ArticleDetailPage