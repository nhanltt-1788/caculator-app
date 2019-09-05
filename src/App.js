import React, { Component } from 'react';
import './App.css';

import KeyPadComponent from './components/KeyPadComponent'
import ResultComponent from './components/ResultComponent'
import { AppWrapper } from './style'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (button) => {
    switch(button) {
      case "=":
        this.caculate()
        break
      case "CE":
        this.backspace()
        break
      case "C":
        this.reset()
        break
      default:
        this.setState({
          result: this.state.result + button
        })
    }
  }

  caculate = () => {
    const checkResult = this.state.result.includes('--') ? this.state.result.replace('--','+') : this.state.result

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "" ) + ""
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: '',
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
      <AppWrapper>
        <h1>Simple Calculator</h1>
        <ResultComponent result={this.state.result} />
        <KeyPadComponent handleClick={this.handleClick} />
      </AppWrapper>    
    )
  }
}

export default App;
