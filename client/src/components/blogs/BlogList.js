import { Link } from 'react-router-dom';
import Blog from './Blog';

const BlogList = ({ blogs, updateBlog, deleteBlog }) => {
  return (
    <>
      { blogs.map( b => 
        <>
          <Blog 
            {...b} 
            key={b.id} 
            updateBlog={updateBlog} 
            deleteBlog={deleteBlog} 
          />
          <Link to={`/blogs/${b.id}`}>Show</Link>
          <br />
        </>
      )}
    </>
  )
}

export default BlogList;