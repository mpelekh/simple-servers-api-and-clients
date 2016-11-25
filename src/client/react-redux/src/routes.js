import { Router, Route, browserHistory } from 'react-router';
import React from 'react';

import Root from './containers/Root';
import Contacts from './containers/Contacts';
import Contact from './containers/Contact';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Contacts}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/contacts/:id" component={Contact}></Route>
    </Router>
);