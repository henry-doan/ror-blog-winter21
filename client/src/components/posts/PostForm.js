import { useState, useEffect } from 'react';

const PostForm = ({ addPost, id, title, mins, body, updatePost, setEdit }) => {
  const [post, setPost] = useState({ title: '', body: '', mins: 0 })

  useEffect( () => {
    if (id) {
      setPost({ title, body, mins })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePost(id, post)
      setEdit(false)
    } else {
      addPost(post)
    }
    setPost({ title: '', body: '', mins: 0 })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input 
          name='title'
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />
        <label>Body:</label>
        <textarea
          name='body'
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          required
        ></textarea>
        <label>Minutes Read:</label>
        <input 
          name='mins'
          value={post.mins}
          onChange={(e) => setPost({ ...post, mins: e.target.value })}
          required
          type="number"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default PostForm;