import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from '../actions/index';
// just strings imported from the actions


// REDUCER is a plain case function which has always two arguments:
// the state and the action. The state has a default value {} and the action has always a type.
const reducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CHANNEL:
            // if channel, return two values, the spread state and set the channel from the action:
            // (value which was returned by the action)
            return { ...state, channel: action.channel };
        case REQUEST_POSTS:
            // if request, return two values, the spread state and set the loading is set on true.
            // when is the loading gonna be used.
            return { ...state, loading: true };
        case RECEIVE_POSTS:
            // if receive, return three values, the spread state, the json is setted by the action, and loding is setted in false
            return { ...state, json: action.json, loading: false };
        default:
            // nothing happens, return state.
            return state;
    }
}

// it is import in the index.js
export default reducer