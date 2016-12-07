import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class MessagesView extends Component {
    render() {
        let userId = this.props.userId;
        let messagesRows = this.props.messages.sort((a, b) => a.date - b.date).filter(m => m.adAuthor === userId).map(mess =>

            <div className="ads-view">
                <div className="panel-body adDiv" key={mess._id}>

                    <div className="messAuthor">
                        <span className="label-warning">Author: </span>
                        <p>{mess.author}</p>

                    </div>
                    <div className="messTitle">
                        <span className="label-warning">Title:</span>
                        <p>{mess.title}</p>
                    </div>

                    <div className="messDescription">
                        <span className="label-warning">Description:</span>
                        <p>{mess.description}</p>
                    </div>

                    <div className="messEmail">
                        <span className="label-warning">Email:</span>
                        <p>{mess.email}</p>
                    </div>

                    <div className="messDate">
                        <span className="label-warning">Date:</span>
                        <p>{mess.date.toString().substr(4, 11)}</p>
                    </div>
                    {this.getActions(mess)}
                </div>
            </div>


        );


        return (

            <div className="messages-view">{messagesRows}</div>
        );
    }

    getActions(mess) {
            return (
                    <input className="btn btn-primary" type="button" value="Delete message"
                           onClick={this.props.deleteMessageClicked.bind(this, mess._id)} />
            );

    }
}