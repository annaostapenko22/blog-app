import React, { Component } from "react";

import { fetchAllPosts, deletePost } from "../../redux/postsOperations";
import { connect } from "react-redux";
import PostItem from "../post-item/PostItem";
import styled from "styled-components";

const PostList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  color: black;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  box-shadow: 0px 0px 11px 9px rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
`;
class PostsAll extends Component {
  state = {
    items: []
  };
  componentDidMount = async () => {
    await this.props.fetchAllPosts();
  };

  render() {
    return (
      <div>
        <Title>ALL POSTS</Title>

        <PostList>
          {this.props.postsAll.map(item => (
            <PostItem
              items={item}
              key={item.id}
              handleDelete={() => this.props.deletePost(item.id)}
            />
          ))}
        </PostList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  postsAll: state.posts
});

const mapDispatchToProps = {
  fetchAllPosts,
  deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsAll);
