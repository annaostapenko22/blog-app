import React, { Component } from "react";
import { addPost } from "../redux/postsOperations";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const AddPostBtn = styled.button`
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
  border: 1px solid #72d79e;
  font-weight: 700;
  outline: none;
  color: white;
  align-self: flex-end;
  :hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    transition: all 0.4s ease 0s;
    box-shadow: 0px 0px 5px 2px rgba(184, 153, 235, 1);
  }
`;
const AddPostField = styled.input`
  margin: 0;
  padding: 5px;
  border: none;
  border: solid 1px grey;
  border-radius: 5px;
  margin-right: 10px;
`;
class AddPost extends Component {
  state = {
    title: "",
    body: "",
    postSubmitted: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    await this.props.addPost(post);
    this.setState({ title: "", body: "", postSubmitted: true });
  };

  handleChange = e => {
    const name = e.target.name;
    const info = e.target.value;
    this.setState(() => {
      return {
        [name]: info
      };
    });
  };
  render() {
    return !this.state.postSubmitted ? (
      <form onSubmit={this.handleSubmit}>
        <AddPostField
          onChange={this.handleChange}
          placeholder="title"
          name="title"
          value={this.state.title}
        />
        <AddPostField
          onChange={this.handleChange}
          placeholder="description"
          name="body"
          value={this.state.body}
        />
        <AddPostBtn type="submit">ADD</AddPostBtn>
      </form>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapDispatchToProps = {
  addPost
};

export default connect(null, mapDispatchToProps)(AddPost);
