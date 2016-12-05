import React, { Component } from 'react';


export default class MessagesView extends Component {
    render() {
        //console.dir(this.props.ads)
        let userId = this.props.userId;
        let messagesRows = this.props.messages.filter(m => m.adAuthor === userId).map(mess =>

                <div key={mess._id}>
                    <div>{mess.title}</div>
                    <div>{mess.description}</div>
                    <div>{mess.author}</div>
                    <div>{mess.email}</div>
                    <div>{mess.date}</div>
                    {this.getActions(mess)}
                </div>


        );

        return (
            <div className="messages-view">{messagesRows}</div>
        );
    }

    getActions(mess) {
            return (
                    <input type="button" value="X"
                           onClick={this.props.deleteMessageClicked.bind(this, mess._id)} />
            );

    }
}