import React, { Component } from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router';
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        let username = this.props.username;
        if (username == null) {
            // No user logged in
            return (
                <nav className="navigation-bar">
                    <Navbar>
                        <Link to="/" onClick={this.props.homeClicked}>Home</Link>
                        <Link to="/allAds" onClick={this.props.adsClickedForNonLoggedUser}>Ads</Link>
                        <Link to="/login" onClick={this.props.loginClicked}>Login</Link>
                        <Link to="/register" onClick={this.props.registerClicked}>Register</Link>

                    </Navbar>
                </nav>
            );
        } else {
            // User logged in
            return (
                <nav className="navigation-bar">
                    <Navbar>
                        <Link to="/" onClick={this.props.homeClicked}>Home</Link>
                        <Link to="/createAd" onClick={this.props.createAdClicked}>Create Ad</Link>

                        <Link to="/allAds" onClick={this.props.allAdsClicked}>Ads</Link>
                        <Link href="/messages" onClick={this.props.messagesClicked}>
                            Messages</Link>
                        <Link href="/search" onClick={this.props.createAdClicked}>
                            Search</Link>
                        <span className="loggedInUser">
                            Welcome, {username}!
                        </span>
                        <Link to="/" onClick={this.props.logoutClicked}>Logout</Link>
                    </Navbar>
                </nav>
            );
        }
    }
}
