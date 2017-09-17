import React, { Component } from 'react';
import {AllPostsContainer} from '../containers/Post';

class Blog extends Component {
    render() {
        return (
            <div>
                <h1>My Personal Blog</h1>
                <AllPostsContainer/>

            </div>

        );
    }
}

export default Blog;
