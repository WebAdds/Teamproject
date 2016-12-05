import React from 'react';
import {findAllMessages, createMessage, deleteMessage, createMessageGuest} from "../Models/MessageModel";
import {showAdDetailsView, showAdDetailsViewForNonLoggedUser} from "./AdController";
import MessagesView from '../Views/MessagesView'

function showMessagesView(){
    findAllMessages()
        .then(loadMessagesSuccess.bind(this));

    function loadMessagesSuccess(messages) {
        // if (messages.length > 1){
        //     this.showInfo("You have"+ messages.length +"messages.");
        // }
        // if (messages.length === 1){
        //     this.showInfo("You have 1 message.");
        // }else{
        //     this.showInfo("Non have messages.");
        // }

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
        this.showInfo("Message was send successful.");
        showAdDetailsView(adId);




    }
}

function createMessageForNonLoggedUser(author, email, title, description, adAuthor, adId) {
    createMessageGuest(author, email, title, description, adAuthor)
        .then(createMessageSuccess.bind(this));

    function createMessageSuccess() {
        this.showInfo("Message was send successful.")
        showAdDetailsViewForNonLoggedUser(adId);
        ;



    }
}

function deleteMess(messId){

    deleteMessage(messId)
        .then(deleteMessageSuccess.bind(this));

    function deleteMessageSuccess() {
        showMessagesView();
        this.showInfo("Message deleted.");
    }
}

export {
    showMessagesView,
    createMess,
    createMessageForNonLoggedUser,
    deleteMess
}