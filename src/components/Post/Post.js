import React from 'react';
import {withRouter} from 'react-router-dom'; //withRouter makes a component route aware (passes route props to child component

import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1 className="GetShwifty">{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    );
};
 //I added the CSS class GetShwifty to NewPost.css to show that it is global once imported

export default withRouter(post);