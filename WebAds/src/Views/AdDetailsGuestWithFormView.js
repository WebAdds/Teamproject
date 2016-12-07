import React, { Component } from 'react';
import '../Components/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class AdDetailsGuestWithFormView extends Component {
    render() {

        let ad = this.props.ad;
        let adRow = (

            <div>
                <div>
                <div><img src={ad.image} alt=""/></div>
                <div>{ad.title}</div>
                <div>{ad.description}</div>
                <div>{ad.author}</div>
                </div>
                <div className="messagesDiv">
                    <form className="messages-form" onSubmit={this.submitForm.bind(this)}>
                        <label>
                            <div><span className="label label-warning">Author:</span></div>
                            <input className="form-control" type="text" name="author" required
                                   ref={e => this.authorField = e} />
                        </label><br/>
                        <label>
                            <div><span className="label label-warning">Email:</span></div>
                            <input className="form-control" type="email" name="email"
                                   ref={e => this.emailField = e} />
                        </label><br/>
                        <label>
                            <div><span className="label label-warning">Title:</span></div>
                            <input className="form-control" type="text" name="title" required
                                   ref={e => this.titleField = e} />
                        </label><br/>
                        <label>
                            <div><span className="label label-warning">Description</span></div>
                            <textarea className="form-control" name="description" rows="6" cols="50" required
                                      ref={e => this.descriptionField = e} />
                        </label><br/>

                        <div>
                            <input type="submit" className="submitButton btn btn-primary" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>


        );

        return (
            <div className="ads-view">{adRow}
            </div>

        );
    }


    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.authorField.value,
            this.emailField.value,
            this.titleField.value,
            this.descriptionField.value,
            this.props.ad._acl.creator,
            this.props.ad._id
        );
    }
}