import HomeView from '../Views/HomeView'
import React from 'react';

function   showHomeView() {
    this.showView(<HomeView username={this.state.username} />);
}

export default showHomeView