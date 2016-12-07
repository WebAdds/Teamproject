import CreateAdView from '../Views/CreateAdView';
import EditAdView from '../Views/EditAdView';
import DeleteAdView from '../Views/DeleteAdView';
import MyAdsView from '../Views/MyAdsView';
import AdDetailsView from '../Views/AdDetailsView';
import AdDetailsWithFormView from '../Views/AdDetailsWithFormView'
import AdsView from '../Views/AdsView';
import AdsGuestView from '../Views/AdsGuestView'
import AdDetailsGuestView from '../Views/AdDetailsGuestView'
import AdDetailsGuestWithFormView from '../Views/AdDetailsGuestWithFormView'
import SearchResultsView from  '../Views/SearchResultsView';
import {createMessageFromGuest, createMess} from './MessageController'
import React from 'react';
import {findAdById, createAd, findAllAds, editAd, deleteAd, findAdByIdGuest, findAllAdsGuest, search} from "../Models/AdModel";


function showAdsView() {
    findAllAds()
        .then(loadAdsSuccess.bind(this));

    function loadAdsSuccess(ads) {
        this.showInfo("Ads loaded.");
        this.showView(
            <AdsView
                ads={ads}
                userId={this.state.userId}
                adDetailsClicked={showAdDetailsView.bind(this)}

            />
        );
    }
}

function showAdDetailsView(adId) {
    findAdById(adId).then(loadAdSuccess.bind(this));
    function loadAdSuccess(ad) {
        this.showInfo("Ad loaded.");
        this.showView(
            <AdDetailsView
                ad={ad}
                userId={this.state.userId}
                editAdClicked={prepareAdForEdit.bind(this)}
                deleteAdClicked={confirmAdDelete.bind(this)}
                sendMessagesClicked={showAdDetailsWithFormView.bind(this)}
            />
        );
    }
}

function showAdDetailsWithFormView(adId) {
    findAdById(adId).then(loadAdSuccess.bind(this));
    function loadAdSuccess(ad) {
        this.showInfo("Write message.");
        this.showView(
            <AdDetailsWithFormView
                ad={ad}
                userId={this.state.userId}
                onsubmit={createMess.bind(this)}
            />
        );
    }
}

function showAdsGuestView() {
    findAllAdsGuest()
        .then(loadAdsSuccess.bind(this));

    function loadAdsSuccess(ads) {
        this.showInfo("Ads loaded.");
        this.showView(
            <AdsGuestView
                ads={ads}
                userId={this.state.userId}
                adDetailsGuestClicked={showAdDetailsGuestView.bind(this)}

            />
        );
    }
}

function showAdDetailsGuestView(adId) {
    findAdByIdGuest(adId).then(loadAdSuccess.bind(this));
    function loadAdSuccess(ad) {
        this.showInfo("Ad loaded.");

        this.showView(
            <AdDetailsGuestView
                ad={ad}
                userId={this.state.userId}
                sendMessagesClicked={showAdDetailsGuestWithFormView.bind(this, ad._id)}
            />
        );
    }
}

function showAdDetailsGuestWithFormView(adId) {
    findAdByIdGuest(adId).then(loadAdSuccess.bind(this));
    function loadAdSuccess(ad) {
        this.showView(
            <AdDetailsGuestWithFormView
                ad={ad}
                userId={this.state.userId}
                onsubmit={createMessageFromGuest.bind(this)}
            />
        );
    }
}


function showCreateAdView() {
    this.showView(<CreateAdView onsubmit={adCreate.bind(this)}/>);
}

function adCreate(category, title, author, description, image) {
    createAd(category, title, author, description, image)
        .then(createAdSuccess.bind(this));

    function createAdSuccess() {
        showAdsView.bind(this)();
        this.showInfo("Ad created.");

    }
}

function prepareAdForEdit(adId) {
    findAdById(adId)
        .then(loadAdForEditSuccess.bind(this));

    function loadAdForEditSuccess(adInfo) {
        this.showView(
            <EditAdView
                onsubmit={adForEdit.bind(this)}
                adId={adInfo._id}
                category={adInfo.category}
                title={adInfo.title}
                author={adInfo.author}
                description={adInfo.description}
                image={adInfo.image}
            />
        );
    }
}

function adForEdit(adId, category, title, author, description, image) {
    editAd(adId, category, title, author, description, image)
        .then(editAdSuccess.bind(this));

    function editAdSuccess(ad) {
        this.showInfo("Ad edited.");
        this.showView(
            <AdDetailsView
                ad={ad}
                userId={this.state.userId}
                editAdClicked={prepareAdForEdit.bind(this)}
                deleteAdClicked={confirmAdDelete.bind(this)}
                sendMessagesClicked={showAdDetailsWithFormView.bind(this)}
            />
        );
    }
}

function confirmAdDelete(adId) {
    findAdById(adId)
        .then(loadAdForDeleteSuccess.bind(this));

    function loadAdForDeleteSuccess(adInfo) {
        this.showView(
            <DeleteAdView
                onsubmit={adDelete.bind(this)}
                adId={adInfo._id}
                title={adInfo.title}
                author={adInfo.author}
                description={adInfo.description}
                image={adInfo.image}
            />
        );
    }
}

function adDelete(adId) {
    deleteAd(adId)
        .then(deleteAdSuccess.bind(this));

    function deleteAdSuccess() {
        this.showInfo("Ad deleted.");
        findAllAds().then(loadAdsSuccess.bind(this));
        function loadAdsSuccess(ads) {
            this.showView(
                <AdsView
                    ads={ads}
                    userId={this.state.userId}
                    adDetailsClicked={showAdDetailsView.bind(this)}

                />
            );
        }
    }
}


function showMyAdsView() {
    findAllAds()
        .then(loadAdsSuccess.bind(this));

    function loadAdsSuccess(ads) {
        this.showInfo("Ads loaded.");
        this.showView(
            <MyAdsView
                ads={ads}
                userId={this.state.userId}
                editAdClicked={prepareAdForEdit.bind(this)}
                deleteAdClicked={confirmAdDelete.bind(this)}
                adDetailsClicked={showAdDetailsView.bind(this)}

            />
        );
    }

}

function showHomeViewWithSearchResults(keyword) {
    search(keyword)
        .then(loadAdsSuccess.bind(this));
    function loadAdsSuccess(ads) {
        this.showInfo("Ads loaded.");
        this.showView(
            <SearchResultsView
                ads={ads}
                username={this.state.username}
                adDetailsClicked={showAdDetailsView.bind(this)}
            />
        );


    }

}



export {
    showAdsView,
    showAdsGuestView,
    showMyAdsView,
    showCreateAdView,
    showAdDetailsView,
    showAdDetailsGuestView,
    showAdDetailsWithFormView,
    showAdDetailsGuestWithFormView,
    showHomeViewWithSearchResults,
    prepareAdForEdit,
    confirmAdDelete
}


