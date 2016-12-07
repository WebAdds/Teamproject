import React, { Component } from 'react';
import '../Components/site.css';

export default class HomeView extends Component {
    render() {
        return (

                <div className="container">
                    <h1 id="greetingsHeading">Greetings</h1>
                    { this.props.username ?
                        <p>Welcome, {this.props.username}.</p> :
                        <p>Welcome to the WebAds.</p>

                    }


                    <p>Here you can post for <strong><u>free</u></strong> everything that you want to sell/buy. Just login into your account and
                        click the <strong>New Advertisment</strong> link. If you are not in our system, you can still browse the collection
                        of advertisments our other users have. Enjoy your stay!</p><br />

                    <p>Get started advertising your products.
                        There are legions of users who might love your themes — but first they need to know about it.
                        Promote your ads on our site. Reach new audiences.
                        It's fast and easy to get started. Select the product you want to advertise and start your campaign!
                    </p>




                </div>


        );
    }
}
