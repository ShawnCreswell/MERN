import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            
        };
    }

    
    render(){
        const incrementItem = () => {
            this.setState({ age: this.state.age + 1});
        }

        const {firstName, lastName, hairColor} = this.props
        
        return(
            <div>
                {/* {this.props.someText} */}
                <h1>{lastName}, {firstName} </h1>
                <h3>Age: {this.state.age} </h3>
                <h3>Hair Color: {hairColor} </h3>
                <button onClick={ incrementItem }>Birthday button for {firstName} {lastName}</button>

                {/* <p>the light is currently {this.state.postion}</p>
                <button onClick={ this.flipSwitch }>Birthday Button for {firstName} {lastName}</button> */}
            </div>
        )
    }

}

export default PersonCard;
