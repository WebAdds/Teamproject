import requester from './requester'
import $ from 'jquery'

function registerUser(username, password, confirmPassword, email) {
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "user/" + requester.appKey + "/",
        headers: requester.headers,
        data: { username, password, confirmPassword, email }
    });
}

export default registerUser