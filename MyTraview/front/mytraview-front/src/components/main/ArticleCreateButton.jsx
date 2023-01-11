import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCreateButton = () => {
    return (
        <>
            {/* 글쓰기 버튼 */}
            <div className="fixed bottom-5 right-0 flex items-center justify-end mr-28">
                <Link to="/ArticleCreatePage">
                    <button
                        type="button"
                        className="rounded-md bg-black bg-opacity-80 px-4 py-2 text-sm font-medium border-2 text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        리뷰 Go!
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ArticleCreateButton