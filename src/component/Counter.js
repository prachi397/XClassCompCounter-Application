import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <p>Count : {this.state.count}</p>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
        )
    }
}
export default Counter;