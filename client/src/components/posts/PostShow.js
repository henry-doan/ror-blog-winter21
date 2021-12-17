import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

// const PostShow = ({}) => {
//   const [post, setPost] = useState({ title: '', body: '', mins: 0 })

//   let params = useParams()

//   useEffect( () => {
//     axios.get(`/api/blogs/${params.blogId}/posts/${params.postId}`)
//       .then( res => setPost(res.data))
//       .catch( err => console.log(err))
//   }, [])


//   return(
//     <>
//       <h2>{post.title}</h2>
//       <h4>Minutes to read: {post.mins}</h4>
//       <p>{post.body}</p>
//     </>
//   )
// }

const PostShow = ({ id, title, body, mins, deletePost, updatePost }) => {
  const [editing, setEdit] = useState(false)

  return(
    <>
      <h2>{title}</h2>
      <h4>Minutes to read: {mins}</h4>
      <p>{body}</p>
      { editing ?
        <>
          <PostForm
            id={id}
            title={title}
            mins={mins}
            body={body}
            updatePost={updatePost}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true)}>Edit</button>
      }
      <button onClick={() => deletePost(id)}>Delete</button>
    </>
  )
}

export default PostShow;