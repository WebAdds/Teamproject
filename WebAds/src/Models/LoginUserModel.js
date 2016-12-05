import requester from './requester'
import $ from 'jquery'

function loginUser(username, password) {
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "user/" + requester.appKey + "/login",
        headers: requester.kinveyAppAuthHeaders,
        data: { username, password }
    });
}

export default loginUser