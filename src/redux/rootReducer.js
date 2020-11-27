import { combineReducers } from "redux";
import { appReducer } from "./appReduser";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer
})