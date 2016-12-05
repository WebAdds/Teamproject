import React, { Component } from 'react';


export default class MyAdsView extends Component {
    render() {
        //console.dir(this.props.ads)
        let userId = this.props.userId;
        let adRows = this.props.ads.filter(a => a._acl.creator === userId).map(ad =>

            <div key={ad._id}>
                <a href="#" onClick={this.props.adDetailsClicked.bind(this, ad._id)}>
                    <div><img src={ad.image} alt=""/></div>
                    <div>{ad.title}</div>
                    <div>{ad.description}</div>
                    <div>{ad.author}</div>
                    <div>{ad.date}</div>
                </a>
            </div>

        );

        return (
            <div className="ads-view">{adRows}</div>
        );
    }
}
