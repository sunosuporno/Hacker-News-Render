import React from 'react';


function SinglePost({post}){
    return (
      <div className="single-post">
          <header>
          <h2>
              {post.title}
          </h2>
          <a href = {post.link}>&#40;{post.link}&#41;</a>
          </header>
          <p className="post-info">{post.points} points by {post.author} | Hide | {post.comments} comments </p>

      </div>  

    )
}

export default SinglePost