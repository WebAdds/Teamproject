import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import showRegisterView from '../Controllers/RegisterController'
import {showAdsView, showCreateAdView, showAdsViewForNonLoggedUser} from '../Controllers/AdController';
import showLoginView from '../Controllers/LoginController'
import showHomeView from '../Controllers/HomeController'
import {showMyAdsView} from '../Controllers/AdController'
import {showMessagesView} from '../Controllers/MessageController'
import logout from '../Controllers/LogoutController'
import $ from 'jquery';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        };
    }

    render() {
        return (
           <div className="App">
               <header>
                   <NavigationBar
                       username={this.state.username}
                       homeClicked={showHomeView.bind(this)}
                       allAdsClicked={showAdsView.bind(this)}
                       adsClickedForNonLoggedUser={showAdsViewForNonLoggedUser.bind(this)}
                       createAdClicked={showCreateAdView.bind(this)}
                       myAdsClicked={showMyAdsView.bind(this)}
                       messagesClicked={showMessagesView.bind(this)}
                       loginClicked={showLoginView.bind(this)}
		               registerClicked={showRegisterView.bind(this)}
		               logoutClicked={logout.bind(this)}
                   />
                   <div id="loadingBox">Loading ...</div>
                   <div id="infoBox">Info</div>
                   <div id="errorBox">Error</div>
               </header>
               <main id="main"></main>
               <Footer />
           </div>
       )
    }

    componentDidMount() {
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

        // Attach a global AJAX error handler
        $(document).ajaxError(this.handleAjaxError.bind(this));

        // Hide the info / error boxes when clicked
        $("#infoBox, #errorBox").click(function() {
            $(this).fadeOut();
        });

        showHomeView.bind(this)()
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
        setTimeout(function() {
          $('#errorBox').fadeOut();
      }, 3000);
    }

    showView(reactViewComponent) {
        ReactDOM.render(reactViewComponent,
            document.getElementById('main'));
        $('#errorBox').hide();
    }

    saveAuthInSession (userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }
}
