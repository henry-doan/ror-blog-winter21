import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';
import PostList from './PostList';

const Posts = ({ blogId }) => {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    axios.get(`/api/blogs/${blogId}/posts`)
      .then( res => setPosts(res.data))
      .catch( err => console.log(err))
  }, [])

  const addPost = (post) => {
    axios.post(`/api/blogs/${blogId}/posts`, { post })
      .then( res => setPosts([ ...posts, res.data ]))
      .catch( err => console.log(err))
  }

  const deletePost = (id) => {
    axios.delete(`/api/blogs/${blogId}/posts/${id}`)
      .then( res => {
        alert(res.data.message)
        setPosts(posts.filter( p => p.id !== id ))
      })
      .catch( err => console.log(err))
  }

  const updatePost = (id, post) => {
    axios.put(`/api/blogs/${blogId}/posts/${id}`, { post })
      .then( res => {
        const newUpdatedPosts = post.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setPosts(newUpdatedPosts)
        // edit works but needs to refresh
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>Posts</h1>
      <PostForm addPost={addPost} />
      <PostList 
        posts={posts} 
        blogId={blogId} 
        deletePost={deletePost}
        updatePost={updatePost}
      />
    </>
  )
}

export default Posts;