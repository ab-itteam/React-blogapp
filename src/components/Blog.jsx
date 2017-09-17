import React, { Component } from 'react';
import {AllPostsContainer} from '../containers/Post';
import {NewPostContainer} from '../containers/NewPost';

class Blog extends Component {
    render() {
        return (
            <div>
                <h1>My Personal Blog</h1>
                <AllPostsContainer/>
                <NewPostContainer/>
            </div>

        );
    }
}

export default Blog;
