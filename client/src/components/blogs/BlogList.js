import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <>
      { blogs.map( b => 
        <>
          <Link to={`/blogs/${b.id}`} key={b.id}>{b.title}</Link>
          <br />
        </>
      )}
    </>
  )
}

export default BlogList;