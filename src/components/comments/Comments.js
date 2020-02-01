import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/postsOperations";
class Comments extends Component {
  state = {
    newComment: ""
  };

  handleAddComment = e => {
    e.preventDefault();
    this.props.addComment({
      postId: this.props.postId,
      body: this.state.newComment
    });
    this.setState({ newComment: "" });
  };
  handleChangeAddComment = e => {
    console.log(e.target.value);
    this.setState({ newComment: e.target.value });
  };
  render() {
    return (
      <>
        {this.props.comments && (
          <div>
            <h4>Comments:</h4>
            <ul>
              {this.props.comments.map(elem => (
                <li key={elem.id}>
                  <p>{elem.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={this.handleAddComment}>
          <textarea
            placeholder="enter your comment"
            onChange={this.handleChangeAddComment}
            value={this.state.newComment}
          />
          <button>ADD COMMENT</button>
        </form>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  addComment
};

export default connect(null, mapDispatchToProps)(Comments);
