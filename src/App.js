import React from 'react';
import './App.css';
import store from './store/index';
import nameAction  from './actions/nameAction';
import gameAction  from './actions/gameAction';

<<<<<<< Updated upstream
class sample extends React.Component {
  constructor() {
    super ()
      this.state = {
        count: 0,
        login: false
      }
  }
  handleClick = () => {
    this.setState((prevState)=> {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleClickM = () => {
    this.state.count > 0 && this.setState((prevState)=> {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleClickR = () => {
    this.setState((prevState)=> {
      return {
        count: 0
      }
    })
  }
  handleLogin = () => {
    this.handleClickR();
    this.setState((prevState)=> {
      return {
        login: !prevState.login
      }
    })
  }
  render() {
    return (
      <div className="main">
        { this.state.login ? 
        <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick} className="btn">
          <h1> + </h1>
        </button>
        <button onClick={this.handleClickM} className="btn">
          <h1> - </h1>
        </button>
        <button onClick={this.handleClickR} className="btn">
          <h1> RESET </h1>
        </button>
        <button onClick={this.handleLogin} className="btnL">
          LOG OUT
        </button>
      </div>
      :
      <div>
        <button onClick={this.handleLogin}>
          LOGIN
        </button>
      </div>}
      </div>
    )
  }
}
export default sample;
=======
function App() {
    return (
      <div>
        <h1>PERSON NAME</h1>
        <span> Person Name: {store.getState().name.name}</span>
        <button onClick={store.dispatch(nameAction)}>CHANGE NAME</button>
        <br/>
        <span> Person Game: {store.getState().game.name}</span>
        <button onClick={store.dispatch(gameAction)}>CHANGE GAME</button>
      </div> 
    );
}
export default App;
  
>>>>>>> Stashed changes
