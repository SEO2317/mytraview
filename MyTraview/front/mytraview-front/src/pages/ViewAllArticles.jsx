import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { call } from '../api_config/ApiService';
import curBoardAtom from '../components/atoms/curBoardAtom';
import Pagination from '../components/article/Pagination';

const ViewAllArticles = () => {

    const [articles, setArticles] = useState([]);
    const [_, setCurBoard] = useAtom(curBoardAtom);
    // const [auth, setAuth] = useAtom(authAtom); 
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    let [postNum, setPostNum] = useState(1)

    // const checkUser = (e) => {
    //     if (auth.token === null) {
    //         e.preventDefault();
    //         alert("로그인 후 사용 가능합니다.");
    //     }
    // }

    const viewCountIncrease = () => {
        call("/article", "GET")
            .then((res) => {
                console.log(res);
            })
    } // 조회수 증가함수

    useEffect(() => {
        fetch('http://localhost:8100/article')
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setArticles(response);
            })
            .catch(error => console.error(error))
    }, [])



  return (
    <>
      <label >
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
      <div className="overflow-x-auto mt-6">
        {/* <div onClick={() => {console.log( articles)}}>dddddddddddddddddddd</div> */}
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left text-[0.9674rem]">
              <th className="px-4 py-2 bg-[#F8F8F8] text-center border">No.</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center border">제목</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center border">작성자</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center border">작성일</th>
              <th className="px-4 py-2 bg-[#F8F8F8] text-center border">조회수</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {articles && articles.slice(offset, offset + limit).map(article => (
              <tr key={article.id} className="hover:bg-gray-100 border-b border-gray-200 py-10" >

                <td className="px-4 py-2 text-center border">{postNum++}</td>
 
                <td className="px-4 py-2 text-left border text-gray-700">
                  <Link to="/ArticleDetailPage">
                    <button onClick={() => {
                    setCurBoard(article.id);
                    // viewCountIncrease(article.articleId)
                  }}>{article.title}</button>
                  </Link>
                </td>

                <td className="px-4 py-2 text-center border">{article.writer}</td>

                <td className="px-2 py-2 text-center border">{article.uploadDate}</td>

                <td className="px-1 py-2 text-center border">{article.viewCount}</td>

              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          total={articles.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        <Link to="/ArticleCreatePage" className="float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-900 hover:bg-neutral-200">글쓰기</Link>
        {/* onClick={checkUser} */}
      </div>
    </>
  )
}

export default ViewAllArticles