import { applyMiddleware, combineReducers, createStore } from "redux";

import authReducer from "./auth.reducer";
import foldersReducer from "./folders.reducer";
import imagesReducer from './images.reducer'
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    images: imagesReducer,
    auth: authReducer,
    folders: foldersReducer
})
export default createStore(RootReducer, applyMiddleware(thunk))