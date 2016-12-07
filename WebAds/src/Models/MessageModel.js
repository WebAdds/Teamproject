import requester from './requester'
import $ from 'jquery'

function createMessage(author, email, title, description, adAuthor) {
    let date = new Date();
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/messages",
        headers: requester.getKinveyUserAuthHeaders(),
        data: { author, email, title, description, adAuthor, date }
    });
}

function createMessageGuest(author, email, title, description, adAuthor, adId) {
    let date = new Date();
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/messages",
        headers: requester.getGuestUserAuthHeaders(),
        data: { author, email, title, description, adAuthor, adId, date }
    });
}

function findAllMessages() {
    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/messages?query={}&sort={\"_kmd.lmt\": -1}",
        headers: requester.getKinveyUserAuthHeaders()
    });
}
function deleteMessage(messId) {
    return $.ajax({
        method: "DELETE",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/messages/" + messId,
        headers: requester.getKinveyUserAuthHeaders()
    });
}

export {
    createMessage,
    createMessageGuest,
    findAllMessages,
    deleteMessage
}
