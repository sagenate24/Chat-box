import React from 'react';

export class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lotsOfPostHereNow: []
        };

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then( (lotsOfPostHereNow) =>{
                this.setState({ lotsOfPostHereNow: lotsOfPostHereNow })
            });
    }

    render() {

        const peopleLis = this.state.lotsOfPostHereNow.map(lotsOfPostHereNow => {
            // Sticking objects
         return <li>TITLE: {lotsOfPostHereNow.title} <br />BODY: {lotsOfPostHereNow.body}</li>
        });
            
        return (
            <ul>{peopleLis}</ul>
        )

    }

}
