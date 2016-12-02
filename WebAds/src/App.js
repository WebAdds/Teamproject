import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import HomeView from './Views/HomeView';
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import CreateAdView from './Views/CreateAdView';
import EditAdView from './Views/EditAdView';
import DeleteAdView from './Views/DeleteAdView';
import AdsView from './Views/AdsView';

import KinveyRequester from './KinveyRequester';
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
                homeClicked={this.showHomeView.bind(this)}
                loginClicked={this.showLoginView.bind(this)}
                registerClicked={this.showRegisterView.bind(this)}
                adsClicked={this.showAdsView.bind(this)}
                createAdClicked={this.showCreateAdView.bind(this)}
                logoutClicked={this.logout.bind(this)} />
            <div id="loadingBox">Loading ...</div>
            <div id="infoBox">Info</div>
            <div id="errorBox">Error</div>
          </header>
          <main id="main"></main>
          <Footer />
        </div>
    );
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

    // Initially load the "Home" view when the app starts
    this.showHomeView();
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
  }

  showView(reactViewComponent) {
    ReactDOM.render(reactViewComponent,
        document.getElementById('main'));
    $('#errorBox').hide();
  }

  showHomeView() {
    this.showView(<HomeView username={this.state.username} />);
  }

  showLoginView() {
    this.showView(<LoginView onsubmit={this.login.bind(this)} />);
  }

  login(username, password) {
    KinveyRequester.loginUser(username, password)
        .then(loginSuccess.bind(this));

    function loginSuccess(userInfo) {
      this.saveAuthInSession(userInfo);
      this.showAdsView();
      this.showInfo("Login successful.");
    }
  }

  showRegisterView() {
    this.showView(<RegisterView onsubmit={this.register.bind(this)} />);
  }

  register(username, password) {
    KinveyRequester.registerUser(username, password)
        .then(registerSuccess.bind(this));

    function registerSuccess(userInfo) {
      this.saveAuthInSession(userInfo);
      this.showAdsView();
      this.showInfo("User registration successful.");
    }
  }

  saveAuthInSession(userInfo) {
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
    sessionStorage.setItem('username', userInfo.username);

    // This will update the entire app UI (e.g. the navigation bar)
    this.setState({
      username: userInfo.username,
      userId: userInfo._id
    });
  }

  logout() {
    KinveyRequester.logoutUser();
    sessionStorage.clear();
    this.setState({username: null, userId: null});
    this.showHomeView();
    this.showInfo('Logout successful.');
  }

  showAdsView() {
    KinveyRequester.findAllAds()
        .then(loadAdsSuccess.bind(this));

    function loadAdsSuccess(ads) {
      this.showInfo("Ads loaded.");
      this.showView(
          <AdsView
              ads={ads}
              userId={this.state.userId}
              editAdClicked={this.prepareAdForEdit.bind(this)}
              deleteAdClicked={this.confirmAdDelete.bind(this)}
          />
      );
    }
  }

  prepareAdForEdit(adId) {
    KinveyRequester.findAdById(adId)
        .then(loadAdForEditSuccess.bind(this));

    function loadAdForEditSuccess(adInfo) {
      this.showView(
          <EditAdView
              onsubmit={this.editAd.bind(this)}
              adId={adInfo._id}
              title={adInfo.title}
              author={adInfo.author}
              description={adInfo.description}
          />
      );
    }
  }

  editAd(adId, title, author, description) {
    KinveyRequester.editAd(adId, title, author, description)
        .then(editAdsuccess.bind(this));

    function editAdsuccess() {
      this.showAdsView();
      this.showInfo("Ad created.");
    }
  }

  confirmAdDelete(adId) {
    KinveyRequester.findAdById(adId)
        .then(loadAdForDeleteSuccess.bind(this));

    function loadAdForDeleteSuccess(adInfo) {
      this.showView(
          <DeleteAdView
              onsubmit={this.deleteAd.bind(this)}
              adId={adInfo._id}
              title={adInfo.title}
              author={adInfo.author}
              description={adInfo.description}
          />
      );
    }
  }

  deleteAd(adId) {
    KinveyRequester.deleteAd(adId)
        .then(deleteAdsuccess.bind(this));

    function deleteAdsuccess() {
      this.showAdsView();
      this.showInfo("Ad deleted.");
    }
  }

  showCreateAdView() {
    this.showView(<CreateAdView onsubmit={this.createAd.bind(this)} />);
  }

  createAd(title, author, description) {
    KinveyRequester.createAd(title, author, description)
        .then(createAdsuccess.bind(this));

    function createAdsuccess() {
      this.showAdsView();
      this.showInfo("Ad created.");
    }
  }
}
