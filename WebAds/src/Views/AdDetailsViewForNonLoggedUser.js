import React, { Component } from 'react';


export default class AdDetailsViewForNonLoggedUser extends Component {
    render() {

        let ad = this.props.ad;
        let adRow = (

               <div>
                    <div><img src={ad.image} alt=""/></div>
                    <div>{ad.title}</div>
                    <div>{ad.description}</div>
                    <div>{ad.author}</div>
                    <div>{ad.date}</div>
                    {this.getActions(ad, this.props.userId)}
                </div>

        );
            return (
                <div className="ads-view">{adRow}
                </div>

            );

    }

    getActions(ad) {
           return <div>
               <input type="button" value="Write on author ad"
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