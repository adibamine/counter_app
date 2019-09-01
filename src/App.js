import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Count: {this.state.count}
          </p>
          <button className="Btn Add-btn" onClick={() => this.setState({count: this.state.count+1})}>ADD</button>
          <button className="Btn Remove-btn" onClick={() => this.setState({count: this.state.count-1})}>REMOVE</button>
        </div>
    );
  }
}
/* Hooks Version
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Count: {this.state.count}
      </p>
      <button className="Btn Add-btn" onClick={() => this.setState({count: this.state.count+1})}>ADD</button>
      <button className="Btn Remove-btn" onClick={() => this.setState({count: this.state.count-1})}>REMOVE</button>
    </div>
);
}
*/
export default App;
