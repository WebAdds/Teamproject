import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';





export default class AdsGuestView extends Component {
    render() {
        let adRows = this.props.ads.sort((a, b) => b.date - a.date).map(ad =>

            <div className="adDiv" key={ad._id}>
                <a href="#" onClick={this.props.adDetailsGuestClicked.bind(this, ad._id)}>
                <div className="picFrame"><img className="picSize img-thumbnail"  src={ad.image} alt={ad.author}/></div>
                <div className="adTitles">Заглавие: {ad.title}</div>
                <div className="adDescription">Описание: {ad.description}</div>
                <div className="adAuthor">Автор: {ad.author}</div>
                </a>
            </div>
        );

        return (
            <div className="ads-view">{adRows}</div>
        );
    }
}
