import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class CreateAdView extends Component {
    render() {
        return (
            <div className="container">

                <form className="create-ad-form form-group" onSubmit={this.submitForm.bind(this)}>
                    <h1>Create new Ad</h1>
                    <label>
                        <div>Category:</div>
                        <select className="form-control" name="category" ref={e => this.categoryField = e}>
                            <option value="cars">Cars</option>
                            <option value="motorcycles">Motorcycles</option>
                            <option value="buses">Buses</option>
                            <option value="trucks">Trucks</option>
                            <option value="agricultural">Agricultural</option>
                        </select>
                    </label><br/>
                    <label>
                        <div>Title:</div>
                        <input className="form-control" type="text" name="title" required
                               ref={e => this.titleField = e} />
                    </label><br/>
                    <label>
                        <div>Author:</div>
                        <input className="form-control" type="text" name="author" required
                               ref={e => this.authorField = e} />
                    </label><br/>
                    <label>
                        <div>Description:</div>
                        <textarea className="form-control" name="description" rows="10" cols="50"
                                  ref={e => this.descriptionField = e} />
                    </label><br />
                    <label>
                        <div>Image:</div>
                        <input type="text" name="image" cols="10"
                               ref={e => this.imageField = e} />
                    </label><br />
                    <div>
                        <input type="submit" className="submitButton btn btn-primary" value="Create" />
                    </div>
                </form>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.categoryField.value,
            this.titleField.value,
            this.authorField.value,
            this.descriptionField.value,
            this.imageField.value,

        );
    }
}

