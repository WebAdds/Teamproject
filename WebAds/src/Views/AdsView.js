import React, { Component } from 'react';

export default class AdsView extends Component {
    render() {
        let adRows = this.props.ads.map(ad =>

            <div key={ad._id}>
		<div><img src={ad.image} alt="image"></img></div>
                <div>{ad.title}</div>
                <div>{ad.author}</div>
                <div>{ad.description}</div>
                {this.getActions(ad, this.props.userId)}
            </div>
        );

        return (
            <div className="ads-view">

 

                        {adRows}


            </div>
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
            return <td></td>;
    }
}
