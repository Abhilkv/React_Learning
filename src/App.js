import React from 'react';
import './App.css';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: false,gender: "male"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value, checked, type}  = event.target;
    type === "checkbox" ? this.setState({[name]: checked}): this.setState({[name]: value})
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <br />
          <input type="checkbox" name="value" checked={this.state.checked} onChange={this.handleChange}/>Click<br />
          <br/>
          <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange}/>male<br />
          <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>female
        </label>
    <h1>{this.state.gender}</h1>
    <h1>{this.state.value ? "YES" : "NO"}</h1>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default FlavorForm;
  