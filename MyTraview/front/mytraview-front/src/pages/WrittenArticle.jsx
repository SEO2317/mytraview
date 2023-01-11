import React, { useEffect, useState } from 'react'
import { call } from '../api_config/ApiService'


const WrittenArticle = () => {

    const [articles,setArticles] = useState("")

    useEffect(() => {
        call(`/users/viewAllByWritten`,'GET')
        .then((res) => {setArticles(res); console.log(res);})
        .catch((res) => {console.log(res);})
    },[])

  return (
    <div >WrittenArticle
        <div className='font-semibold border- text-amber-700'>
        {articles && articles.map(article => (
            <div key = {article.id}>
                <div>ddd{article.writer}</div>
                <div>ddd{article.title}</div>
                <div>ddd{article.content}</div>
            </div>
        ))}
        </div>
        <div className='mt-52' onClick={()=>{console.log(articles)}}>dddddd</div>
    </div>
  )
}

export default WrittenArticle