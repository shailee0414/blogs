import { combineReducers } from "redux";

const postReducers=(state=[],action)=>{
    switch(action.type){
        case 'FETCH_POST':
            return action.payload;
        default:
            return state;
    };
}
export default combineReducers({
    posts:postReducers,
});