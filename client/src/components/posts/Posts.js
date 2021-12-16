import { useState, useEffect } from 'react';
import axios from 'axios';
const Posts = ({ blogId }) => {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    axios.get(`/api/blogs/${blogId}/posts`)
      .then( res => setPosts(res.data))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>Posts</h1>
    </>
  )
}

export default Posts;