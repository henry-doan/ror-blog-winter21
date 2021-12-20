import { useState, useEffect } from 'react';

const BlogForm = ({ addBlog, id, title, desc, updateBlog, setEdit }) => {
  const [blog, setBlog] = useState({ title: '', desc: '' })

  useEffect( () => {
    if (id) {
      setBlog({ title, desc })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateBlog(id, blog)
      setEdit(false)
    } else {
      addBlog(blog)
    }
    setBlog({ title: '', desc: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='title' 
          value={blog.title}
          onChange={(e) => setBlog({...blog, title: e.target.value})}
          required
          placeholder="title"
        />
        <label>Description:</label>
        <textarea
          name='desc'
          value={blog.desc}
          onChange={(e) => setBlog({...blog, desc: e.target.value})}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default BlogForm;