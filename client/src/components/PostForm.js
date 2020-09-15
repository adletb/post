import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            author: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        // axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        axios.post('http://localhost:5000/post', this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    author: '',
                    title: '',
                    body: ''
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { author, title, body } = this.state
        return (
            <div className="container m-5">
                <h1 className="text-primary mb-3">Add Post</h1>
                <form onSubmit={this.submitHandler} className="was-validated">
                    <div className="form-group">
                        <label htmlFor="usr">Name:</label>
                        <input type="text" className="form-control"
                            required pattern="^[a-zA-Z0-9_.-]*$"
                            name="author" value={author}
                            onChange={this.changeHandler} />
                            <div className="valid-feedback">Ok.</div>
                            <div className="invalid-feedback">Only latin letters</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="usr">Title:</label>
                        <input type="text" className="form-control" required
                            name="title" value={title}
                            onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Post:</label>
                        <textarea className="form-control" rows="5" required
                            name="body" value={body}
                            onChange={this.changeHandler} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        )
    }
}

export default PostForm
