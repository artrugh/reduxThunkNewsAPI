// all the components don't call actions
import React from 'react';

// it is import in the TopNews container
// article is the fetched API
const NewsItem = ({article}) => (
    <article>
        <div className = "article-wrapper" key = {article.title}>
            <h3 className = "text-center">{article.title}</h3>
            <img src = {article.urlToImage} alt = "" />
            <p className = "text-center">{article.description}</p>
            <a href = { article.url} target = "_blank" rel = "noopener noreferrer">
                read more...
            </a>
        </div>
    </article>
);

export default NewsItem;