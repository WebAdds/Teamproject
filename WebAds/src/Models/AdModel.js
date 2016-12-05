import requester from './requester'
import $ from 'jquery'

function createAd(category, title, author, description, image) {
    let date = Date.now();
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads",
        headers: requester.kinveyAppAuthHeaders,
        data: { category, title, author, description, image, date }
    });

}

function findAdByIdGuest(adId) {
    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads/" + adId,
        headers: requester.getGuestUserAuthHeaders()
    });
}

function findAdById(adId) {
    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads/" + adId,
        headers: requester.getKinveyUserAuthHeaders()
    });
}

function findAllAdsGuest() {
    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads",
        headers: requester.getGuestUserAuthHeaders()
    });
}

function findAllAds() {
    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads",
        headers: requester.getKinveyUserAuthHeaders()
    });
}

function editAd(adId, category, title, author, description, image) {
    return $.ajax({
        method: "PUT",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads/" + adId,
        headers: requester.getKinveyUserAuthHeaders(),
        data: { category, title, author, description, image }
    });
}

function deleteAd(adId) {
    return $.ajax({
        method: "DELETE",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads/" + adId,
        headers: requester.getKinveyUserAuthHeaders()
    });
}

export {
    createAd,
    findAdByIdGuest,
    findAdById,
    findAllAdsGuest,
    findAllAds,
    editAd,
    deleteAd
}