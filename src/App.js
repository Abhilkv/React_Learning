/* eslint-disable no-fallthrough */
import React from 'react';
import './App.css';

class sample extends React.Component {
  constructor() {
    super ()
      this.state = {
        count: 0,
        login: false
      }
  }
  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.submit.focus();
          break
        default:
          this.firstName.focus();
      }
    }
  }
  handleClick = () => {
    alert(this.firstName.value + this.lastName.value );
  }
  
  render() {
    return (
     <div>
       <div className="inputField">
         <span>First Name</span>
         <input type="text" ref={(input)=>{this.firstName=input}} onKeyUp={this.onKeyUp.bind(this, 'firstName')}></input>
       </div>
       <div className="inputField">
         <span>First Name</span>
         <input type="text" ref={(input)=>{this.lastName=input}} onKeyUp={this.onKeyUp.bind(this, 'lastName')}></input>
       </div>
       <div className="inputField">
         <button type="submit" onClick={this.handleClick} ref={(input)=>{this.submit=input}} onKeyUp={this.onKeyUp.bind(this, 'submit')}>Submit</button>
       </div>
     </div>
    )
  }
}
export default sample;
