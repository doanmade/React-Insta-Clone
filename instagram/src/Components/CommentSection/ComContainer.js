import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes
    };
  }
  render() {
    return (
      <div>
          
        {this.state.comments.map((c, i) => <Comments key={i} comment={c} />)}
        <CommentInput />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;