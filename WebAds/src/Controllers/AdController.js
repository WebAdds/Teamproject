import CreateAdView from '../Views/CreateAdView';
import EditAdView from '../Views/EditAdView';
import DeleteAdView from '../Views/DeleteAdView';
import MyAdsView from '../Views/MyAdsView';
import AdDetailsView from '../Views/AdDetailsView';
import AdDetailsWithFormView from '../Views/AdDetailsWithFormView'
//import {createMessage} from '../Models/MessageModel';
import AdsView from '../Views/AdsView';
import AdsViewForNonLoggedUser from '../Views/AdsViewForNonLoggedUser'
import AdDetailsViewForNonLoggedUser from '../Views/AdDetailsViewForNonLoggedUser'
import AdDetailsViewFormNonLoggedUser from '../Views/AdDetailsViewFormForNonLoggedUser'
import {createMessageForNonLoggedUser, createMess} from './MessageController'
import React from 'react';
import {findAdById, createAd, findAllAds, editAd, deleteAd, findAdByIdGuest, findAllAdsGuest} from "../Models/AdModel";


function showAdsView() {
    findAllAds()
        .then(loadAdsSuccess.bind(this));

    function loadAdsSuccess(ads) {
        this.showInfo("Ads loaded.");
        this.showView(
            <AdsView
                ads={ads}
                userId={this.state.userId}
                editAdClicked={prepareAdForEdit.bind(this)}
                deleteAdClicked={confirmAdDelete.bind(this)}
                adDetailsClicked={showAdDetailsView.bind(this)}

            />
        );
    }
}

function showAdsViewForNonLoggedUser() {
    findAllAdsGuest()
        .then(loadAdsSuccess.bind(this));

    function loadAdsSuccess(ads) {
        this.showInfo("Ads loaded.");
        this.showView(
            <AdsViewForNonLoggedUser
                ads={ads}
                userId={this.state.userId}
                adDetailsClickedForNonLoggedUser={showAdDetailsViewForNonLoggedUser.bind(this)}

            />
        );
    }
}

function showAdDetailsViewForNonLoggedUser(adId) {
        findAdByIdGuest(adId).then(loadAdSuccess.bind(this));
        function loadAdSuccess(ad) {
            this.showInfo("Ad loaded.");

            this.showView(
                <AdDetailsViewForNonLoggedUser
                    ad={ad}
                    userId={this.state.userId}
                    sendMessagesClicked={showAdDetailsViewFormNonLoggedUser.bind(this)}
                />
            );
        }
    }

function showAdDetailsViewFormNonLoggedUser(adId) {
   findAdByIdGuest(adId).then(loadAdSuccess.bind(this));
        function loadAdSuccess(ad) {
            this.showInfo("Ad loaded.");

            this.showView(
                <AdDetailsViewFormNonLoggedUser
                    ad={ad}
                    userId={this.state.userId}
                    onsubmit={createMessageForNonLoggedUser.bind(this)}
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
        showAdsView();
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

    function editAdSuccess() {
        showAdsView();
        this.showInfo("Ad created.");
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
        showAdsView();
        this.showInfo("Ad deleted.");
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
        this.showView(
            <AdDetailsWithFormView
                ad={ad}
                userId={this.state.userId}
                onsubmit={createMess.bind(this)}
            />
        );
    }
}


export {
    showAdsView,
    showAdsViewForNonLoggedUser,
    showMyAdsView,
    showCreateAdView,
    showAdDetailsView,
    showAdDetailsViewForNonLoggedUser,
    showAdDetailsWithFormView,
    showAdDetailsViewFormNonLoggedUser
}


