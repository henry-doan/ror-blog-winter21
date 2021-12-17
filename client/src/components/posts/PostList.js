import { Link } from 'react-router-dom';
import PostShow from './PostShow';

const PostList = ({ posts, blogId, deletePost, updatePost }) => {
  return (
    <>
      { posts.map( p => 
        <>
          {/* <Link
            to={`/blogs/${blogId}/posts/${p.id}`}
            key={p.id}
          >{p.title}</Link>
          <button>Edit</button>
          <button onClick={() => deletePost(p.id)}>Delete</button>
          <br /> */}
          <PostShow 
            {...p} 
            blogId={blogId} 
            deletePost={deletePost} 
            updatePost={updatePost}
          />
        </> 
      )}
    </>
  )
}

export default PostList;