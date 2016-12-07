import React, { Component } from 'react';
import Navbar from './Navbar';
import  '../Components/NavigationBar.css';
import  '../Components/site.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class NavigationBar extends Component {
    render() {
        let username = this.props.username;
        if (username == null) {
            // No user logged in
            return (

                <Navbar>
                    <div className="container">
                        <header id="menu">
                            <ul className="nav nav-tabs" id="navMenu">

                                <li>
                                    <a href="#" onClick={this.props.homeClicked} data-toggle="tab" className="tooltip"
                                          title="Main page of site" id="linkHome"><span><img className="topMenuIcons"
                                                                                             src={require('./media/earth-grid.png')}
                                                                                             alt="home"/></span>
                                        HOME</a>

                                </li>


                                <li>
                                    <a href="#" onClick={this.props.adsClickedGuest} data-toggle="tab"
                                          className="tooltip"
                                          title="Learn more about us, or you can see us on the map or if you have questions you can write us in contact form"
                                          id="linkAbout"><span><img className="topMenuIcons"
                                                                    src={require('./media/laptop-1.png')} alt="about"/></span>ADS</a>

                                </li>


                                <li>
                                    <a href="#" onClick={this.props.loginClicked} data-toggle="tab"
                                          className="tooltip"
                                          title="If you are registered user you can login to site from here. Else you can make profil from register menu on right"
                                          id="linkLogin"><span><img className="topMenuIcons"
                                                                    src={require('./media/communication.png')}
                                                                    alt="login"/></span>LOGIN</a>

                                </li>


                                <li>
                                    <a href="#" onClick={this.props.registerClicked} data-toggle="tab"
                                          className="tooltip"
                                          title="You can make your personal profil on site here. Wellcome :)"
                                          id="linkRegister"> <span><img className="topMenuIcons"
                                                                        src={require('./media/antenna.png')}
                                                                        alt="register"/></span>REGISTER</a>

                                </li>
                            </ul>

                        </header>
                    </div>

                </Navbar>



                // <nav className="navigation-bar">
                //     <Navbar>
                //         <Link to="/" onClick={this.props.homeClicked}>Home</Link>
                //         <Link to="/allAds" onClick={this.props.adsClickedForNonLoggedUser}>Ads</Link>
                //         <Link to="/login" onClick={this.props.loginClicked}>Login</Link>
                //         <Link to="/register" onClick={this.props.registerClicked}>Register</Link>
                //
                //     </Navbar>
                // </nav>
            )
        } else {
            // User logged in
            return (

                <Navbar>
                    <div className="container">
                        <header id="menu">
                            <ul className="nav nav-tabs" id="navMenu">

                                <li>
                                    <a href="#" onClick={this.props.homeClicked} data-toggle="tab" className="tooltip"
                                          title="Main page of site" id="linkHome"><span><img className="topMenuIcons"
                                                                                             src={require('./media/earth-grid.png')}
                                                                                             alt="home"/></span>
                                        HOME</a>

                                </li>







                                <li>
                                    <a href="#" onClick={this.props.createAdClicked} data-toggle="tab" className="tooltip" title="From here you can create new advertisment. Come on. Try it."  id="linkCreateAdd">
                                        <span><img className="topMenuIcons" src={require("./media/speaking.png")} alt="new advertisments" /></span>CREATE ADVERTISE</a>


                                </li>






                                <li>
                                    <a href="#" onClick={this.props.adsClicked} data-toggle="tab"
                                          className="tooltip"
                                          title="Learn more about us, or you can see us on the map or if you have questions you can write us in contact form"
                                          id="linkAbout"><span><img className="topMenuIcons"
                                                                    src={require('./media/laptop-1.png')} alt="about"/></span>ADS</a>

                                </li>


                                <li>
                                    <a href="#" onClick={this.props.messagesClicked} data-toggle="tab"
                                          className="tooltip"
                                          title="You can make your personal profil on site here. Wellcome :)"
                                          id="linkRegister"> <span><img className="topMenuIcons"
                                                                        src={require('./media/letter.png')}
                                                                        alt="register"/></span>MESSAGES</a>

                                </li>
                                <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>

                                <li>

                                    <form onSubmit={this.submitForm.bind(this)}>
                                        <div>
                                        <input className="searchBox" type="text" name="searchBox" required="" ref={e => this.searchBox = e} />

                                        <button className="searchButton btn btn-primary" type="submit">Search</button>
                                        </div>
                                    </form>
                                </li>

                                <li>
                                    <a href="#"  data-toggle="tab"
                                       className="tooltip"
                                       title="You can make your personal profil on site here. Wellcome :)"
                                       id="linkRegister"> <span><img className="topMenuIcons"
                                                                     src={require('./media/speaking.png')}
                                                                     alt="register"/></span> Welcome, {username}!</a>

                                </li>

                                <li>
                                    <a href="#" onClick={this.props.logoutClicked} data-toggle="tab"
                                          className="tooltip"
                                          title="You can make your personal profil on site here. Wellcome :)"
                                          id="linkRegister"> <span><img className="topMenuIcons"
                                                                        src={require('./media/dial.png')}
                                                                        alt="register"/></span>LOGOUT</a>

                                </li>


                            </ul>

                        </header>
                    </div>

                </Navbar>




                    // <Navbar>
                    //     <Link to="/" onClick={this.props.homeClicked}>Home</Link>
                    //     <Link to="/createAd" onClick={this.props.createAdClicked}>Create Ad</Link>
                    //
                    //     <Link to="/allAds" onClick={this.props.allAdsClicked}>Ads</Link>
                    //     <Link href="/messages" onClick={this.props.messagesClicked}>
                    //         Messages</Link>
                    //     <Link href="/search" onClick={this.props.createAdClicked}>
                    //         Search</Link>
                    //     <span className="loggedInUser">
                    //         Welcome, {username}!
                    //     </span>
                    //     <Link to="/" onClick={this.props.logoutClicked}>Logout</Link>
                    // </Navbar>

            );
        }
    }
    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.searchBox.value

        );
    }
}