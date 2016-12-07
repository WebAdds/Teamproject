import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';



export default class AdsView extends Component {
    render() {

        let adRows = this.props.ads.sort((a, b) => b.date - a.date).map(ad =>

            <div className="panel-body adDiv" key={ad._id}>
                <a href="#" onClick={this.props.adDetailsClicked.bind(this, ad._id)}>
                <div className="picFrame">
                    <img className="picSize img-thumbnail"  src={ad.image} alt={ad.author}/></div>
                <div className="adTitles"><strong>Заглавие: </strong>{ad.title}</div>
                <div className="adDescription"><strong>Описание: </strong>{ad.description}</div>
                <div className="adAuthor"><strong>Автор: </strong>{ad.author}</div>
                </a>
            </div>
        );

        return (
                <div className="ads-view">{adRows}</div>
        );
    }
}
