import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { App } from './modules/App';
import { Sources } from './modules/Sources';
import { About } from './modules/About';
import { MyComponent } from './modules/myComponent';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/sources" component={Sources}/>
            <Route path="/about" component={About}/>
            <Route path="/link" component={MyComponent}/>
        </Route>
    </Router>
), document.getElementById('root'));
