import { Component } from 'react';
import './App.css' ;
import Greeting from './Greeting';
import Summation from './Summation';

class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      sum: 0
    }
  }

  handleNum1Change = (e) => {
    this.setState({ num1 : Number(e.target.value )});
  }

  handleNum2Change = (e) => {
    this.setState({ num2 : Number(e.target.value) });
  }

  calculateSum = () => {
    this.setState((state) => ({ sum: this.state.num1 + this.state.num2 }));
  }

  render() { 
    
    const name = "kalyani";
    const age = 30;
   
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Greeting name={name} age={age}/>
          </div>   
          <div>
            <p><input type="text" value={this.state.num1} onChange={this.handleNum1Change} placeholder='Enter value for num1'/></p>
            <p><input type="text" value={this.state.num2} onChange={this.handleNum2Change} placeholder='Enter value for num2'/></p>  
            <p><button onClick={this.calculateSum}>Calculate Sum</button></p>
          </div> 
          <div>
            <Summation sum={this.state.sum}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
