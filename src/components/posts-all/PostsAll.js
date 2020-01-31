import React, { Component } from "react";

// import { fetchAllPosts, deletePost } from "../../redux/postsOperations";
// import { connect } from "react-redux";
import PostItem from "../post-item/PostItem";

class PostsAll extends Component {
  state = {
   items: []
  };
  componentDidMount = async() =>{
    const data = await this.props.fetchAllPosts();
    // console.log("data allpost !!!!!!!!", data)
  //  this.setState({items: this.props.postsAll})
  //  console.log("state!!!!!!!", this.state.items)
  }


  render() {
    return (
      <>
        <h2>ALL POSTS</h2>
        <ul>
          {this.props.postsAll.map(item => (
           <PostItem
              items={item}
              key={item.id}
              handleDelete={()=>this.props.deletePost(item.id)}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default PostsAll;
