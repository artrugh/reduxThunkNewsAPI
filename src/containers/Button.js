// all the containers call actions
//this case fetchPost(channel)
import React from "react";

import { connect } from "react-redux";

// main fetching function
import { fetchPosts } from "../actions";

//the button is no constant = const
let Button = ({ getPosts, channel }) => (
    <button
        onClick={() => {
            //the two argument (props) from the function 
            // a function which is passed down, which is the fetchPost
            // a value which is setted down using the state2
            getPosts(channel);
            
        }}
        className="btn btn-primary btn-lg btn-block"
    >
        Get headlines!
    </button>
);

// from react-redux
// setting the argument channel from the state/reducer
const mapStateToProps = state => ({
    channel: state.channel
});

// setting the getPost event from the action already imported
const mapDispatchToProps = {
    getPosts: fetchPosts
};

// connecting the props and the event, the reducer-state and the action
Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default Button;