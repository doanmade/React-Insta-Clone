import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comments = props => {
  return (
    <div className="comment-text">
          <span className="user">{props.comment.username} </span>
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

Comments.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comments;