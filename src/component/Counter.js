import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState((prev)=>({
            count: prev.count+1
        }))
    }
    handleDecrement=()=>{
        this.setState((prev)=>({
            count: prev.count-1
        }))
    }
    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
export default Counter;