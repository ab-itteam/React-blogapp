import React from 'react';
import { connect } from 'react-redux';

export class AllPosts extends React.Component {
    render() {
        return (
            <ul>
                {this.props.posts.map(this.renderPost.bind(this))}
            </ul>
        );
    }
    renderPost(postData) {
        return (
            <li key={postData.title}>
                {postData.title}
            </li>);
    }
}

function mapStateToProperties(state) {
    return {
        posts: state.posts
    };
}

export const AllPostsContainer  = connect(mapStateToProperties)(AllPosts);