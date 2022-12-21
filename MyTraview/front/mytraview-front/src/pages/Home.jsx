import { Button } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <Link to="/ArticleListPage">
        <Button>글목록</Button>
    </Link>
    </>
  )
}

export default Home