import React, { useEffect, useRef, useState } from 'react'
import { call } from '../api_config/ApiService';
import { Link } from 'react-router-dom';
import Map from '../components/map/Map';
import TagList from '../components/article/TagList';
import EditorComponent from '../components/article/EditorComponent';
import curBoardAtom from '../components/atoms/curBoardAtom';
import { useAtom } from 'jotai';

const ArticleCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [curBoard, setCurBoard] = useAtom(curBoardAtom);
  const [category, setCategory] = useState('');
  const id = useRef('');
  const [articleId, setArticleId] = useState('');

  // const [desc, setDesc] = useState('') // react-quill 에디터 변수

  // function onEditorChange(value) {
  //   setDesc(value)
  // }

  const writeTitle = (event) => {
    setTitle(event.target.value)
  }
  
  function writeContent(value) {
    setContent(value)
  }

  const handleCreate = async () => {
    const req = {
      
      title: title,
      content: content
  
    }

    await call("/article", "POST", req)
    .then( (res) => {id.current=res.id; console.log(articleId); console.log(res); alert("리뷰 남겨주셔서 감사합니다~")})
      .catch((err) => {
        console.log(err);
      });
    setArticleId(id.current)
  }

  return (
    <>
      <div className="bg-[url('/public/images/10.jpg')] opacity-80 bg-cover" >
      
        <div className='max-w-2xl px-6 py-10 m-auto bg-gray-200 rounded-md bg-opacity-20 ml-25 mr-25'>
          <div className="mb-10 text-2xl font-bold text-left border-b-2">
              <div className="text-teal-500 border-none mt-5">글쓰기</div>
              Title
              <br /><br />
              <input type="text" name="title" value={title} placeholder="고민을 한 마디로 알려주세요" onChange={writeTitle} className="w-full py-4 pl-0 text-sm text-left placeholder-gray-300 border-none hover:placeholder-transparent"/>
            
          </div>
          <br></br>
            <div className="items-center text-center text-gray-700 bg-gray-100 rounded-md resize-none mb-9 opacity-80">
              <EditorComponent value={content} onChange={writeContent}/>
            </div>
            <br></br>
            <br></br>
          <TagList category={category}/>
          {/* <Link to='/ArticleDetailPage' state={{id: articleId}}>
            <button type='create' onClick={handleCreate}className='float-right px-5 py-2 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300'>저장하기</button>
          </Link> */}
          <Link to='/'>
            <button type='create' onClick={() => {handleCreate()}} className='float-right px-5 py-2 font-bold text-blue-500 border-2 rounded-lg border-sky-500 hover:bg-sky-300'>저장하기</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ArticleCreatePage