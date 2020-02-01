import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PostsAll from "../posts-all/PostsAll";
import PostPage from "../../pages/PostPage";
import Navigation from "../navigation/Navigation";
import AddPost from "../../pages/AddPost";
import styled from "styled-components";

const Wrapper = styled.div`
margin: 0 auto;
width: 900px;
font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
     <Wrapper> 
        <Navigation />
        <Switch>
          <Route path="/" exact component={PostsAll} />
          <Route path="/posts/:id" exact component={PostPage} />
          <Route path="/postAdd" exact component={AddPost} />
        </Switch>
    </Wrapper>
    );
  }
}



export default App;
