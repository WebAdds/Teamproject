import React, { Component } from 'react';


export default class AdDetailsView extends Component {
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

        // let commentsRows;
        // if(this.props.comments != null) {
        //     commentsRows = this.props.comments.map(comment =>
        //         <div key={comment._id}>
        //             <div>{comment.comment}</div>
        //             <div>{comment.userId}</div>
        //             <div>{comment.date}</div>
        //             {this.getActionsComments(comment, this.props.userId)}
        //
        //         </div>
        //     )
        // }

        //let username = this.props.username;
        //if (username == null){
            return (
                <div className="ads-view">{adRow}
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*<br/>*/}

                    {/*<div>Za da commentirash</div>*/}
                    {/*{commentsRows}*/}
                </div>

            );

        // }else{
        //     return (
        //         <div className="ads-view">{adRow}
        //             <br/>
        //             <br/>
        //             <br/>
        //
        //             <form className="create-comment-form" onSubmit={this.submitForm.bind(this)}>
        //                 <label>
        //                     <div>Comments: </div>
        //                     <textarea name="comment" rows="10"
        //                               ref={e => this.commentField = e}></textarea>
        //                 </label>
        //                 <label>
        //                     <div></div>
        //                     <input type="submit" value="Comment" />
        //                 </label>
        //             </form>
        //             {commentsRows}
        //         </div>
        //     );
        //
        // }

    }

    getActions(ad, userId) {
        if (ad._acl.creator === userId)
            return (
                <div>
                    <input type="button" value="Edit"
                           onClick={this.props.editAdClicked.bind(this, ad._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.deleteAdClicked.bind(this, ad._id)} />
                </div>

           );
       else
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