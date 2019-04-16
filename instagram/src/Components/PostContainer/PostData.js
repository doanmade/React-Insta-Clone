import React from 'react';
import CommentSection from '../CommentSection/ComContainer.js';
import PostHeader from './PostHeader';

import './Posts.css';

const PostData = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.postData.username}
        thumbnailUrl={props.postData.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.postData.imageUrl}
        />
        
      </div>
      <CommentSection 
      likes={props.postData.likes}
      comments={props.postData.comments} 
      />
    </div>
  );
};

export default PostData;
