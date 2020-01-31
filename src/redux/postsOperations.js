import axios from "axios";
import {
  fetchAllPostsStart,
  fetchAllPostsSuccess,
  fetchAllPostsError,
  fetchOnePostStart,
  fetchOnePostSuccess,
  fetchOnePostError,
  addPostError,
  addPostStart,
  addPostSuccess,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
  updatePostStart,
  updatePostError,
  updatePostSuccess,
  addCommentStart,
  addCommentError,
  addCommentSuccess
} from "../redux/postsActions";

axios.defaults.baseURL = `https://bloggy-api.herokuapp.com`;

export const fetchAllPosts = () => async dispatch => {
  dispatch(fetchAllPostsStart());
  try {
    const response = await axios.get("https://bloggy-api.herokuapp.com/posts");
    console.log("response", response.data);
     dispatch(fetchAllPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchAllPostsError(error));
  }
};

export const fetchPost = id => async dispatch => {
  dispatch(fetchOnePostStart());
  try {
    const response = await axios.get(
      `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`
    );
    console.log("ONE POST", response.data);
    dispatch(fetchOnePostSuccess(response.data));
  } catch (error) {
    dispatch(fetchOnePostError(error));
  }
};

export const addPost = post => async dispatch => {
  dispatch(addPostStart());
  try {
    const result = await axios.post(
      "https://bloggy-api.herokuapp.com/posts",
      post
    );
    console.log("RESULT", result.data);
    dispatch(addPostSuccess(result.data));
  } catch (error) {
    dispatch(addPostError(error));
  }
};

export const deletePost = id => async dispatch => {
  dispatch(deletePostStart());
  try {
    const result = await axios.delete(`https://bloggy-api.herokuapp.com/posts/${id}`);
    console.log("DELETED", id)
    dispatch(deletePostSuccess(id))
  } catch (error) {
    console.log("ERROR",error)
    dispatch(deletePostError(error));
  }
};


export const updatePost = (id, item)=>async dispatch =>{
dispatch(updatePostStart())
try{
await axios.put(`https://bloggy-api.herokuapp.com/posts/${id}`, item)
dispatch(updatePostSuccess(item))
}
catch (error){
  
  dispatch(updatePostError(error))
}
}

export const addComment = (comment) => async dispatch => {
dispatch(addCommentStart())
try{
  const data = await axios.post("https://bloggy-api.herokuapp.com/comments", comment)
  dispatch(addCommentSuccess(data))
}
catch (error){
  dispatch(addCommentError(error))
}
}