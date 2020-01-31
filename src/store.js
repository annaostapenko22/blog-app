import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { posts, loadingReducer, errorReducer, post } from "./redux/postsReducers";

const rootReducer = combineReducers({
   posts: posts,
  loading: loadingReducer,
  error: errorReducer,
  post: post


});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;