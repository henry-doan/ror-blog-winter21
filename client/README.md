

         index 
           |
           App (nav routes)
Home   About  Blogs     NoMatch 
              /\
   (new)BlogForm BlogList
                    \
            (own page) Blog (update, delete)
                      (update) BlogForm
                       |
                       Posts (update, delete)
            PostForm       PostList update
                           Post    update             Post
                           (update) PostForm
                           |
                           Comments
                  Commentform CommentList 
                            Comments
                              (update) CommentForm


                   