import requester from './requester'
import $ from 'jquery'

function logoutUser() {
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "user/" + requester.appKey + "/_logout",
        headers: requester.getKinveyUserAuthHeaders(),
    });
}

export default logoutUser
