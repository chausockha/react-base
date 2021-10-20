import React from 'react';
import PropTypes from 'prop-types';
PostList.propTypes = {
    postsList: PropTypes.array
}
PostList.defaultProps = {
    postsList: []
}
function PostList(props) {
    const { postsList } = props;
    return (
        <div>
            <ul>
                {postsList.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </div>
    );
};

export default PostList;