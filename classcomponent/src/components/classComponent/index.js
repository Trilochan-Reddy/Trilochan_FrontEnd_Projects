import { Component } from "react";


class Welcome extends Component{
    render() {
        const {name,greeting}=this.props
        return <h1>{greeting}, {name}</h1>
    }
};

Welcome.defaultProps={
    name:"Trilochan",
    greeting:"Hello"
};


export default Welcome;