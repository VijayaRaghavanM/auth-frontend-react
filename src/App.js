import React, {Component} from 'react';
import './App.css';
import Login from './Login.js'
import Register from './Register.js'

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      cpassword: '',
      login: true,
      errors: []
    }
  }
  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  register = ()=>{
    this.setState({username:'', email: '', password:'',cpassword:'',errors:[],  login: false})
  }
  
  login = ()=>{
    this.setState({password:'', cpassword:'',errors:[], login: true})
  }

  attemptLogin = () =>{
      //Usually pings the server. Returns false right now for testing
      return false;
  }

  onLogin = (event)=>{
    event.preventDefault();
    let errors = []
    if(this.attemptLogin()){
      //Code to execute after login
    }
    else{
      //Display Error
      errors.push("Invalid credentials")
    }
    this.setState({errors})
  }
  onRegister = (event)=>{
    event.preventDefault();
    console.log(event.target);
    const {username, email, password, cpassword} = this.state;

    let errors = [];
    //User name testing
    if(username.length==0){
      errors.push("Username cannot be empty") 
    }
    else if(username.length<5){
      errors.push("Username must be atleast 5 characters long") 
    }
    else if(!/^[a-z0-9]+$/.test(username)){
      errors.push("Username can contain only a-z and 0-9")
    }
    //Email Testing

    let at = email.indexOf("@")
    let dot = email.lastIndexOf(".")
    if(email.length==0){
      errors.push("Email cannot be empty") 
    }
    else if(at==-1 || dot==-1 || dot<at){
      errors.push("Invalid Email Format") 
    }
    //Password testing
    if(password.length==0){
      errors.push("Password cannot be empty") 
    }
    else if(password.length<5){
      errors.push("Password must be atleast 5 characters long") 
    }
    else if(password!=cpassword){
      errors.push("Passwords do not match") 
      this.setState({cpassword:""})
    }


    // let errors = [...this.state.errors, ...newErrors]
    this.setState({errors})
    if(errors.length==0){
      this.login()
    }
    console.log(username, email, password, cpassword)
  }
  render(){

      return (
        <div className="App">
          <div className="App-header">
            {this.state.errors.length>0 &&
            <ul className="ErrorList">
              {
                this.state.errors.map((error)=><li>{error}</li>)
              }
            </ul>
            }
              {
                (this.state.login)? 
                <Login 
                onChange={this.onChange}
                onSubmit={this.onLogin} 
                toggle={this.register}
                username={this.state.username}
                password={this.state.password}
                />
                :
                <Register 
                onChange={this.onChange}
                onSubmit={this.onRegister} 
                toggle={this.login}
                username={this.state.username}
                password={this.state.password}
                cpassword={this.state.cpassword}
                email={this.state.email}
                />
              }
          </div>
        </div>
      );
  }
}

export default App;
