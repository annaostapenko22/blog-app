import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, updatePost, addComment } from "../redux/postsOperations";
import Comments from "../components/comments/Comments";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const BackBtn = styled.button`
color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    background: #60a3bc;
    padding: 5px;
    border-radius: 50px;
    display: inline-block;
    cursor: pointer;
    font-size: 12px;
    margin-bottom: 20px;
    border: 1px solid #cfa0c5;
    font-weight: 700;
    outline: none;
    :hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
transition: all 0.4s ease 0s;
box-shadow: 0px 0px 5px 2px rgba(235,170,235,1);
    }
`

const UpdateBtn = styled.button`
 text-transform: uppercase;
    text-decoration: none;
    background: #4DDA8A;
    padding: 5px;
    border-radius: 50px;
    display: inline-block;
    cursor: pointer;
    font-size: 12px;
    margin-bottom: 20px;
    border: 1px solid #72D79E;
    font-weight: 700;
    outline: none;
    color: white;
    :hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
transition: all 0.4s ease 0s;
box-shadow: 0px 0px 5px 2px rgba(155, 242, 192,1);
    }
`

const UpdateTitle = styled.input`
margin: 0;
padding: 5px;
border: none;
border: solid 1px grey;
border-radius: 5px;
margin-right: 10px;
`
const Updatebody = styled.textarea`
margin: 0;
padding: 15px 10px;
border: none;
border: solid 1px grey;
border-radius: 5px;
margin-right: 10px;
`

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
      title: this.state.titleEditValue
    };
    this.props.updatePost(this.props.post.id, post);
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
    this.setState({ bodyEditValue: e.target.value });
  };
  render() {
    const { title, body, comments } = this.props.post;

    return (
      <>
        <BackBtn type="button" onClick={this.handleGoBack}>
          &larr; Back to all posts
        </BackBtn>
        <h3>{title}</h3>
        {!this.state.titleEdit && (
          <UpdateBtn onClick={this.handleClickEditPostTitle}>Update Title</UpdateBtn>
        )}

        {this.state.titleEdit && (
          <form onSubmit={this.handleSubmitEditPostTitle}>
            <UpdateTitle
              placeholder="Change your title"
              onChange={this.handleChangeEditPostTitle}
              value={this.state.titleEditValue}
            />
            <UpdateBtn type="submit">CHANGE</UpdateBtn>
          </form>
        )}
        <p>{body}</p>
        {!this.state.bodyEdit && (
          <UpdateBtn onClick={this.handleClickEditPostBody}>Update Text</UpdateBtn>
        )}

        {this.state.bodyEdit && (
          <form onSubmit={this.handleSubmitEditPostBody}>
            <Updatebody
              onChange={this.handleChangeEditPostBody}
              placeholder="change your post description"
              value={this.state.bodyEditValue}
            />
            <UpdateBtn type="submit">CHANGE</UpdateBtn>
          </form>
        )}
        <Comments comments={comments} postId={this.state.id} />
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
