import LoginView from '../Views/LoginView'
import loginUser from '../Models/LoginUserModel';
import showHomeView from '../Controllers/HomeController'
import React from 'react';

function showLoginView() {
    this.showView(<LoginView onsubmit={login.bind(this)} />);
}

function login(username, password) {
    loginUser(username, password)
        .then(loginSuccess.bind(this));

    function loginSuccess(userInfo) {
        this.saveAuthInSession(userInfo);
        showHomeView.bind(this)();
        this.showInfo("Login successful.");
    }
}

export default showLoginView