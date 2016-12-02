import React, { Component } from 'react';
// import 'bootstrap';
import 'jquery';
import './NavigationBar.css';
import './site.css';
import earth from './media/earth-grid.png';
import laptop1 from './media/laptop-1.png';
import communication from './media/communication-1.png';
import antenna from './media/antenna.png';
import './quotes';
import 'tooltipster';



export default class NavigationBar extends Component {
    render() {
        let username = this.props.username;
        if (username == null) { // No user logged in
            return (
                <div className="container">
                <header id="menu">
                    <ul className="nav nav-tabs" id="navMenu">
                        <li> <a onClick={this.props.homeClicked} data-toggle="tab" className="tooltip" title="Main page of site" href="#" id="linkHome">
                            <span><img className="topMenuIcons" src={earth} alt="home" /></span>
                            HOME
                        </a></li>
                        <li> <a data-toggle="tab" className="tooltip" title="Learn more about us, or you can see us on the map or if you have questions you can write us in contact form" href="#" id="linkAbout">
                            <span><img className="topMenuIcons" src={laptop1} alt="about" /></span>
                            ABOUT</a></li>
                        <li> <a onClick={this.props.loginClicked} data-toggle="tab" className="tooltip" title="If you are registered user you can login to site from here. Else you can make profil from register menu on right" href="#" id="linkLogin">
                            <span><img className="topMenuIcons" src={communication} alt="login" /></span>
                            LOGIN</a></li>
                        <li> <a onClick={this.props.registerClicked} data-toggle="tab" className="tooltip" title="You can make your personal profil on site here. Wellcome :)" href="#" id="linkRegister">
                            <span><img className="topMenuIcons" src={antenna} alt="register" /></span>
                            REGISTER</a></li>
                    </ul>

                </header>
                </div>


            );

        } else { // User logged in
            return (

                <div className="tab-content">
                <div className="container">
                <header id="menu">
                    <ul class="nav nav-tabs" id="navMenu">
                        <li> <a onClick={this.props.homeClicked} data-toggle="tab" className="tooltip" title="Main page of site" href="#" id="linkHome">
                            <span><img className="topMenuIcons" src={require("./media/earth-grid.png")} alt="home" /></span>
                            HOME
                        </a></li>
                        <li> <a data-toggle="tab" className="tooltip" title="In this section are all your posts" href="#" id="linkMyAdds">
                            <span><img className="topMenuIcons" src={require("./media/speech-bubble.png")} alt="my advertisments" /></span>
                            MY ADVERTISMENTS</a></li>
                        <li> <a onClick={this.props.adsClicked} data-toggle="tab" className="tooltip" title="Here are advertisment from you and all other users" href="#" id="linkListAdds">
                            <span><img className="topMenuIcons" src={require("./media/speech-bubbles.png")} alt="all advertisments" /></span>
                            ALL ADVERTISMENTS</a></li>
                        <li> <a onClick={this.props.createAdClicked} data-toggle="tab" className="tooltip" title="From here you can create new advertisment. Come on. Try it." href="#" id="linkCreateAdd">
                            <span><img className="topMenuIcons" src={require("./media/speaking.png")} alt="new advertisments" /></span>
                            NEW ADVERTISMENT</a></li>
                        <li> <a onClick={this.props.logoutClicked} data-toggle="tab" className="tooltip" title="Exit from your profil" href="#" id="linkLogout">
                            <span><img className="topMenuIcons" src={require("./media/communication.png")} alt="logout" /></span>
                            LOGOUT</a></li>
                    </ul>

                </header>
                </div>
                </div>


                // <nav className="navigation-bar">
                //     <a href="#" onClick={this.props.homeClicked}>Home</a>
                //     <a href="#" onClick={this.props.adsClicked}>
                //         List ads</a>
                //     <a href="#" onClick={this.props.createAdClicked}>
                //         Create Ad</a>
                //     <a href="#" onClick={this.props.logoutClicked}>Logout</a>
                //     <span className="loggedInUser">Welcome, {username}!</span>
                // </nav>
            );

        }
    }
}
