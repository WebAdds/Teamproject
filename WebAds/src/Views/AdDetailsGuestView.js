import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class AdDetailsGuestView extends Component {
    render() {

        let ad = this.props.ad;
        let adRow = (

            <div className="panel-body adDiv">
                <div>
                <div className="picFrame">
                    <img className="picSize img-thumbnail" src={ad.image} alt=""/>
                    <br/><br/><br/>
                    {this.getActions(ad, this.props.userId)}
                </div>
                <div className="adTitles">{ad.title}</div>
                <div className="adDescription">{ad.description}</div>
                <div className="adAuthor">{ad.author}</div>
                <div className="adAuthor">{ad.date.toString().substr(4, 11)}</div>
                </div>
            </div>

        );
            return (
                <div className="ads-view">{adRow}
                </div>

            );

    }

    getActions(ad) {
           return <div className="viewMore">
               <input className="btn btn-primary" type="button" value="Send Message"
                      onClick={this.props.sendMessagesClicked.bind(this, ad._id)} />
           </div>;
    }


    // getActionsComments(comment, userId) {
    //     console.log("yes")
    //     if (comment._acl.creator === userId)
    //         return (
    //             <div>
    //                 <input type="button" value="Edit"
    //                        onClick={this.props.editCommentClicked.bind(this, comment._id)} />
    //                 &nbsp;
    //                 <input type="button" value="Delete"
    //                        onClick={this.props.deleteCommentClicked.bind(this, comment._id)} />
    //             </div>
    //         );
    //     else
    //         return <div></div>;
    // }
    //
    // submitForm(event){
    //
    //     event.preventDefault();
    //     this.props.onsubmit(
    //         this.props.ad._id,
    //         this.commentField.value
    //     );
    // }
}