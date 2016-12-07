import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class AdDetailsView extends Component {
    render() {
console.log(this.props.ad)
        let ad = this.props.ad;
        let adRow = (

            <div className="panel-body adDiv">
                <div>
                <div className="picFrame">
                    <img className="picSize img-thumbnail" src={ad.image} alt=""/>
                    <br/><br/><br/>
                    {this.getActions(ad, this.props.userId)}
                    </div>
                    <div></div>
                <div className="adTitles">{ad.title}</div>
                <div className="adDescription">{ad.description}</div>
                <div className="adAuthor">Автор: {ad.author} / Дата на публикуване: {ad.date.toString().substr(4, 11)}</div>

                </div>

            </div>

        );
            return (
                <div className="ads-view">{adRow}
                </div>

            );

    }

    getActions(ad, userId) {
        if (ad._acl.creator === userId)
            return (
                <div>
                    <input className="btn btn-primary" type="button" value="Edit"
                           onClick={this.props.editAdClicked.bind(this, ad._id)} />

                    &nbsp;
                    <input className="btn btn-primary" type="button" value="Delete"
                           onClick={this.props.deleteAdClicked.bind(this, ad._id)} />
                </div>

           );
       else
           return <div className="viewMore">
               <input className="btn btn-primary" type="button" value="Send Message"
                      onClick={this.props.sendMessagesClicked.bind(this, ad._id)} />
           </div>;
    }

}