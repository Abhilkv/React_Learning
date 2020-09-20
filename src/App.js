import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import { connect } from "react-redux";

import { ageUp, ageDown } from './store/actions/action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.ageUp}>Age UP</button>
        <button onClick={this.props.ageDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo" />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispachToProps = dispatch => {
  return {
    ageUp: () => dispatch(ageUp(1)),
    ageDown: () => dispatch(ageDown(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

// const mapDispachToProps = {
//   ageUp,
//   ageDown
// };
// we can also define the mapDispatchTo props like this, then pass the value from the involked section



// we use thunk or saga to make the actions async (i.e the reducers) , thunk works with a callBack called actionCreator
// in redux thunk , take the action and instead of executed right away, we just wrap it with a function,
//  on mapDispatchTOProps instead of dispatching an object wrap it with a function called as actionCreator

// look at the store - actions - actions.js 