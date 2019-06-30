import React, { Component } from 'react';


function Register(props) {
        return ( 
            <div className="Card" >
                <h1>Register</h1>
                <form autoComplete="off" onSubmit={props.onSubmit}>
                  <input type="text" name="username" onChange={props.onChange} value={props.username} placeholder="Username"/>
                  <input type="email" name="email" onChange={props.onChange} value={props.email} placeholder="Email"/>
                  <input type="password" name="password"  onChange={props.onChange} value={props.password} placeholder="Password"/>
                  <input type="password" name="cpassword" onChange={props.onChange} value={props.cpassword} placeholder="Confirm Password"/>
                  <button className="Button" type="submit">Create Account</button>
                </form>
                <button className="Link" href="google.com" onClick={props.toggle}>Already have an account? Login here!</button>
              </div>
         );
}

export default Register;