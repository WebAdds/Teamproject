import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';

import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Home from './Views/HomeView';
import Login from './Views/LoginView';
import Register from './Views/RegisterView';
import CreateAd from './Views/CreateAdView';
import AdsView from './Views/AdsView';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="createAd" component={CreateAd}/>
            <Route path="allAds" component={AdsView}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
