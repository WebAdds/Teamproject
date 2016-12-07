import React, {Component} from 'react';

export default class RegisterView extends Component {
    render() {
        return (
            <div className="tab-content">
                <div className="container">
                    <div className="form-group">
                        <div className="col-md-10">
                            <form className="register-form" onSubmit={this.submitForm.bind(this)}>
                                <h1>Register</h1>
                                <label>
                                    <div><h5>Username:</h5></div>
                                    <input className="form-control" type="text" name="username" required
                                           ref={e => this.usernameField = e}/>
                                </label><br />
                                <label>
                                    <div><h5>Password:</h5></div>
                                    <input className="form-control" type="password" name="password" required
                                           ref={e => this.passwordField = e}/>
                                </label><br />
                                <label>
                                    <div><h5>ConfirmPassword:</h5></div>
                                    <input className="form-control" type="password" name="confirmPassword" required
                                           ref={e => this.confirmPasswordField = e}/>
                                </label><br />
                                <label>
                                    <div><h5>Email:</h5></div>
                                    <input className="form-control" type="email" name="email"
                                           ref={e => this.emailField = e}/>
                                </label><br />
                                <div className="form-group">
                                    <input className="btn btn-primary" type="submit" value="Register"/>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.usernameField.value,
            this.passwordField.value,
            this.confirmPasswordField.value,
            this.emailField.value
        );
    }

}


