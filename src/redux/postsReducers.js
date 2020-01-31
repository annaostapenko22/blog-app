import Type from "./types";
import { deletePost, updatePost } from "./postsActionCreators";

const initialstate = {
  posts: [],
  post: {},
  loading: false,
  error: null
};
export const posts = (state = initialstate.posts, { type, payload }) => {
  switch (type) {
    case Type.FETCH_ALL_POSTS_SUCCESS:
      return payload;
    case Type.DELETED_POST_SUCCESS:
      return deletePost(state, payload.id);
    case Type.UPDATE_POST_SUCCESS:
      return {...state, ...updatePost(state, payload.id)}
    default:
      return state;
  }
};

export const post = (state = initialstate.post, { type, payload }) => {
  switch (type) {
    case Type.FETCH_ONE_POST_SUCCESS:
      return payload.post;
      case Type.ADD_COMMENT_SUCCESS:
        return 
    default:
      return state;
  }
};

export const loadingReducer = (
  state = initialstate.loading,
  { type, payload }
) => {
  switch (type) {
    case Type.FETCH_ALL_POSTS_START:
      return true;
    case Type.FETCH_ALL_POSTS_SUCCESS:
    case Type.FETCH_ALL_POSTS_ERROR:
      return false;
    default:
      return state;
  }
};

export const errorReducer = (state = initialstate.error, { type, payload }) => {
  switch (type) {
    case Type.FETCH_ALL_POSTS_START:
      case Type.DELETED_POST_START:
      return null;
    case Type.FETCH_ALL_POSTS_ERROR:
      case Type.DELETED_POST_ERROR:
      return payload.error;
    default:
      return state;
  }
};
