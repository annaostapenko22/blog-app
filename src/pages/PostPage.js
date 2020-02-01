import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, updatePost, addComment } from "../redux/postsOperations";
import Comments from "../components/comments/Comments";
import { withRouter } from "react-router-dom";

class PostPage extends Component {
  state = {
    titleEdit: false,
    titleEditValue: "",
    bodyEdit: false,
    bodyEditValue: "",
    id: null,
    comments: []
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    await this.props.fetchPost(id);
    this.setState({
      titleEditValue: this.props.post.title,
      bodyEditValue: this.props.post.body,
      id: this.props.post.id,
      comments: this.props.post.comments
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push("/");
  };

  handleClickEditPostTitle = () => {
    this.setState({ titleEdit: true });
  };

  handleSubmitEditPostTitle = e => {
    e.preventDefault();
    const post = {
      ...this.props.post,
      title: this.state.titleEditValue,
    };
    this.props.updatePost(this.props.post.id, post);
    console.log("update title", post);
    // this.props.fetchPost(6);
    console.log("state=>", this.state);
    console.log("redux state", this.props.post);
    this.setState({ titleEdit: false });
  };

  handleChangeEditPostTitle = e => {
    this.setState({ titleEditValue: e.target.value });
  };

  handleClickEditPostBody = () => {
    this.setState({ bodyEdit: true });
  };

  handleSubmitEditPostBody = e => {
    e.preventDefault();
    const post = {
      ...this.props.post,
      body: this.state.bodyEditValue
    };
    this.props.updatePost(this.props.post.id, { ...post });
    this.setState({ bodyEdit: false });
  };

  handleChangeEditPostBody = e => {
    console.log(e.target.value);
    this.setState({ bodyEditValue: e.target.value });
  };
  render() {
    const { title, body, id, comments } = this.props.post;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          &larr; Back to all posts
        </button>
        <h3>{title}</h3>
        {!this.state.titleEdit && (
          <button onClick={this.handleClickEditPostTitle}>Update Title</button>
        )}

        {this.state.titleEdit && (
          <form onSubmit={this.handleSubmitEditPostTitle}>
            <input
              placeholder="Change your title"
              onChange={this.handleChangeEditPostTitle}
              value={this.state.titleEditValue}
            />
            <button type="submit">CHANGE</button>
          </form>
        )}
        <p>{body}</p>
        {!this.state.bodyEdit && (
          <button onClick={this.handleClickEditPostBody}>Update Text</button>
        )}

        {this.state.bodyEdit && (
          <form onSubmit={this.handleSubmitEditPostBody}>
            <textarea
              onChange={this.handleChangeEditPostBody}
              placeholder="change your post description"
              value={this.state.bodyEditValue}
            />
            <button type="submit">CHANGE</button>
          </form>
        )}
        {/* <button type="button">DELETE</button> */}
        <Comments comments={comments} postId={this.state.id}/>
        {/* {comments && (
          <>
         
          </>
        )} */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = {
  fetchPost,
  updatePost,
  addComment
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostPage)
);
