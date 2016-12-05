import RegisterView from '../Views/RegisterView'
import registerUser from '../Models/RegisterUserModel';
import showHomeView from '../Controllers/HomeController'
import React from 'react';

function showRegisterView() {
    this.showView(<RegisterView onsubmit={register.bind(this)}/>);
}

function register(username, password, confirmPassword, email) {
    if(password === confirmPassword && password.length >= 5) {
    registerUser(username, password, confirmPassword, email)
        .then(registerSuccess.bind(this));
    }else {

        this.showError("Non equal passwords")
    }

    function registerSuccess(userInfo) {
        this.saveAuthInSession(userInfo);
        showHomeView.bind(this)();
        this.showInfo("User registration successful.");
    }
}

export default showRegisterView