import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../Components/site.css';

export default class HomeView extends Component {
    render() {
        return (
            <div className="container">
                <h1>Home</h1>
                { this.props.username ?
                    <p>Welcome, {this.props.username}.</p> :
                    <p>Welcome to the WebAds.</p>
                }
            </div>
        );
    }
}


