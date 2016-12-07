import requester from './requester'
import $ from 'jquery'

function createAd(category, title, author, description, image) {
    let date = new Date();
    return $.ajax({
        method: "POST",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads",
        headers: requester.getKinveyUserAuthHeaders(),
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
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads?query={}&sort={\"_kmd.lmt\": -1}",
        headers: requester.getGuestUserAuthHeaders()
    });
}

function findAllAds() {
    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + "/ads?query={}&sort={\"_kmd.lmt\": -1}",
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

function search(keyword) {

    return $.ajax({
        method: "GET",
        url: requester.baseUrl + "appdata/" + requester.appKey + `/ads/?query={"$or":[{"category":{"$regex":"^${keyword}"}},{"title":{"$regex":"^${keyword}"}},{"author":{"$regex":"^${keyword}"}}, {"description":{"$regex":"^${keyword}"}},
            {"image":{"$regex":"^${keyword}"}}]}`,
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
    deleteAd,
    search
}