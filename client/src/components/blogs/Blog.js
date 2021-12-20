import { useState } from 'react';
import BlogForm from './BlogForm';

const Blog = ({ id, title, desc, updateBlog, deleteBlog }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h2>{title}</h2>
      <p>{desc}</p>
      {
        editing ?
        <>
          <BlogForm
            id={id}
            title={title}
            desc={desc}
            updateBlog={updateBlog}
            setEdit={setEdit}
          />
          <button onClick={ () => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={ () => setEdit(true) }>Edit</button>
      }
      <button onClick={ () => deleteBlog(id) }>Delete</button>
    </>
  )
}

export default Blog;