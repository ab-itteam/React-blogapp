import { Switch, Route } from 'react-router-dom'
import * as React from "react";
import Blog from './Blog';
import {BlogPostContainer} from './../containers/BlogPost';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Blog}/>
            <Route path='/post/:title' component={BlogPostContainer}/>
        </Switch>
    </main>
)

export default Main
