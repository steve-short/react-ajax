import React, {Component} from 'react';
import axios from 'axios';
import './NewPost.css';
import {Redirect} from 'react-router-dom';


class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    };

    componentDidMount() {
        console.log(this.props);
        //another way to only allow authorized users in:
        // if (unauthorized) this.props.history.replace('/posts');
    };

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                // this.setState({submitted: true});
                //alternatively you can do this:
                //or use replace instead of push:
                this.props.history.push('/posts');
            });
    };

    render() {
        let submitRedirect = null;
        if (this.state.submitted) {
            submitRedirect = <Redirect to="/posts"/>;
        }
        //I added the CSS class InheritedCssClass to Posts.css to show that it is global once imported
        return (
            <div className="NewPost">
                {submitRedirect}
                <h1 className="InheritedCssClass">Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                       onChange={(event) => this.setState({title: event.target.value})}/>
                <label>Content</label>
                <textarea rows="4" value={this.state.content}
                          onChange={(event) => this.setState({content: event.target.value})}/>
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    };
}

export default NewPost;