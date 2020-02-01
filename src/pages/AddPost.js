import React, { Component } from "react";
import { addPost } from "../redux/postsOperations";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
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
    return (
      !this.state.postSubmitted ? (
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="title"
            name="title"
            value={this.state.title}
          />
          <input
            onChange={this.handleChange}
            placeholder="description"
            name="body"
            value={this.state.body}
          />
          <button type="submit">ADD</button>
        </form>

      ) : <Redirect to="/"/>
    );
  }
}

const mapDispatchToProps = {
  addPost
};

export default connect(null, mapDispatchToProps)(AddPost);
