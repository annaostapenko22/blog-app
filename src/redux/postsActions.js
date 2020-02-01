import Type from "./types";

export const fetchAllPostsStart = () => ({
  type: Type.FETCH_ALL_POSTS_START
});

export const fetchAllPostsSuccess = posts => ({
  type: Type.FETCH_ALL_POSTS_SUCCESS,
  payload: posts
});

export const fetchAllPostsError = error => ({
  type: Type.FETCH_ALL_POSTS_ERROR,
  payload: { error }
});

export const fetchOnePostStart = () => ({
  type: Type.FETCH_ONE_POST_START
});

export const fetchOnePostSuccess = post => ({
  type: Type.FETCH_ONE_POST_SUCCESS,
  payload: { post }
});
export const fetchOnePostError = error => ({
  type: Type.FETCH_ONE_POST_ERROR,
  payload: { error }
});

export const addPostStart = () => ({
  type: Type.ADD_POST_START
});
export const addPostSuccess = post => ({
  type: Type.ADD_POST_SUCCESS,
  payload: { post }
});

export const addPostError = error => ({
  type: Type.ADD_POST_ERROR,
  payload: { error }
});
export const deletePostStart = () => ({
  type: Type.DELETED_POST_START
});
export const deletePostSuccess = id => ({
  type: Type.DELETED_POST_SUCCESS,
  payload: { id }
});

export const deletePostError = error => ({
  type: Type.DELETED_POST_ERROR,
  payload: { error }
});

export const updatePostStart = () => ({
  type: Type.UPDATE_POST_START
});
export const updatePostSuccess = post => ({
  type: Type.UPDATE_POST_SUCCESS,
  payload: { post }
});
export const updatePostError = error => ({
  type: Type.UPDATE_POST_SUCCESS,
  payload: { error }
});

export const addCommentStart = () => ({
  type: Type.ADD_COMMENT_START
});
export const addCommentSuccess = comment => ({
  type: Type.ADD_COMMENT_SUCCESS,
  payload: { comment }
});
export const addCommentError = error => ({
  type: Type.ADD_COMMENT_ERROR,
  payload: { error }
});
