import React, { Component } from "react";
import {addPost} from "../redux/postsOperations";
import {connect} from "react-redux"


class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };


  handleSubmit = async e => {
    e.preventDefault();
    console.log("HERE", this.state);
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    console.log("POST=>", post);
   await  this.props.addPost(post)
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
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="title"
          name="title"
          //   value={this.state.title}
        />
        <input
          onChange={this.handleChange}
          placeholder="description"
          name="body"
          //   value={this.state.description}
        />
        <button type="submit">ADD</button>
      </form>
    );
  }
}


// const mapStateToProps = (state) => ({
    
// })

const mapDispatchToProps = {
    addPost
}

export default connect(null, mapDispatchToProps)(AddPost);
