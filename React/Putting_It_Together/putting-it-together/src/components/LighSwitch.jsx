import React, { Component } from 'react';


class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
            
        };
    }

    // this method goes inside of the LightSwitch Component
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1});
    }


    render() {
        return (
            <fieldset>
                <p>The light is currently {this.state.clicks}</p>
                <button onClick={ this.IncrementItem }>Click to increment by 1</button>
            </fieldset>
        );
    }
}

export default LightSwitch;
