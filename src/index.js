import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './Reducer';
import { Provider } from 'react-redux';


import Blog from './components/Blog.jsx'

const initialState = {
    posts: [
        {  title : 'My first blogpost', text: "Hello this is the first blogpost", }
    ]
};

const store = createStore(reducer,initialState);

ReactDOM.render(
    <Provider store={store}>
        <Blog />
    </Provider>
        , document.getElementById('root'));