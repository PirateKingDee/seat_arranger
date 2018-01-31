import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e, name){
    if(!e.target.value){
      this.setState({[name]:''})
      return
    }
    this.setState({[name]: e.target.value});
  }
  render() {
    return (
      <div className="limiter">
      		<div className="container-login100" style={{"backgroundImage": "url('images/bg-01.jpg')"}}>
      			<div className="wrap-login100">
      				<div className="login100-form validate-form">
      					<span className="login100-form-logo">
      						<i className="zmdi zmdi-landscape"></i>
      					</span>

      					<span className="login100-form-title p-b-34 p-t-27">
      						Log in
      					</span>

      					<div className="wrap-input100 validate-input" data-validate = "Enter username">
      						<input className="input100" type="text" name="username" placeholder="Username"
                         value={this.state.username} onChange={(e) => {this.handleInput(e, "username")}}/>
      						<span className="focus-input100" data-placeholder="&#xf207;"></span>
      					</div>

      					<div className="wrap-input100 validate-input" data-validate="Enter password">
      						<input className="input100" type="password" name="pass" placeholder="Password"
                         value={this.state.password} onChange={(e) => {this.handleInput(e, "password")}}/>
      						<span className="focus-input100" data-placeholder="&#xf191;"></span>
      					</div>

      					<div className="container-login100-form-btn">
      						<button className="login100-form-btn">
      							Login
      						</button>
      					</div>

      					<div className="text-center p-t-90">
                  <Link className="txt1" to="/signup">create account</Link>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
    );
  }
}
