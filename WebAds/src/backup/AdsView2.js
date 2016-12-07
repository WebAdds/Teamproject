import React, { Component } from 'react';
// import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';










export default class AdsView extends Component {
    render() {
        let adRows = this.props.ads.map(ad =>

            <div className="adDiv" key={ad._id}>
                <div className="picFrame"><img className="picSize img-thumbnail"  src={ad.image} alt={ad.author}/>
                    <div className="viewMore"><button className="btn btn-primary" onClick={this.props.adDetailsClicked.bind(this, ad._id)}>Детайли..</button></div>
                </div>
                <div className="adTitles">Заглавие: {ad.title}</div>
                <div className="adDecsription">Описание: {ad.description}</div>
                <div className="adAuthor">Автор: {ad.author}</div>
            </div>
        );

        return (
                <div className="ads-view">{adRows}</div>
        );
    }
}
