import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    axios.get(`/api/posts/${postId}/comments`)
      .then( res => setComments(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addComment = (comment) => {
    axios.post(`/api/posts/${postId}/comments`, { comment })
      .then( res => setComments([...comments, res.data]))
      .catch( err => console.log(err) )
  }

  const deleteComment = (id) => {
    axios.delete(`/api/posts/${postId}/comments/${id}`)
      .then( res => setComments( comments.filter( c => c.id !== id)))
      .catch( err => console.log(err) )
  }

  const updateComment = (id, comment) => {
    axios.put(`/api/posts/${postId}/comments/${id}`, { comment })
      .then( res => {
        const newUpdatedComments = comments.map( c => {
          if( c.id === id) {
            return res.data
          }
          return c
        })
        setComments(newUpdatedComments)
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h3>Comments:</h3>
      <CommentForm addComment={addComment} />
      <CommentList 
        comments={comments} 
        deleteComment={deleteComment}
        updateComment={updateComment}
      />
      <hr />
    </>
  )
}

export default Comments;