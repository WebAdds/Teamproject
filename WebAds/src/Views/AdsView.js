import React, { Component } from 'react';

export default class AdsView extends Component {
    render() {
        let adRows = this.props.ads.map(ad =>

            <div key={ad._id}>
                <div>{ad.title}</div>
                <div>{ad.author}</div>
                <div>{ad.description}</div>
                {this.getActions(ad, this.props.userId)}
            </div>
        );

        return (
            <div className="ads-view">

                    {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>Title</th>*/}
                            {/*<th>Author</th>*/}
                            {/*<th>Description</th>*/}
                            {/*<th>Actions</th>*/}
                        {/*</tr>*/}
                    {/*</thead>*/}

                        {adRows}


            </div>
        );
    }

    getActions(ad, userId) {
        if (ad._acl.creator === userId)
            return (
                <td>
                    <input type="button" value="Edit"
                        onClick={this.props.editAdClicked.bind(this, ad._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                       onClick={this.props.deleteAdClicked.bind(this, ad._id)} />
                </td>
            );
        else
            return <td></td>;
    }
}
