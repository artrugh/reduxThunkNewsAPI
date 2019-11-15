import React from 'react';
import { connect } from 'react-redux';

//component with prop article, from the fetched API
import NewsItem from '../components/NewsItem';

let TopNews = ({ channels, loading }) => {

    let topNews = "";
    if (channels) {
        topNews = channels.map((article) => (
            <div className="row">
                <NewsItem article={article} />
            </div>
        ))
    }
    if (loading) {
        topNews = <h3 className="loading-indicator">Loading...</h3>
    }
    return <div>{topNews}</div>
};

// props sets in the reducer
const mapStateToProps = state => ({
    channels: state.json,
    loading: state.loading
});


TopNews = connect(
    mapStateToProps,
    null
)(TopNews);

export default TopNews;