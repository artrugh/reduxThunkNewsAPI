import { MY_API_KEY } from "../keys";
// import key (ignore in git)

export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

// ACTIONS
// plain functions which return and object, the second argument, usually set the State
export const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel
});

// this two actions are nested in the fetchFunction
export const requestPosts = () => ({
    type: REQUEST_POSTS
});
export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json.articles
});

// main fetching function // 
// the channel is setted in the userInterface
// this is a thunk middleware// a function which return a function
export function fetchPosts(channel) {

    return function (dispatch) {

        dispatch(requestPosts());

        return fetch(
            `https://newsapi.org/v1/articles?source=${channel}&apiKey=${MY_API_KEY}`
        )
            .then(
                response => response.json(),
                error => console.log("An error occured", error)
            )
            .then(json => {
                // dispatching the action
                dispatch(receivedPosts(json));
            });
    };
}