import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../redux/postsOperations";
import PostsAll from "../posts-all/PostsAllContainer";
import PostPage from "../../pages/PostPage";
import Navigation from "../navigation/Navigation";
import AddPost from "../../pages/AddPost"
class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchAllPosts();
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={PostsAll} />
          <Route path="/post" exact component={PostPage} />
          <Route path="/postAdd" exact component={AddPost}/>
        </Switch>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  fetchAllPosts
};

export default connect(null, mapDispatchToProps)(App);
