import CommentShow from './CommentShow';

const CommentList = ({ comments, deleteComment, updateComment }) => {
  return (
    <>
      {
        comments.map( c =>
          <>
            <CommentShow
              {...c}
              deleteComment={deleteComment}
              updateComment={updateComment}
            />
          </>
        )
      }
    </>
  )
}

export default CommentList;