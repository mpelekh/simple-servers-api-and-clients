import { Router, Route, browserHistory } from 'react-router';
import React from 'react';

import Root from './containers/Root';
import Contacts from './containers/Contacts';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Contacts}></Route>
    </Router>
);