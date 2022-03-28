import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import YoutubeReducer from './reducers/YoutubeReducer';
// import AuthReducer from './reducers/AuthReducer';
// import GroupReducer from './reducers/GroupReducer';


const rootReducers = combineReducers({
     YoutubeReducer,
    //  AuthReducer,
    //  GroupReducer,
});
const middlewares = [thunkMiddleware];
const Store = createStore(rootReducers, composeWithDevTools( applyMiddleware(...middlewares)));

export default Store;