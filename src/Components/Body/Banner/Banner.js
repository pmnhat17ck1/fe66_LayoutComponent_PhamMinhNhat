import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let title = 'A Warm Welcome';
        let content = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos asperiores nisi provident, velit voluptatum iste vel? Accusamus a'
        return (
            <div className="jumbotron mt-4">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{content}</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>

        )
    }
}
