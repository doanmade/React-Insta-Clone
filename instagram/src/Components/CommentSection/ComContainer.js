import PropTypes from "prop-types";
import React from "react";
import CommentInput from "./CommentInput";
import Comments from "./Comments";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }
  // <p>
  // {moment(props.timestamp, "MMM Do YYY, h:mm:ss a").fromNow()}
  // </p>

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componentWillMount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postIt,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "doanmade" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comments key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handelCommentSubmit}
          changeComment={this.commentHandler}
        />
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
