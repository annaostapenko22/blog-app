import { fetchAllPosts, deletePost } from "../../redux/postsOperations";
import { connect } from "react-redux";
import PostsAll from "./PostsAll"

const mapStateToProps = state => ({
    postsAll: state.posts
  });
  
  const mapDispatchToProps = {
    fetchAllPosts,
    deletePost
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(PostsAll)