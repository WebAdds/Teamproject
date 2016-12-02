import $ from 'jquery';

const KinveyRequester = (function() {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_By8VsYafl";
    const appSecret = "f2c86d0fc986412ea22b9ca6296fb0e9";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function findAllAds() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/ads",
            headers: getKinveyUserAuthHeaders()
        });
    }

    function findAdById(adId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/ads/" + adId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createAd(title, author, description, image) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/ads",
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description, image }
        });
    }

    function editAd(adId, title, author, description, image) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey + "/ads/" + adId,
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description, image }
        });
    }

    function deleteAd(adId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/ads/" + adId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    return {
        loginUser, registerUser, logoutUser,
        findAllAds, createAd, findAdById, editAd, deleteAd
    }
})();

export default KinveyRequester;
