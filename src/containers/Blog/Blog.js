import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios'; //load the axios.js that we created our instance in
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Route, Link} from 'react-router-dom';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                // pathname: this.props.match.url + '/new-post', //relative path appends to current url
                                pathname: '/new-post', //absolute path appends to root domain
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts/>}/>*/}
                {/*<Route path="/new-post" exact render={() => <NewPost/>}/>*/}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>

            </div>
        );
    };
}

export default Blog;