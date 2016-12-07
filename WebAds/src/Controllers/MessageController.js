import React from 'react';
import {findAllMessages, createMessage, deleteMessage, createMessageGuest} from "../Models/MessageModel";
import {showAdDetailsView, showAdDetailsGuestView} from "./AdController";
import MessagesView from '../Views/MessagesView'

function showMessagesView(){
    findAllMessages()
        .then(loadMessagesSuccess.bind(this));

    function loadMessagesSuccess(messages) {
        this.showView(
            <MessagesView
                messages={messages}
                userId={this.state.userId}
                deleteMessageClicked={deleteMess.bind(this)}
            />
        );
    }
}

function createMess(author, email, title, description, adAuthor, adId) {
    createMessage(author, email, title, description, adAuthor)
        .then(createMessageSuccess.bind(this));

    function createMessageSuccess() {
        showAdDetailsView.bind(this)(adId);
        this.showInfo("Message was send successful.");



    }
}

function createMessageFromGuest(author, email, title, description, adAuthor, adId) {
    createMessageGuest(author, email, title, description, adAuthor)
        .then(createMessageSuccess.bind(this));

    function createMessageSuccess() {
        showAdDetailsGuestView.bind(this)(adId);
        this.showInfo("Message was send successful.");

    }
}

function deleteMess(messId){

    deleteMessage(messId)
        .then(deleteMessageSuccess.bind(this));

    function deleteMessageSuccess() {
        showMessagesView.bind(this)();
        this.showInfo("Message deleted.");
    }
}

export {
    showMessagesView,
    createMess,
    createMessageFromGuest,
    deleteMess
}