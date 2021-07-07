// import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import "./Comment.css";

const Comments = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username} </span>
      <span className="comment">{props.comment.text}</span>
      <span>
        {/* {moment(props.timestamp, "=MMMM-DD-YYYY, hh:mm:ss a").fromNow()} */}
      </span>
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
