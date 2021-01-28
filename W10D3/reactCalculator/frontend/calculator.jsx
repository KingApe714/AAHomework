import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {
        result: 0,
        num1: "",
        num2: ""
    }
    this.changeVal = this.changeVal.bind(this);
}

  // your code here

  changeVal(id, value) {
    //console.log(value)
    if (id === 1) {
        this.setState({num1: parseInt(value)})
    } else {
        this.setState({num2: parseInt(value)})
    }
  }

  operator(op) {
    if (op === 'm') {
        this.setState({result: this.state.num1*this.state.num2})
    } else if (op === 'd') {
        this.setState({result: this.state.num1/this.state.num2})
    } else if (op === 's') {
        this.setState({result: this.state.num1-this.state.num2})
    }  else if (op === 'a') {
        this.setState({result: this.state.num1+this.state.num2})
    }
  }

  render() {
    //debugger
    return (
      <div>
          <input onChange={(e)=>this.changeVal(1, e.target.value)} type="text"/>
          <input onChange={(e)=>this.changeVal(2, e.target.value)} type="text"/>
          <button onClick={()=>this.operator('m')}>Multiply!</button>
          <button onClick={()=>this.operator('d')}>Divide!</button>
          <button onClick={()=>this.operator('a')}>Add!</button>
          <button onClick={()=>this.operator('s')}>Subtract!</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;