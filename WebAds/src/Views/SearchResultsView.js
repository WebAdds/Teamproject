import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


let adDiv = {
    border: '1px solid black',
    borderRadius: '5px',
    background: 'gray',
    width: '100%',
    height: '350px',
    marginTop: '2%',
    paddingLeft: '2%',
    paddingTop: '2%'
};

let picFrame = {
    width: '250px',
    height: '252px',
    border: '1px solid black',
    borderRadius: '5px',
    background: 'black'
};

let picSize = {
    width: '250px',
    height: '250px'
};






export default class SearchResultsView extends Component {
    render() {
        console.log(this.props.ads);
        let adRows = this.props.ads.map(ad =>

            <div className="panel-body adDiv" key={ad._id}>
                <a href="#" onClick={this.props.adDetailsClicked.bind(this, ad._id)}>
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
