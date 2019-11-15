// all the containers call actions
// in this case getChannel
import React from 'react'

import { connect } from 'react-redux';

import { getChannel } from '../actions';

// important //
// this container sets the channel
// How?
// calling the action getChannel (imported) which returns channel
// the onClick 3th argument is dispatched down (getChannel(channelString = channel))

let Channel = ({ channelName, channelString, onClick, active }) => (
    <div onClick={onClick} className='col-lg-2 col-md-4 col-sm-6'>
        <div className='channel-button' style={{ backgroundColor: active === channelString ? 'orangered' : '' }}>
            <p> {channelName}</p>
            {/* it is totally posible to use channelString instead of channelName */}
        </div>
    </div>
);

// setting the props active from the state reducer
const mapStateToProps = state => ({ active: state.channel });

// the channel has an event onClick which is passed as an argument
// onClick nests a function which dispatch the fetch action function
// called the props channelString, which is also an argument 
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(getChannel(ownProps.channelString))
    }
})


//connect action a reducer
Channel = connect(mapStateToProps, mapDispatchToProps)(Channel)

export default Channel;