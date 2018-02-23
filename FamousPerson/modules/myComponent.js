import React from 'react';

export class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lotsOfPostHereNow: []
        };

    }

    componentDidMount() {
        window.fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then((lotsOfPostHereNow) => {
                this.setState({ lotsOfPostHereNow: lotsOfPostHereNow });
            });
    }

    render() {

        const peopleLis = this.state.lotsOfPostHereNow.map((lotsOfPostHereNow, index) => {
            // Sticking objects
            return <li key={index}>TITLE: {lotsOfPostHereNow.title} <br />BODY: {lotsOfPostHereNow.body}</li>;
        });

        return (
            <ul>{peopleLis}</ul>
        );

    }

}
