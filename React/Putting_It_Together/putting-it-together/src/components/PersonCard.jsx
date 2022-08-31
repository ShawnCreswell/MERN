import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            
        };
    }

    
    render(){
        const {firstName, lastName, hairColor} = this.props
        const incrementItem = () => {
            this.setState({ age: this.state.age + 1});
        }
        const { age } = this.state;
        
        return(
            <div>
                <h1>{ lastName }, { firstName } </h1>
                <h3>Age: { age } </h3>
                <h3>Hair Color: { hairColor } </h3>
                <button onClick={ incrementItem }>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }

}

export default PersonCard;
