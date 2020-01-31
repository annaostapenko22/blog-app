import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost, updatePost } from "../redux/postsOperations";
import AddComment from "../components/add-comment/AddComment"
class PostPage extends Component {
  state = {
    titleEdit: false,
    titleEditValue: "",
    bodyEdit: false,
    bodyEditValue: "",
    id: null
    // body: "",
    // comments: []
  };
  async componentDidMount() {
    const data = await this.props.fetchPost(6);
    // console.log("STATE", this.props.post);
    // this.setState({titleEditValue: this.props.post.title,
    // bodyEditValue: this.props.post.body})
    console.log("data =>", data)
    console.log("=> =>",this.state)
    console.log("id", this.props.post.id)
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
      title: this.state.titleEditValue
    
    };
    this.props.updatePost(this.props.post.id, {...post});
    this.props.fetchPost(6);
    this.setState({ titleEdit: false });
  };

  handleChangeEditPostTitle = e => {
    console.log("=>", e.target.value);
    this.setState({ titleEditValue: e.target.value });
  };

  handleClickEditPostBody = () => {
    this.setState({ bodyEdit: true });
  };

  handleSubmitEditPostBody = e => {
    e.preventDefault();
    const post = {
     
      body: this.state.bodyEditValue
    };
    this.props.updatePost(this.props.post.id, {...post});
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
            />
            <button type="submit">CHANGE</button>
          </form>
        )}
        {/* <button type="button">DELETE</button> */}
<AddComment comments={comments}/>
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
  updatePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
