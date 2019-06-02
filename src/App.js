import React, { Component } from 'react';
import './App.css';

class User {
  constructor(email, password){
    this.email = email;
    this.password = password;
    this.id = 'random'
  }
}

class App extends Component {
  state={
    emailInput: "",
    passwordInput: ""
  }

  updateEmail = event => {
    const newEmail = event.target.value;
    this.setState({emailInput:newEmail})
  }

  updatePassword = event => {
    const newPassword = event.target.value;
    this.setState({passwordInput:newPassword})
  }

  createUser = (e) => {
    e.preventDefault();
    const email = this.state.emailInput;
    const password = this.state.passwordInput;
    const user = new User(email,password);
    console.log(user);
    this.setState({emailInput:''});
    this.setState({passwordInput:''});
  }

  render(){
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '200px'
    }

    return (
      <div className="App">
        <h1>Login</h1>
        <form style={formStyle} onSubmit={this.createUser}>
          E-mail: <input value={this.state.emailInput} onChange={this.updateEmail}/>
          Password: <input value={this.state.passwordInput} type="password" onChange={this.updatePassword}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
 
}

export default App;