import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
 import './login2.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.logincheck= this.logincheck.bind(this);
    this.usernamechange= this.usernamechange.bind(this);
    this.passwordchange= this.passwordchange.bind(this);

    this.state = {
      username:"",
      password:"",
     };
  }
  
  usernamechange(e){
    this.setState({
      username:e.target.value
    });
    
    
  }
  passwordchange(e){
    this.setState({
     password:e.target.value
    });
    
    
  }
  logincheck = () =>{
    
  if(this.state.username === "Ahsan" && this.state.password === "123"){
    console.log("success");
  }
    else{
      alert("Wrong username or password");

    }

  }
   
  render() {
    return (
      <div>
        <div id="example1" class="mx-auto mt-2"><h1 className="heading">Login</h1>
        <div class="input-icons"> 
            <i class="fa fa-user icon"></i> 
            <input class="input-field" type="text" onChange={this.usernamechange} placeholder="Username"/> 
            </div>
            <div class="input-icons"> 
            <i class="fa fa-key" aria-hidden="true"></i>
            <input class="input-field" type="text" onChange={this.passwordchange}  placeholder="Password"  style={{marginBottom:"10px"}}/> 
            </div>

            <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe" >Remember me</label>
                   <div style={{marginBottom:"7px"}}></div>
                   <div class="text-center">
                   <button type="button" class="btn btn-primary  " style={{alignContent:"center"}} onClick={this.logincheck}>LOGIN</button>
                   </div>     
                   <div style={{marginBottom:"15px"}}></div>   
                   <div class="text-center">
                   <a href="https://www.w3schools.com" style={{color:"#4F69A2"}}>Forgot Your Password?</a>   
                   </div>
            </div>
            <div class="text-center mt-8">
              <label style={{color:"6b8fcb"}}>New here?</label>
              <a href="#" style={{color: "white"}}>Sign Up</a>
            </div>
           
      </div>
    );
  }
}
 
export default Login;