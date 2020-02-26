import React from 'react';
import './App.css';

const sample = `user1 joined the lobby\nuser2 joined the lobby\nuser3 joined the lobby\nuser4 joined the lobby\nuser5 joined the lobby`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let tmp = this.state.value.replace(/ joined the lobby/g, '');
    let tmpArr = tmp.split('\n');
    tmpArr.map((user) => {
      window.open('https://na.op.gg/summoner/userName=' + user, '_blank');
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <form className="App-header" id="form1" onSubmit={this.handleSubmit}>
          <h1>Lol Profile Checker</h1>
          <textarea id="input" rows="8" cols="50" placeholder={sample} onChange={this.handleChange}></textarea>
          <button type="submit" form="form1" value="Submit" id="submitBtn">Check Profiles</button>
        </form>
      </div>
    );
  }

}

export default App;
