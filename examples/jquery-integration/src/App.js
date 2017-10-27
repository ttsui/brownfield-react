import React, { Component } from 'react';
import './App.css';
import MyReactJQueryComponent from './MyReactJQueryComponent';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tooltipCopyInput: '',
      tooltipCopy: 'This tooltip is rendered by jQuery Tooltipster'
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">

          <MyReactJQueryComponent tooltipCopy={ this.state.tooltipCopy }/>

          <label> Update tooltip copy:
            <input value={ this.state.tooltipCopyInput }
                   type='text'
                   onChange={ event => this.setState({ tooltipCopyInput: event.target.value })} />
            <button onClick={ () => {
                              this.setState({
                                tooltipCopyInput: '',
                                tooltipCopy: this.state.tooltipCopyInput
                              });
                            }}
                    type='button'>Update</button>
          </label>
        </div>
      </div>
    );
  }
}

export default App;
