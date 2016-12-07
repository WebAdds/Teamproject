const requester = {
    baseUrl: "https://baas.kinvey.com/",
    appKey: "kid_By8VsYafl",
    appSecret: "f2c86d0fc986412ea22b9ca6296fb0e9",
    kinveyAppAuthHeaders: {'Authorization': "Basic " + btoa("kid_By8VsYafl:f2c86d0fc986412ea22b9ca6296fb0e9")},
    getKinveyUserAuthHeaders: function () {
        return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')}
    },
    getGuestUserAuthHeaders: function () {
        return {'Authorization': "Kinvey " + "7dde5e2b-6e82-4d12-b78d-235ba55389f6.hX0A7f35I0F5+/UvTxqw8OHU0+YTOx7BgcPOCfN8duA="}
    }
};

export default requester;