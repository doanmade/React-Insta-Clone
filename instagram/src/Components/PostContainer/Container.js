import React from 'react';
import PostData from './PostData.js';

import './Posts.css';

const Container = props => {
    return (
      <div className="posts-container-wrapper">
        {props.postData.map(p => <PostData key={p.imageUrl} postData={p} />)}
      </div>
    );
  };
  
 

export default Container;