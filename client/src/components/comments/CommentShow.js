import { useState } from 'react';
import CommentForm from './CommentForm';

const CommentShow = ({ id, author, body, deleteComment, updateComment }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h4>Author: {author}</h4>
      <p>{body}</p>
      {
        editing ?
        <>
          <CommentForm
            id={id}
            author={author}
            body={body}
            updateComment={updateComment}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false) }>Cancel</button>
        </>
        :
        <button onClick={() => setEdit(true) }>Edit</button>
      }
      <button onClick={() => deleteComment(id)}>Delete</button>
    </>
  )
}

export default CommentShow;