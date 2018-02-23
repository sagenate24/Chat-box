import React from 'react';
import { Link } from 'react-router';

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Nates React Router!</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/sources">Sources</Link></li>
                    <li><Link to="/link">Link</Link></li>
                </ul>

                {this.props.children}

            </div>
        );
    }
}
