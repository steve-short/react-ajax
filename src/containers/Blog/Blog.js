import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios'; //load the axios.js that we created our instance in
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Route, NavLink, Switch} from 'react-router-dom';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*<li><Link to="/">Home</Link></li>*/}
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post', //relative path appends to current url
                                pathname: '/new-post', //absolute path appends to root domain
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts/>}/>*/}
                {/*<Route path="/new-post" exact render={() => <NewPost/>}/>*/}
                {/*Routes are processed in order. Without the Switch it could process more than one route. Switch processes first route that matches*/}
                <Switch>
                    <Route path="/" exact component={Posts}/>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    };
}

export default Blog;