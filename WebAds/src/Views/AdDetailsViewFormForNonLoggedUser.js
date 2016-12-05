import React, { Component } from 'react';


export default class AdDetailsViewFormForNonLoggedUser extends Component {
    render() {

        let ad = this.props.ad;
        let adRow = (

            <div>
                <div>
                <div><img src={ad.image} alt=""/></div>
                <div>{ad.title}</div>
                <div>{ad.description}</div>
                <div>{ad.author}</div>
                <div>{ad.date}</div>
                </div>
            <div>
                <form className="messages-form" onSubmit={this.submitForm.bind(this)}>
                    <label>
                        <div>Author:</div>
                        <input type="text" name="author" required
                               ref={e => this.authorField = e} />
                    </label>
                    <label>
                        <div>Email:</div>
                        <input type="email" name="email"
                               ref={e => this.emailField = e} />
                    </label>
                    <label>
                        <div>Title:</div>
                        <input type="text" name="title" required
                               ref={e => this.titleField = e} />
                    </label>
                    <label>
                        <div>Description:</div>
                        <input type="text" name="description" required
                               ref={e => this.descriptionField = e} />
                    </label>

                    <div>
                        <input type="submit" className="submitButton" value="Send Message" />
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