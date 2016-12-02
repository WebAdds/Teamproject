import React, { Component } from 'react';


export default class AdDetailsView extends Component {
    render() {
        let ad = this.props.ad;
        let adRow = (
            <div>
                    <div><img src={ad.image}></img></div>
                    <div>{ad.title}</div>
                    <div>{ad.description}</div>
                    <div>{ad.author}</div>
                    {this.getActions(ad, this.props.userId)}
            </div>
        );

        return (

                <div className="ads-view">{adRow}</div>
        );
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
            return <div></div>;
    }
}