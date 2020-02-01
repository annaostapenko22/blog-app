import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/postsOperations";
import  styled from "styled-components";

const AddCommentBtn = styled.button`
width: 60px;
height: 35px;
text-transform: uppercase;
    text-decoration: none;
    background: rgb(143, 98, 220);
    padding: 10px;
    border-radius: 50px;
    display: inline-block;
    cursor: pointer;
    font-size: 12px;
    border: 1px solid #72D79E;
    font-weight: 700;
    outline: none;
    color: white;
    align-self: flex-end;
    :hover {
      text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
transition: all 0.4s ease 0s;
box-shadow: 0px 0px 5px 2px rgba(184, 153, 235,1);
    }
`

const CommentField = styled.textarea`
margin: 0;
padding: 15px 10px;
border: none;
border: solid 1px grey;
border-radius: 5px;
margin-right: 10px;
height: 50px;
`

const CommentForm = styled.form`
margin: 0;
padding: 0;
display: flex;
`

const CommentsList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`

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
    this.setState({ newComment: e.target.value });
  };
  render() {
    return (
      <>
        {this.props.comments && (
          <div>
            <h4>Comments:</h4>
            <CommentsList>
              {this.props.comments.map(elem => (
                <li key={elem.id}>
                  <p>{elem.body}</p>
                </li>
              ))}
            </CommentsList>
          </div>
        )}
        <CommentForm onSubmit={this.handleAddComment}>
          <CommentField
            placeholder="enter your comment"
            onChange={this.handleChangeAddComment}
            value={this.state.newComment}
          />
          <AddCommentBtn type="submit">ADD</AddCommentBtn>
        </CommentForm>
      </>
    );
  }
}

const mapDispatchToProps = {
  addComment
};

export default connect(null, mapDispatchToProps)(Comments);
