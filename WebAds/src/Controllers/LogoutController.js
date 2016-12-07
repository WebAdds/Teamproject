import logoutUser from '../Models/LogoutModel'
import showHomeView from '../Controllers/HomeController'

function logout() {
    logoutUser();
    sessionStorage.clear();
    this.setState({username: null, userId: null});
    showHomeView.bind(this)();
    this.showInfo('Logout successful.');
}

export default logout