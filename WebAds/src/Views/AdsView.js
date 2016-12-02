import React, { Component } from 'react';

export default class AdsView extends Component {
    render() {
        let adRows = this.props.ads.map(ad =>

            <div key={ad._id}>
                <a href="#" onClick={this.props.adDetailsClicked.bind(this, ad._id)}>
                    <div><img src={ad.image} alt="" /></div>
                    <div>{ad.title}</div>
                    <div>{ad.description}</div>
                    <div>{ad.author}</div>
                </a>
            </div>
        );

        return (
            <div className="ads-view">{adRows}</div>
        );
    }
}
