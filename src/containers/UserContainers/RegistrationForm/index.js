import React from 'react';
import axios from 'axios';
import LoginForm from '../LoginForm';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  
  updateStateParameter = (e) => {
    const param = e.target.className;
    this.setState({
      [param]: e.target.value
    });
  }

  registerUser = () => {
    const userDataServiceUrl = process.env.REACT_APP_USER_DATA_API_URL + 'register/';

    axios.post(userDataServiceUrl, {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      this.setState({
        response
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="formContainer">
        <div className="formTitle">
        </div>
        <input className="name" type="text" placeholder="Name" 
          onChange={this.updateStateParameter}></input>
        <input className="email" type="text" placeholder="Email" 
          onChange={this.updateStateParameter}></input>
        <input className="password" type="text" placeholder="Password" 
          onChange={this.updateStateParameter}></input>
        <button onClick={this.registerUser} >Register</button>
        <LoginForm />
      </div>
    )
  }
}

export default RegistrationForm;